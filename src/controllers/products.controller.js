const { productsServices } = require('../services');

const OK = 200;
const SUCCESS = 201;
const ERRO = 404;

const getAll = async (_request, response) => {
  const { message } = await productsServices.getAll();
  response.status(OK).json(message);
};

const getProductsID = async (request, response) => {
  const { id } = request.params;
  const { type, message } = await productsServices.getProductsID(id);
  if (type) return response.status(ERRO).json({ message });
  return response.status(OK).json(message);
};

const insertProduct = async (request, response) => {
  const { name } = request.body;
  const { type, message } = await productsServices.insertProduct(name);
  if (!type) return response.status(SUCCESS).json(message);
  return response.status(ERRO).json(message);
};

module.exports = {
  getAll,
  getProductsID,
  insertProduct,
};
