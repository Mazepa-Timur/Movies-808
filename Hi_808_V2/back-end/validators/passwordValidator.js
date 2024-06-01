const Joi = require('joi');

const passwordValidator = Joi.object({
  password: Joi.string().min(3).max(30).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).trim().required()
});

module.exports = passwordValidator;
