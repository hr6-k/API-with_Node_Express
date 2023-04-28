const express = require("express");
const mongoose = require("mongoose");

const productRoutes = require("./routes/product-routs");
const app = express();

app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("Hello World!");
});

app.use("/api", productRoutes);

//app.listen(8000);

mongoose
  .connect("mongodb://127.0.0.1:27017/products") // 127.0.0.1 in hamin ip e local host hastesh, wali dar version e jadid e node, mongo ba ip kar mikone na ba localhost
  .then(() => {
    app.listen(8000);
  })
  .catch((err) => {
    console.log(err);
  });
