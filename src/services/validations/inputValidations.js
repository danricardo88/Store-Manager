const { validationName } = require('./esqueminha');

const nameValidation = (name) => {
  const { error } = validationName.validate(name);
  if (error) return { message: '"name" length must be at least 5 characters long' };
};

module.exports = {
  nameValidation,
};
