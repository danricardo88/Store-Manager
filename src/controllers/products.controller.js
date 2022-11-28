const { productsServices } = require('../services');

const OK = 200;
const SUCCESS = 201;
const NO_CONTENT = 204;
const ERRO = 404;
const OUTROERRO = 422;

const getAll = async (_request, response) => {
  const { message } = await productsServices.getAll();
  response.status(OK).json(message);
};

const getProductsID = async (request, response) => {
  const { id } = request.params;
  const feedback = await productsServices.getProductsID(id);
  if (!feedback) return response.status(ERRO).json({ message: 'Product not found' });
  return response.status(OK).json(feedback);
};

const insertProduct = async (request, response) => {
  const { name } = request.body;
  const feedback = await productsServices.insertProduct(name);
  if (feedback.type) return response.status(OUTROERRO).json(feedback.message);
  return response.status(SUCCESS).json(feedback);
};

const upProducts = async (request, response) => {
  const { name } = request.body;
  const { id } = request.params;
  const feedback = await productsServices.upProducts(name, id);
  if (feedback.type) return response.status(ERRO).json({ message: 'Product not found' });
  return response.status(OK).json(feedback.message);
};

const delet = async (request, response) => {
  const { id } = request.params;
  const feedback = await productsServices.delete(id);
  if (feedback.type) return response.status(ERRO).json('Product not found');
  return response.status(NO_CONTENT).json(feedback.message);
};

module.exports = {
  getAll,
  getProductsID,
  insertProduct,
  upProducts,
  delet,
};
