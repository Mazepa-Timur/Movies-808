const filmServise = require('../servises/filmServise');

module.exports = {
  addNewFilm: async (req, res, next) => {
    try {
      await filmServise.Create(req.body);
      res.status(201).json('MOVIE SAVE');
      next();
    } catch (err) {
      next(err);
    }
  },
  searchFilm: async (req, res, next) => {
    try {
      res.status(201).json(req.film);
      next();
    } catch (err) {
      next(err);
    }
  }
};
