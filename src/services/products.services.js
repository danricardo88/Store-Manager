const { productsModel } = require('../models');
const { nameValidation } = require('./validations/inputValidations');

const getAll = async () => {
  const products = await productsModel.getAll();
  return { type: null, message: products };
};

const getProductsID = async (id) => {
  const products = await productsModel.getProductsID(id);
  if (products) return { type: null, message: products };
  return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
};

const insertProduct = async (prod) => {
  const validateProd = nameValidation(prod);
  if (validateProd) return validateProd;
  const create = await productsModel.insertProduct(prod);
  const criou = await productsModel.getProductsID(create);
  return { type: null, message: criou };
};

module.exports = {
  getAll,
  getProductsID,
  insertProduct,
};
