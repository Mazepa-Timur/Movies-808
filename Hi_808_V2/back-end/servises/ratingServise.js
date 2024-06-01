const Rating = require('../MongoDB/rating_model_db');

module.exports = {
  Create: (obj) => Rating.create(obj),
  Find: (obj) => Rating.findOne(obj),
  Update: (query, update) => Rating.updateOne(query, {$set: update}),
  GetRatingAvg: (id) =>
    Rating.aggregate([{ $match: { filmId: id } },{ $group: { _id: 0, avgRating: { $avg: '$points' }, count: {$sum: 1} } }, {$project: {_id: 0}}]),
  Delet: (id) => Rating.deleteOne({_id: id})
};
