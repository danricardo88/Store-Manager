const BAD_REQUEST = 400;

const nameRequired = (request, response, prox) => {
  const { name } = request.body;
  if (!name) return response.status(BAD_REQUEST).json({ message: '"name" is required' });
  prox();
};

module.exports = {
  nameRequired,
};
