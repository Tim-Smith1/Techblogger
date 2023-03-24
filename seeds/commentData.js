const { Comment } = require('../models');

const commentData = [
    {
      body: 'Great post!',
      user_id: 4,
      post_id: 1
    },
    {
      body: 'I agree!',
      user_id: 3,
      post_id: 2
    },
    {
      body: 'hmm good stuff!',
      user_id: 2,        
      post_id: 3
    },
    {
      body: 'Looking good!',
      user_id: 1,
      post_id: 4
    },
  ];

  const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;