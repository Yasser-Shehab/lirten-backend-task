const express = require("express");
const app = express();
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 500;
const connectDB = require("./config/db");

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, async () => {
  console.log(`Listing On ${port}`);
});
