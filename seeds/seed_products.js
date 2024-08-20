/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("products")
    .del()
    .then(function () {
      return knex("products").insert([
        {
          id: 1,
          name: "Basic Music Box",
          description: "A simple, elegant music box.",
          price: 250000,
          image_url:
            "/images/brd-44261_kotak-musik-kayu-you-are-my-sunshine-wooden-music-box-kado-unik-gf_full01.webp",
        },
        {
          id: 2,
          name: "Premium Music Box",
          description: "A premium music box with more features.",
          price: 350000,
          image_url: "/images/Music-Box-Peksi-Merak-S-01.jpg",
        },
        {
          id: 3,
          name: "Ceramic Music Box",
          description: "A beautiful ceramic music box.",
          price: 300000,
          image_url: "/images/Music-Box-Peksi-Merak-S-02.jpg",
        },
        {
          id: 4,
          name: "Giant Stuffed Corgi",
          description: "A giant, huggable stuffed corgi.",
          price: 350000,
          image_url: "/images/Music-Box-Peksi-Merak-S-03.jpg",
        },
        {
          id: 5,
          name: "Glassed Preserved Flowers",
          description: "Preserved flowers in a glass dome.",
          price: 150000,
          image_url: "/images/Preserve 1.jpg",
        },
        {
          id: 6,
          name: "Sphere Preserved Flowers",
          description: "Preserved flowers in a sphere.",
          price: 180000,
          image_url: "/images/Preserve 2.jpg",
        },
        {
          id: 7,
          name: "Giant Stuffed Bear",
          description: "A giant, huggable stuffed bear.",
          price: 100000,
          image_url: "/images/Stuffed 1.webp",
        },
        {
          id: 8,
          name: "Giant Stuffed Corgi",
          description: "A giant, huggable stuffed corgi.",
          price: 120000,
          image_url: "/images/Stuffed 2.webp",
        },
      ]);
    });
};
