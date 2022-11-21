const express = require('express');
const productsController = require('../controllers/products.controller');

const router = express.Router();

router.get('/', productsController.getAll);

router.get('/:id', productsController.getProductsID);

router.post('/', productsController.insertProduct);

module.exports = router;
