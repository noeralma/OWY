// routes/productRoutes.js
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Define route to get product details by ID
router.get("/products/:id", productController.getProductDetails);

module.exports = router;
