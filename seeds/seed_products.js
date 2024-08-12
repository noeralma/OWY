/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  return knex("products")
    .del()
    .then(function () {
      return knex("products").insert([
        {
          name: "Basic Music Box",
          price: 29.99,
          image_url: "/images/basic-music-box.jpg",
          product_type_id: 1,
        },
        {
          name: "Premium Music Box",
          price: 49.99,
          image_url: "/images/premium-music-box.jpg",
          product_type_id: 2,
        },
        {
          name: "Ceramic Music Box",
          price: 39.99,
          image_url: "/images/ceramic-music-box.jpg",
          product_type_id: 3,
        },
        {
          name: "Vintage Music Box",
          price: 59.99,
          image_url: "/images/vintage-music-box.jpg",
          product_type_id: 4,
        },
        {
          name: "Glassed Preserved Flowers",
          price: 19.99,
          image_url: "/images/glassed-preserved-flowers.jpg",
          product_type_id: 5,
        },
        {
          name: "Sphere Preserved Flower",
          price: 24.99,
          image_url: "/images/sphere-preserved-flowers.jpg",
          product_type_id: 6,
        },
        {
          name: "Giant Stuffed Bear",
          price: 89.99,
          image_url: "/images/giant-stuffed-bear.jpg",
          product_type_id: 7,
        },
        {
          name: "Giant Stuffed Corgi",
          price: 79.99,
          image_url: "/images/giant-stuffed-corgi.jpg",
          product_type_id: 8,
        },
      ]);
    });
};
