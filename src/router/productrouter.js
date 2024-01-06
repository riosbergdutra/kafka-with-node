const express = require('express');
const router = express.Router();
const productController = require('../controller/productcontroller');

router.post('/create', productController.createProduct);
router.put('/update', productController.updateProduct);
router.delete('/delete/:productId', productController.deleteProduct);
router.get('/read/:productId', productController.readProduct);

module.exports = router;
