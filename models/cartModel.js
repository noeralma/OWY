const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig.development);

module.exports = {
  addToCart: (productId, quantity) => {
    return knex("cart_items").insert({ product_id: productId, quantity });
  },
  getCartItems: () => {
    return knex("cart_items")
      .join("products", "cart_items.product_id", "products.id")
      .select(
        "cart_items.*",
        "products.name",
        "products.price",
        "products.image_url"
      );
  },
  clearCart: () => {
    return knex("cart_items").truncate();
  },
};
