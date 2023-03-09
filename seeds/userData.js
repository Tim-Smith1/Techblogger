const { User } = require('../models');

const userData = [
    {
        username: 'test1',
        password: 'password1'
    },
    {
        username: 'test2',
        password: 'password2'
    },
    {
        username: 'test3',
        password: 'password3'
    },
    {
        username: 'test4',
        password: 'password4'
    },
]

const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData;