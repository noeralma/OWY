/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("orders", function (table) {
    table.increments("id").primary();
    table.string("order_id").unique().notNullable();
    table.timestamp("date").defaultTo(knex.fn.now());
    table.integer("total").notNullable();
    table.json("items"); // Store items as JSON
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("orders");
};
