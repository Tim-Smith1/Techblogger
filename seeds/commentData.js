const { Comment } = require('../models');

const commentData = [
    {
      comment_text: 'Great post!',
      user_id: 4,
      post_id: 1
    },
    {
      comment_text: 'I agree!',
      user_id: 3,
      post_id: 2
    },
    {
      comment_text: 'hmm good stuff!',
      user_id: 2,        
      post_id: 3
    },
    {
      comment_text: 'Looking good!',
      user_id: 1,
      post_id: 4
    },
  ];

  const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;