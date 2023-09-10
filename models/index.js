const config = require("../config/config.js");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(config.db);

sequelize
  .authenticate()
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("error" + err);
  });

const db = {};

db.sequelize = sequelize;

db.Sequelize = Sequelize;

db.user = require("./userModel.js")(sequelize, DataTypes);
db.question = require("./quesModel.js")(sequelize, DataTypes);
// db.answer = require("./ansModel.js")(sequelize, DataTypes);
db.score = require("./scoreModel.js")(sequelize, DataTypes);
db.type = require("./typeModel.js")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("Successfully Synced");
});

module.exports = db;
