const { Schema, model } = require('mongoose');

const rating_schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  points: { type: Number, required: true },
  filmId: { type: Schema.Types.ObjectId, ref: 'Film' },
});

module.exports = model('Rating', rating_schema);
