const express = require('express');
const productsController = require('../controllers/products.controller');
const { nameRequired, upRequired } = require('../middlewares/validadeNameInProducts');

const router = express.Router();

router.get('/', productsController.getAll);

router.get('/:id', productsController.getProductsID);

router.post('/', nameRequired, productsController.insertProduct);

router.put('/:id', nameRequired, upRequired, productsController.upProducts);

router.delete('/:id', productsController.delet);

module.exports = router;
