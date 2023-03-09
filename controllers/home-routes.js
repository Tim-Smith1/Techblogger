const router = require('express').Router();
const { User, Comment, Post } = require('../models');

//Hompage route
router.get('/', async (req, res) => {
  req.session.userId = null;
  req.session.loggedIn = false;
  res.render('homepage');
})

// GET all
router.get('/user', async (req, res) => {
  try {
    const userData = await User.findAll({
      include: [
        {
          model: Comment,
        },
      ],
    });

    const userDb = userData.map((user) =>
      user.get({ plain: true })
    );
    res.render('user', {
      userDb,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;