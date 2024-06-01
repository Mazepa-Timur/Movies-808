const router = require('express').Router();
const filmMiddleware = require('../middlewares/filmMiddleware');
const ratingMiddleware = require('../middlewares/raringMiddleware');
const ratingControler = require('../controllers/ratingController');
const tokenMiddleware = require('../middlewares/oauthMidleware');

router.post(
  '/createNewRating',
  tokenMiddleware.checkAccessToken,
  filmMiddleware.isFilmCheckId,
  ratingMiddleware.isRatingFound,
  ratingControler.createUserRating
);
router.post(
  '/getRatingFilm',
  filmMiddleware.isFilmCheckId,
  ratingControler.GetRating
);

module.exports = router;
