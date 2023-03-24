const router = require('express').Router();
const { User, Comment, Post } = require('../models');
const { findAll } = require('../models/User');

//Hompage route all posts
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
        },
      ],
    });

    const postDb = postData.map((post) =>
      post.get({ plain: true })
    );
    console.log(postDb);
    res.render('homepage', {
      postDb,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

// Homepage get post by single id
router.get('/post/:id', async (req, res) => {
   try {
    const postData = await Post.findByPk(req.params.id, { 
      include: [
       {
         model: User,
         attributes: ['username'],
      },
      {
        model: Comment,
        attributes: [
        'title',
        'body',
        'user_id'
      ],
      include: [
        {
          model: User,
          attributes: ['username'],
        }
              ]
      },
  ],
  
});
    const post = postData.get({plain: true});

    res.render('post', {
      ...post,
      logged_in: req.session.logged_in,
      logged_in_user_id: req.session.user_id
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Homepage login route
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;