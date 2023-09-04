require("dotenv").config();

module.exports = {
  db: {
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialect: "mysql",
  },
  app: {
    port: 4000,
  },
};
