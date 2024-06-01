const ratingServise = require('../servises/ratingServise');
const filmServise = require('../servises/filmServise');

module.exports = {
  createUserRating: async (req, res, next) => {
    try {
      const {
        film: { _id: filmId },
        body: { points },
        user: { _id: userId },
        rating: isRating
      } = req;
      if (isRating) {
        await ratingServise.Update({ _id: isRating._id }, { points });

        const [{ avgRating: rating, count }] = await ratingServise.GetRatingAvg(filmId);
        await filmServise.Update({ _id: filmId }, { rating, count });
        res.status(201).json('Update rating success');
        return
      }
      await ratingServise.Create({ userId, points, filmId });
      
      const [{ avgRating: rating, count }] = await ratingServise.GetRatingAvg(filmId);
      await filmServise.Update({ _id: filmId }, { rating, count });
      res.status(201).json('Create rating success');
      return
    } catch (err) {
      next(err);
    }
  },
  GetRating: async (req, res, next) => {
    try {
      const filmId = req.film._id;
      const filmRating = await ratingServise.GetRatingAvg(filmId);
      if (!filmRating.length) {
        res.status(201).json( 'not found' );
        return
      }
      res.status(201).json( filmRating );
      next();
    } catch (err) {
      next(err);
    }
  },
};
