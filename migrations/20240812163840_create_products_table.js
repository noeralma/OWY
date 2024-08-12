/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("products", function (table) {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.decimal("price", 8, 2).notNullable();
    table.string("image_url").notNullable();
    table
      .integer("product_type_id")
      .unsigned()
      .references("id")
      .inTable("product_types")
      .onDelete("CASCADE");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("products");
};
