const Router = require("express").Router();
const upload = require("../middleware/multer");
const {
  addProduct,
  listProducts,
  removeProduct,
  singleProduct,
} = require("../controllers/productController");

Router.post(
  "/add",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);
Router.post("/remove", removeProduct);
Router.get("/list", listProducts);
Router.post("/single", singleProduct);

module.exports = Router;
