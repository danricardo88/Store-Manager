const Joi = require('joi');

const validationName = Joi.string().min(5).required();

module.exports = {
  validationName,
};
