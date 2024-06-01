const router = require('express').Router();
const filmControler = require('../controllers/filmController');
const filmMiddleware = require('../middlewares/filmMiddleware');
const tokenMiddleware = require('../middlewares/oauthMidleware');
const rolesMiddleware = require('../middlewares/rolesMiddleware');

router.post(
  '/createNewFilm',
  tokenMiddleware.checkAccessToken,
  rolesMiddleware.isRoleSuits('admin'),
  filmMiddleware.isFilmValid,
  filmMiddleware.isFilmFound,
  filmControler.addNewFilm
);
router.post(
  '/foundFilm',
  filmMiddleware.isFilmCheckName,
  filmControler.searchFilm
);

module.exports = router;
