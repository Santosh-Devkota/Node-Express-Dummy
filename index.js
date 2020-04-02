const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const colors = require("colors");

//for loading env variables from .env files
dotenv.config({ path: "./config/config.env" });

//calling the function to connect to the database
connectDb();

const app = express();
app.use(express.json());
//(Middleware) For logging the requests
const logger = require("morgan");
if (process.env.NODE_ENV === "development") {
  app.use(logger("tiny"));
}

const devcamper = require("./routes/devcamper.js");

//using routes
app.use("/api/v1/bootcamps", devcamper);

const PORT = process.env.PORT || 5000;
const env = process.env.NODE_ENV;
app.listen(
  PORT,
  console.log(`Running server on ${PORT} with env:${env}..`.yellow)
);
