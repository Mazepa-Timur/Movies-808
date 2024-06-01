const Action = require('../MongoDB/action_model_db');

module.exports = {
    Create: (obj) =>  Action.create(obj),
    Find: (obj) => Action.findOne(obj),
    DeleteOne: (obj) => Action.deleteOne(obj),
};