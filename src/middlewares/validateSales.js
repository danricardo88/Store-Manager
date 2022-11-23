const handleValidateSales = async (sale) => {
  const results = await Promise.all(
    sale.map((productId, quantity) => {
      if (!productId) { return ' invalid productId '; }
      if (quantity === undefined) { return 'invalid quantity'; }
      return results;
    }),
  );
};

module.exports = {
  handleValidateSales,
};
