const express = require("express");
const mongoose = require("mongoose");
const app = express();

const userTest = require("./models/userTest"); // Ensure this path matches the actual file location

app.get("/", async (req, res) => {
  try {
    const user1 = new userTest({
      // Make sure the constructor name matches the export of your model
      userName: "sysh",
      firstName: "James",
    });
    await user1 .save();
    res.send("<h2>Hello from James' Express.js server!</h2>");
  } catch     (   error) {
    console.error("Error saving user:", error);
    res.status(500).send("Error processing request");
  }
});

mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.zwnt0yr.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "class1-test",
    },
  )
  .then(() => {
    console.log("Database Connected!");
    app.listen(3000, () => {
      console.log("Server listening on port 3000");
    });
  })
  .catch((err) => {
    console.error(err);
  });
