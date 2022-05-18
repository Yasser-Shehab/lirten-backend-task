const express = require("express");
const app = express();
const cors = require("cors");
const { profileRouter } = require("./routes/profileRoutes");
const colors = require("colors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");

connectDB();

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/profile", profileRouter);
app.use(errorHandler);

app.listen(port, async () => {
  console.log(`Listing On ${port}`);
});
