const Product = require("../models/productModel");

module.exports = {
  index: async (req, res) => {
    const products = await Product.getAllProducts();
    res.render("pages/index", { products });
  },
  show: async (req, res) => {
    const product = await Product.getProductById(req.params.id);
    res.render("pages/product", { product });
  },
};
