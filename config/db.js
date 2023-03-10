const mongoose = require("mongoose");

const MONGODB_URI = "mongodb://localhost/Devs";

mongoose.connect(MONGODB_URI);
mongoose.connection
  .on("open", () => {
    console.log("Database connected");
  })
  .once("error", (error) => {
    console.log("Failed to connect to the database"), error;
  });
