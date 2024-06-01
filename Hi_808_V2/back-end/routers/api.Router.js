const router = require('express').Router();

const routerUser = require('./userRouter');
const routerFilm = require('./filmRouter');
const routerRating = require('./ratingRouter');
const routerCollection = require('./collectionRouter');

router.use('/user', routerUser);
router.use('/film', routerFilm);
router.use('/rating', routerRating);
router.use('/collection', routerCollection);

module.exports = router;