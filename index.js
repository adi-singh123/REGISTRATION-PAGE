require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const url = process.env.MONGO_URL;
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));

const { PersonModel } = require("./models/PersonModel");

app.post("/registation", (req, res) => {
  let NewPerson = new PersonModel({
    Name: req.body.fullname,
    Email:req.body.email,
    Password:req.body.password,
    Gender: req.body.gender,
    Terms: req.body.terms,
  });
  NewPerson.save();
  // console.log(NewPerson);
  res.send("Done");
});

app.listen(port, () => {
  console.log("server is start");
  mongoose.connect(url);
  console.log("db is connect");
});
