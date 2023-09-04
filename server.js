const express = require("express");
const cors = require("cors");

require("./models");

const app = express();

const corsOptions = {
  origin: "https://localhost:8081",
};

// middlewares

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
const questionRouter = require("./routes/questionRouter.js");
app.use("/api/question", questionRouter);

const answerRouter = require("./routes/answerRouter");
app.use("/api/answer", answerRouter);

const scoreRouter = require("./routes/scoreRouter");
app.use("/api/score/", scoreRouter);

const typeRouter = require("./routes/typeRouter");
app.use("/api/type", typeRouter);

// testing
app.get("/", (req, res) => {
  res.json("hello from api");
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
