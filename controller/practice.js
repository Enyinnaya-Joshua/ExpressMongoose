const express = require("express");

const port = 2200;

const app = express();

require("../config/db");
const devRouter = require("../router/devRouter");

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is up and runninig",
  });
});

app.use("/api", devRouter);

app.listen(port, () => {
  console.log(`listening to ${port}`);
});
