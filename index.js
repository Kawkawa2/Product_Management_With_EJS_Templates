const express = require("express");
const dotenv = require("dotenv");
const products = require("./products.json");

dotenv.config({ path: "./config/.env" });

var app = express();

app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("dist"));
app.use(express.static("node_modules"));

const distinctCategories = [
  ...new Set(products.products.map((product) => product.category)),
];
app.get("/", (req, res) => {
  let product = products.products;
  res.render("home", { product, distinctCategories });
});
console.log(distinctCategories);
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
