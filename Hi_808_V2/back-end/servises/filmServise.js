const Film = require('../MongoDB/film_model_db');

module.exports = {
  Create: (obj) => Film.create(obj),
  FindOne: (obj) => Film.findOne(obj),
  FindName: (string) => Film.find({name: { $regex: `${string}`, $options: 'i'}}),
  FindType: (string) => Film.find({type: string}),
  Update: (query, update) => Film.updateOne(query, { $set: update }),
};
