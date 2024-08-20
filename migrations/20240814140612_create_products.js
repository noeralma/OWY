/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("products", function (table) {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("description");
    table.integer("price").notNullable();
    table.string("image_url");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("products");
};
