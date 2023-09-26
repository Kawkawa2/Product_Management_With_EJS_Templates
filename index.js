const express = require("express");
const dotenv = require("dotenv");
const products = require("./public/products.json");

dotenv.config({ path: "./config/.env" });

var app = express();

app.set("views", "views");
app.set("view engine", "ejs");

// static middleware
app.use(express.static("public", { maxAge: 604800000 }));
app.use(express.static("dist", { maxAge: 604800000 }));
app.use(express.static("node_modules", { maxAge: 604800000 }));

const distinctCategories = [
  ...new Set(products.products.map((product) => product.category)),
];
app.get("/", (req, res) => {
  let product = products.products;
  res.render("home", { product, distinctCategories });
});

distinctCategories.forEach((element) => {
  app.get(`/${element}`, (req, res) => {
    let product = products.products.filter(
      (product) => product.category === element
    );
    res.render("home", {
      product,
      distinctCategories,
    });
  });
});

const PORT = process.env.PORT;
const URI = process.env.URI;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
