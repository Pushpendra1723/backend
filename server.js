const express = require("express");
const app = express();
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
app.use(cors());

const router = require("./routes/userRoute.js");
//Connection With Database
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Connect Successfully to Pushpendra_TensorGo DB");
    app.listen(process.env.PORT || 8000, (err) => {
      if (err) console.log(err);
      console.log("Success", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("error", error);
  });

app.use(router);
