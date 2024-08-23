const { Sequelize } = require('sequelize');
const dbConfig = require('./../config/db.config');

 // Initialize sequelize connection
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USERNAME, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT
});

// test connection
try {
    sequelize.authenticate();
    console.log('Database connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error.message);
}

 
const db = {}
db.collages = require('./colleges.model')(sequelize, Sequelize)

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;


