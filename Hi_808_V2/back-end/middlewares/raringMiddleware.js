const ApiError = require('../error/api.error');
const ratingServise = require('../servises/ratingServise')

module.exports = {
  isRatingFound: async (req, res, next) => {
    try {
      const { filmId } = req.body;
      const { _id: userId } = req.user;
      const findRating = await ratingServise.Find( { $and: [{userId}, {filmId}] } );
      req.rating = findRating;
      next();
    } catch (err) {
      next(err);
    }
  },
  deletReting: async (req, res, next) => {
    try {
      const { _id: userId } = req.user;
      const findRating = await ratingServise.Delet( userId );
      if (!findRating) {
        next(new ApiError('error delet reting'));
      }
      next();
    } catch (err) {
      next(err);
    }
  },
};
