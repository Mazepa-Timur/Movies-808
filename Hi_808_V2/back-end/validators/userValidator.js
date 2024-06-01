const Joi = require('joi');

const RegExpEmail = new RegExp('[a-zA-Z0-9]@.');
const RegExpPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
const userValidator = Joi.object({
  email: Joi.string().trim().lowercase().regex(RegExpEmail).required(),
  password: Joi.string().trim().regex(RegExpPassword).required(),
  name: Joi.string().min(3).max(30).trim().alphanum().required(),
});

module.exports = userValidator;
