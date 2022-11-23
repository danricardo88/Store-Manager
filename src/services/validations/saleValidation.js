const { productsModel } = require('../../models');

const ENTENDEU = 422;
const NUMERO_MAGICO = 0;

const handleQuantidade = (products) => {
  const result = products.map(({ quantidade }) => quantidade);
  if (result.some((index) => index <= NUMERO_MAGICO)) {
    return {
      type: ENTENDEU,
      message: '"quantity" must be greater than or equal to 1',
    };
  }
  return {
    type: null,
    message: '',
  };
};

const handleProductts = async (products) => {
  const prod = await Promise.all(
    products.map(async ({ productId }) => {
      const prodId = await productsModel.getProductsID(productId);
      return prodId;
    }),
  );
  return prod;
};

module.exports = {
  handleQuantidade,
  handleProductts,
};
