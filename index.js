const express = require("express");
const mongoose = require("mongoose");
const app = express();
const errHandle = require("./middleware/middleware")


const todoRoute = require("./Route/todoRoutes")



app.use(express.json()); //TO Read Json data


//--------All Routes-------------------
app.use("/api",todoRoute);


//--------Middleware---------
app.use(errHandle)




mongoose
  .connect("mongodb://127.0.0.1:27017/todoDB")
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

const PORT = 7111;














