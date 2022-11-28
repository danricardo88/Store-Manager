const { productsModel } = require('../models');
const { nameValidation } = require('./validations/inputValidations');

const getAll = async () => {
  const products = await productsModel.getAll();
  return { type: null, message: products };
};

const getProductsID = async (id) => {
  const products = await productsModel.getProductsID(id);
  return products;
};

const insertProduct = async (prod) => {
  const validateProd = nameValidation(prod);
  if (validateProd) return validateProd;
  const create = await productsModel.insertProduct(prod);
  const criou = await productsModel.getProductsID(create);
  return criou;
};

const upProducts = async (name, id) => {
  const productValidate = await nameValidation(name);
  const productUp = await productsModel.upProducts(name, id);
  if (productValidate) return productValidate;
  if (productUp <= 0) return { type: 422, message: 'Product not found' };
  return { type: null, message: { name, id } };
};

const delet = async (id) => {
  const deleta = await productsModel.delet(id);
  if (deleta <= 0) return { type: 422, message: 'Product not found' };
  return { type: null };
};

module.exports = {
  getAll,
  getProductsID,
  insertProduct,
  upProducts,
  delet,
};
