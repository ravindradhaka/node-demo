const path = require('path')
const dbConfig = require(path.resolve('config', 'db'))
console.log('dbConfig',dbConfig)

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.wallet = require("./wallet.model.js")(sequelize, Sequelize);
db.transaction = require("./transaction.model.js")(sequelize, Sequelize);


module.exports = db;