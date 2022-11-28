const BAD_REQUEST = 400;
const OUTROERRO = 422;

const nameRequired = (request, response, prox) => {
  const { name } = request.body;
  if (!name) return response.status(BAD_REQUEST).json({ message: '"name" is required' });
  prox();
};

const upRequired = (request, response, prox) => {
  const { name } = request.body;
  if (name.length < 5) {
    return response.status(OUTROERRO)
      .json({ message: '"name" length must be at least 5 characters long' });
  }
  prox();
};

module.exports = {
  nameRequired,
  upRequired,
};
