const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router.post("/cart/add", cartController.add);
router.get("/cart", cartController.showCart);
router.post("/cart/checkout", cartController.checkout);

module.exports = router;
