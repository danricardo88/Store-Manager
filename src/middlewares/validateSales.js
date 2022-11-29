const handleValidateSales = async (sales) => {
  const results = await Promise.all(
    sales.map(({ productId, quantity }) => {
      if (!productId) { return 'invalid productId'; }
      if (quantity === undefined) { return 'invalid quantity'; }
      return 'validated';
    }),
  );
  return results;
};

module.exports = {
  handleValidateSales,
};
