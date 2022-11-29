const salesMod = require('../models/sales.model');
const { handleQuantidade, handleProductts } = require('./validations/saleValidation');

const ERRO = 404;
const ENTENDEU = 422;

const insertSale = async (products) => {
  const { type, message } = handleQuantidade(products);
  if (type) return { type: ENTENDEU, message };

  const productsValidate = await handleProductts(products);
  if (productsValidate.includes(undefined)) {
    return { type: ERRO, message: 'Product not found' };
  }

  const id = await salesMod.insertSale();
  await Promise.all(
    products.map(async (product) =>
      salesMod.insertSaleProd(id, product)),
  );

  const result = {
    id,
    itemsSold: products,
  };

  return { type: null, message: result };
};

const allSales = async () => {
  const modelSales = await salesMod.allSales();
  return modelSales;
};

const salesID = async (id) => {
  const modelSalesID = await salesMod.salesID(id);
  return modelSalesID;
};
//

module.exports = {
  insertSale,
  allSales,
  salesID,
};
