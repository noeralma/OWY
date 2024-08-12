const express = require("express");
const app = express();
const port = 3000;
const db = require("./db");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Endpoint to get all products
app.get("/products", async (req, res) => {
  try {
    const products = await db("products").select("*");
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Endpoint to get all product types
app.get("/product-types", async (req, res) => {
  try {
    const productTypes = await db("product_types").select("*");
    res.json(productTypes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
