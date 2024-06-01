const OAuth = require('../MongoDB/auth_model_db');

module.exports = {
  Create: (obj) => OAuth.create(obj),
  Find: (obj) => OAuth.findOne(obj).lean(),
  Update: (query, update) => OAuth.updateOne(query, { $set: update }),
  DeleteMany: (obj) => OAuth.deleteMany(obj)
};
