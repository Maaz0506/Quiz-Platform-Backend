const dbConfig = require('../config/dbConfig.js');

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize (
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host : dbConfig.HOST,
        dialect : dbConfig.dialect,
        // operatorsAliases : false
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected')
})
.catch( err => {
    console.log('error' + err)
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./userModel.js'),(sequelize,DataTypes);
db.questions = require('./quesModel.js'),(sequelize,DataTypes);
db.answers = require('./ansModel.js'),(sequelize,DataTypes);
db.score = require('./scoreModel.js'),(sequelize,DataTypes);


db.sequelize.sync({ force:false })
.then(() => {
    console.log('Successfully Synced')
})

module.exports = db;