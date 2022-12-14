const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/', productsController.getProducts);

router.get('/checkout');

router.get('/cart', productsController.viewCart);

router.get('/products', productsController.getProducts);

module.exports = router;
