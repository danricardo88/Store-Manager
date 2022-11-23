const { productsServices } = require('../services');

const OK = 200;
const SUCCESS = 201;
const ERRO = 404;
const OUTROERRO = 422;

const getAll = async (_request, response) => {
  const { message } = await productsServices.getAll();
  response.status(OK).json(message);
};

const getProductsID = async (request, response) => {
  const { id } = request.params;
  // const { type, message } = await productsServices.getProductsID(id);
  const prod = await productsServices.getProductsID(id);
  if (!prod) return response.status(ERRO).json({ message: 'Product not found' });
  return response.status(OK).json(prod);
};

const insertProduct = async (request, response) => {
  const { name } = request.body;
  const test = await productsServices.insertProduct(name);
   if (test.message) return response.status(OUTROERRO).json(test);
  response.status(SUCCESS).json(test);
  // if (!type) return response.status(SUCCESS).json(message);
  // return response.status(ERRO).json(message);
};

module.exports = {
  getAll,
  getProductsID,
  insertProduct,
};
