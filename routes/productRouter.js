const express = require("express");
const productController = require("../controller/productsController");
const authController = require("../controller/authController");
const router = express.Router();
router
  .route("/")
  .get(authController.protect, productController.getAllProducts)
  .post(productController.createProduct);
router
  .route("/:id")
  .get(productController.getAllProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);
module.exports = router;
