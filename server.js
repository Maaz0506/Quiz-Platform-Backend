const express = require("express");
const cors = require("cors");
const questionRouter = require("./routes/questionRouter.js");
const answerRouter = require("./routes/answerRouter");
const scoreRouter = require("./routes/scoreRouter");
const typeRouter = require("./routes/typeRouter");
const userRouter=require("./routes/User.router.js")
const PORT = 4000;
const db=require("./models/index.js")
require("./models");
const app = express();
const config = require("./config/config.js");
const { Sequelize, DataTypes } = require("sequelize");


// Database Connection
const sequelize = new Sequelize(config.db);
if (require.main === module) {
  sequelize
    .sync({ force: false }) 
    .then(() => {
      console.log("Database tables synchronized");
    })
    .catch((err) => {
      console.error("Error syncing database:", err);
    });
}

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
app.use("/api/question", questionRouter);
app.use("/api/answer", answerRouter);
app.use("/api/score/", scoreRouter);
app.use("/api/type", typeRouter);
app.use("/api/auth/", userRouter);

// testing
app.get("/", (req, res) => {
  res.json("hello from api");
});



app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
