const Joi = require('joi');

const filmValidator = Joi.object({
  name: Joi.string().min(3).max(50).trim().required(),
  description: Joi.string().min(3).max(200).trim().alphanum(),
  genre: Joi.string().trim().alphanum(),
  year: Joi.string().trim().required(),
  ageRating: Joi.number().min(0).max(18).required(),
});
module.exports = filmValidator;
