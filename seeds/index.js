 const seedComment = require('./commentData');
const seedUserData = require('./userData');
 const seedPostData = require('./postData');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  
  await seedUserData();
  
  await seedPostData();
  await seedComment();


  process.exit(0);
};

seedAll();