const { Schema, model } = require('mongoose');

const action_schema = new Schema(
  {
    userId: { type: String, trim: true, required: true,
    },
    token: { type: String, required: true },
    type_token: { type: String, required: true},
  }
);

module.exports = model('Action', action_schema);
