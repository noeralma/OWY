/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  return knex("product_types")
    .del()
    .then(function () {
      return knex("product_types").insert([
        { name: "Basic Music Box", category: "Music Box" },
        { name: "Premium Music Box", category: "Music Box" },
        { name: "Ceramic Music Box", category: "Music Box" },
        { name: "Vintage Music Box", category: "Music Box" },
        { name: "Glassed Preserved Flowers", category: "Preserved Flowers" },
        { name: "Sphere Preserved Flower", category: "Preserved Flowers" },
        { name: "Giant Stuffed Bear", category: "Giant Stuffed Animals" },
        { name: "Giant Stuffed Corgi", category: "Giant Stuffed Animals" },
      ]);
    });
};
