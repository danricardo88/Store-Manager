const salesServ = require('../services/sales.service');
const { handleValidateSales } = require('../middlewares/validateSales');

const OK = 200;
const SUCCESS = 201;
const ERRO = 404;
const OUTRO_ERRO = 400;

const insertSale = async (request, response) => {
  const object = request.body;
  const data = await handleValidateSales(object);
  const resultado = data.every((status) => status === 'validated');

  if (resultado) {
    const { type, message } = await salesServ.insertSale(object);
    if (type) return response.status(type).json({ message });
    return response.status(SUCCESS).json(message);
  }
  if (data.includes('invalid productId')) {
    return response.status(OUTRO_ERRO).json({ message: '"productId" is required' });
  }
  if (data.includes('invalid quantity')) {
    return response.status(OUTRO_ERRO).json({ message: '"quantity" is required' });
  }
};

const allSales = async (_request, response) => {
  const result = await salesServ.allSales();
  return response.status(OK).json(result);
};

const salesID = async (request, response) => {
  const { id } = request.params;
  const sales = await salesServ.salesID(Number(id));
  if (!sales.length) return response.status(ERRO).json({ message: 'Sale not found' });
  return response.status(OK).json(sales);
};

module.exports = {
  insertSale,
  allSales,
  salesID,
};
