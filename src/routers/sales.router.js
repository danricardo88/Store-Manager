const express = require('express');
const salesControl = require('../controllers/sales.controller');
// const { handleValidateSales } = require('../middlewares/validateSales');

const router = express.Router();

// router.post('/', handleValidateSales, salesControl.insertSale);
router.post('/', salesControl.insertSale);
router.get('/', salesControl.allSales);
router.get('/:id', salesControl.salesID);

module.exports = router;
