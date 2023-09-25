const express = require("express");
const dotenv = require("dotenv");
const products = require("./products.json");
dotenv.config({ path: "./config/.env" });

var app = express();
var router = express.Router();
app.use("/products", router);

app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("dist"));
app.use(express.static("node_modules"));

router.get("/", (req, res) => {
  let product = products.products;
  res.render("home", { product });
});

const PORT = process.env.PORT;
const URI = process.env.URI;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
