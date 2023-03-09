const router = require("express").Router();
const { Post } = require("../../models");

router.post('/', async (req, res) => {
    try {
      const dbPostData = await Post.create({
        title: req.body.title,
        body: req.body.body,
        userId: req.session.userId //req.body.userId
      });
  
      // req.session.save(() => {
      //   req.session.loggedIn = true;
  
        res.status(200).json(dbPostData);
      // });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.delete('/:id', async (req, res) => {
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