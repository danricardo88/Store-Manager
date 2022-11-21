const { productsServices } = require('../services');
// const errorMap = require('../utils/errorMap');

const OK = 200;
const ERRO = 404;

const getAll = async (_request, response) => {
  const { message } = await productsServices.getAll();
  response.status(OK).json(message);
};

const getProductsID = async (_request, response) => {
  const { id } = _request.params;
  const { type, message } = await productsServices.getProductsID(id);
  if (type) return response.status(ERRO).json({ message });
  return response.status(OK).json(message);
};

module.exports = {
  getAll,
  getProductsID,
};
