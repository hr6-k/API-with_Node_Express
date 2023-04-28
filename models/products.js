/*
const products = [
  {
    id: 1,
    title: "book 1",
    price: 99,
  },
  {
    id: 2,
    title: "book 2",
    price: 89,
  },
];

module.exports = products;
*/

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Product", productSchema);
