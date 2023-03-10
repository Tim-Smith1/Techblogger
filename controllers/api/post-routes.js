const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");
const sequelize = require("../../config/connection");

router.get('/', (req, res) => {
  Post.findAll({
    where: {
      user_id: req.session.userId
      },
    attributes: [
      'id',
      'title',
      'body',
      'created_at'
      ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
        },
        {
          model: User,
          attributes: ['username']
        },
      ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.post('/', withAuth, async (req, res) => {
    try {
      const dbPostData = await Post.create({
        title: req.body.title,
        body: req.body.body,
        userId: req.session.userId //req.body.userId
      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res.status(200).json(dbPostData);
       });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

router.delete('/:id', withAuth, async (req, res) => {
    try {
      const delPostData = await Post.destroy({
        where: {
          id: req.params.id
        }
      });
      if (!delPostData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
      res.status(200).json(delPostData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;