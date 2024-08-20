const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig.development);

module.exports = {
  createOrder: (orderId, total, items) => {
    return knex("orders").insert({
      order_id: orderId,
      total,
      items: JSON.stringify(items),
    });
  },
  getAllOrders: () => {
    return knex("orders").select("*");
  },
};
