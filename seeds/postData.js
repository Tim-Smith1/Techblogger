const { Post } = require('../models');

const postData = [
    {
      title: 'My First Post',
      body: 'oneLorem ipsum dolor sit amet, consectetur adipiscing elit.',
      user_id: 1
    },
    {
      title: 'My Second Post',
      body: 'twoPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      user_id: 2
    },
    {
      title: 'My Third Post',
      body: 'threeLorem ipsum dolor sit amet, consectetur adipiscing elit.',
      user_id: 3
    },
    {
      title: 'My Fourth Post',
      body: 'fourPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      user_id: 4
    },
  ];

  const seedPostData = () => Post.bulkCreate(postData);

module.exports = seedPostData;