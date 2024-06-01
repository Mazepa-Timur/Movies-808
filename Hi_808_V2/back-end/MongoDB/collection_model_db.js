const { Schema, model } = require('mongoose');

const collection_schema = new Schema({
  ownId: { type: Schema.Types.ObjectId, ref: 'User' },
  logo: { type: String, default: '', maxLenght: 100, trim: true },
  name: { type: String, required: true, minLenght: 3, maxLenght: 50, trim: true  },
  description: {type: String, default: '', maxLenght: 200, trim: true  },
  access: {type: String, default: 'private', trim: true},
  authors: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  films: [{type: Schema.Types.ObjectId, ref: 'Films'}],
  rating: { type: Number, default: 1 },
});
module.exports = model('Collection', collection_schema);
