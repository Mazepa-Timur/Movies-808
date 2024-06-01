const Collection = require('../MongoDB/collection_model_db');

module.exports = {
  Create: (obj) => Collection.create(obj),
  FindOne: (obj) => Collection.findOne(obj),
  FindName: (string) => Collection.find({name: { $regex: `${string}`, $options: 'i'}}),
  Update: (query, update) => Collection.updateOne(query, { $set: update }),
  Delete: (obj) => Collection.deleteOne(obj),
};