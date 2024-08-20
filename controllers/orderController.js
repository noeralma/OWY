const Order = require("../models/orderModel");

module.exports = {
  index: async (req, res) => {
    const orders = await Order.getAllOrders();
    res.render("pages/orders", { orders });
  },
};
