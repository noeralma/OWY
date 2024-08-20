const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig.development);

module.exports = {
  getAllProducts: () => {
    return knex("products").select("*");
  },
  getProductById: (id) => {
    return knex("products").where("id", id).first();
  },
};
