// controllers/productController.js
const ProductModel = require("../models/productModel");

const getProductDetails = (req, res) => {
  const productId = parseInt(req.params.id, 10);
  const product = ProductModel.getProductById(productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

module.exports = { getProductDetails };
