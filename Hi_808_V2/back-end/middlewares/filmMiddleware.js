const ApiError = require('../error/api.error');
const filmServise = require('../servises/filmServise');
const filmValidator = require('../validators/filmValidator');

module.exports = {
  isFilmFound: async (req, res, next) => {
    try {
      const { name } = req.body;

      const findFilm = await filmServise.FindOne({ name });
      if (findFilm) {
        next(new ApiError('the movie is already create', 402));
        return;
      }
      req.film = findFilm;
      next();
    } catch (err) {
      next(err);
    }
  },
  isFilmCheckName: async (req, res, next) => {
    try {
      const { name, type, _id } = req.body;
      let findFilm;
      if (_id) {
        findFilm = await filmServise.FindOne({ _id });
      }
      if (type) {
        findFilm = await filmServise.FindType(type);
      }
      if (name) {
        findFilm = await filmServise.FindName(name);
      }

      if (!findFilm) {
        next(new ApiError('the movie not found', 402));
        return;
      }
      req.film = findFilm;
      next();
    } catch (err) {
      next(err);
    }
  },
  isFilmCheckId: async (req, res, next) => {
    try {
      const { filmId } = req.body;
      const findFilm = await filmServise.FindOne({ _id: filmId });
      if (!findFilm) {
        next(new ApiError('the movie id not found', 402));
        return;
      }
      req.film = findFilm;
      next();
    } catch (err) {
      next(err);
    }
  },
  isFilmValid: async (req, res, next) => {
    try {
      const correctFilm = await filmValidator.validate({ ...req.body });
      if (!correctFilm) {
        next(new ApiError('the movie id not found', 402));
        return;
      }
      next();
    } catch (err) {
      next(err);
    }
  },
};
