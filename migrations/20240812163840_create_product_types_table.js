/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("product_types", function (table) {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("category").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("product_types");
};
