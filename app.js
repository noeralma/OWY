const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(session({ secret: "secret", resave: false, saveUninitialized: true }));

app.set("view engine", "ejs");

const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.use("/", productRoutes);
app.use("/", cartRoutes);
app.use("/", orderRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
