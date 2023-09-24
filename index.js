const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });

var app = express();
var router = express.Router();
app.use("/products", router);
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "views");

router.get("/", (req, res) => {
  let name = "kawtar";
  res.render("home", { name });
});

const PORT = process.env.PORT;
const URI = process.env.URI;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
