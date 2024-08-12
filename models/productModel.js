// models/productModel.js
const products = [
  {
    id: 1,
    name: "Basic Music Box",
    price: 250000,
    images: [
      "image/brd-44261_kotak-musik-kayu-you-are-my-sunshine-wooden-music-box-kado-unik-gf_full01.webp",
      "image/Music-Box-Peksi-Merak-S-01.jpg",
      "image/Music-Box-Peksi-Merak-S-02.jpg",
      "image/Music-Box-Peksi-Merak-S-03.jpg",
    ],
    description:
      "Music boxes that come in different styles. Pick your own suitable music box which is a perfect gift for your loved one!",
    types: [
      "Basic Music Box",
      "Premium Music Box",
      "Ceramic Music Box",
      "Vintage Music Box",
    ],
  },
  // Add more products here if needed
];

const getProductById = (id) => products.find((p) => p.id === id);

module.exports = { getProductById };
