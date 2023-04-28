const Products = require("../models/products");


const getAllProducts = async (req, res, next) => {
  const products = await Products.find().exec();
  res.json(products);
};


const getOneProduct = async (req, res, next) => {
  const id = req.params.id;
  const product = await Products.findById(id);
  res.json(product);
};


const addProduct = async (req, res, next) => {
  const { title, price } = req.body;

  const newProduct = new Products({
    title: title,
    price: price,
  });

  await newProduct.save();

  res.status(201).json({ message: "Product is added." });
};

exports.getAllProducts = getAllProducts;
exports.getOneProduct = getOneProduct;
exports.addProduct = addProduct;
