const express = require('express');

const productController = require("../controllers/proContoller");

const router = express.Router();
router.post("/addproduct", productController.addProduct);
router.get("/getproducts", productController.getProducts);
router.delete("/deleteproduct/:id", productController.deleteProduct);

module.exports = router;