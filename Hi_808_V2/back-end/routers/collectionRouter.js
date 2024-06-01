const router = require('express').Router();
const collectionController = require('../controllers/collectionController');
const collectionMiddleware = require('../middlewares/collectionMiddleware');
const oauthMidleware = require('../middlewares/oauthMidleware');

router.post('/foundCollection', collectionController.foundCollection);
router.post('/foundByIdCollection', collectionController.foundByIdCollection);
router.post(
  '/createNewCollection',
  oauthMidleware.checkAccessToken,
  collectionController.createNewCollection
);
router.post(
  '/addFilmCollection',
  oauthMidleware.checkAccessToken,
  collectionMiddleware.checkAccessUser,
  collectionMiddleware.checkDuplicateFilm,
  collectionController.addFilmCollection
);
router.post(
  '/deleteFilmCollection',
  oauthMidleware.checkAccessToken,
  collectionMiddleware.checkAccessUser,
  collectionController.deleteFilmCollection
);
router.post(
  '/addAuthorCollection',
  oauthMidleware.checkAccessToken,
  collectionMiddleware.checkAccessOwn,
  collectionMiddleware.checkDuplicateAuthors,
  collectionController.addAuthorCollection
);
router.post(
  '/updateCollection',
  oauthMidleware.checkAccessToken,
  collectionMiddleware.checkAccessOwn,
  collectionController.updataCollection
);

router.post(
  '/deleteCollection',
  oauthMidleware.checkAccessToken,
  collectionMiddleware.checkAccessOwn,
  collectionController.deleteCollection
);

module.exports = router;
