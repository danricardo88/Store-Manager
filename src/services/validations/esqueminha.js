const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const validationName = Joi.string().min(5).required();

module.exports = {
  validationName,
};
