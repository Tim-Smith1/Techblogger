const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");


router.post('/', withAuth, async (req, res) => {
    try {
      const dbCommData = await Comment.create({
        body: req.body.body,
        userId: req.session.userId, //req.body.userId
        post_id: req.body.post_id,
      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res.status(200).json(dbCommData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });



  module.exports = router;