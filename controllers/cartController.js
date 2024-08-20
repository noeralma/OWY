const Cart = require("../models/cartModel");

module.exports = {
  add: async (req, res) => {
    const { productId, quantity } = req.body;
    await Cart.addToCart(productId, quantity);
    res.redirect("/cart");
  },
  showCart: async (req, res) => {
    const cartItems = await Cart.getCartItems();
    res.render("pages/cart", { cartItems });
  },
  checkout: async (req, res) => {
    const cartItems = await Cart.getCartItems();
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const orderId = `ORD-${Date.now()}`;

    await Order.createOrder(orderId, total, cartItems);
    await Cart.clearCart();

    res.redirect("/orders");
  },
};
