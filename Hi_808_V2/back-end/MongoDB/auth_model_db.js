const { Schema, model } = require('mongoose');

const auth_schema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      trim: true,
      required: true,
      ref: 'User',
    },
    access_token: { type: String, required: true },
    refresh_token: { type: String, required: true },
  },
  { timeseries: true }
);

auth_schema.pre(/^find/, function(next){
  this.populate({
    path: 'userId',
    select: '-password'
  })
  next();
})
module.exports = model('Auth', auth_schema);
