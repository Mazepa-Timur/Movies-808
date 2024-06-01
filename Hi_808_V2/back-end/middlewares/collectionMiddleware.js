const ApiError = require('../error/api.error');
const collectionServise = require('../servises/collectionServise');

module.exports = {
  checkAccessOwn: async (req, res, next) => {
    try {
      const { collectionId } = req.body;
      const userId = req.user._id;
      const collection = await collectionServise.FindOne({
        $and: [{ _id: collectionId }, { ownId: userId }],
      });
      if (!collection) {
        next(
          new ApiError('You do not have owner access to the collection or collection Id', 402)
        );
        return;
      }
      next();
    } catch (err) {
      next(err);
    }
  },
  checkAccessUser: async (req, res, next) => {
    try {
      const { collectionId } = req.body;
      const userId = req.user._id;
      const collection = await collectionServise.FindOne({
        $and: [
          { _id: collectionId },
          { $or: [{ ownId: userId }, { authors: [userId] }] },
        ],
      });
      if (!collection) {
        next(new ApiError('You do not have access to the collection', 402));
        return;
      }
      next();
    } catch (err) {
      next(err);
    }
  },
  checkDuplicateFilm: async (req, res, next) => {
    try {
      const { filmId, collectionId } = req.body;
      if (!filmId || !collectionId) {
        next(new ApiError('incorrect data', 402));
        return;
      }
      const collection = await collectionServise.FindOne({
        $and: [{ _id: collectionId }, { films: filmId }],
      });
      if (collection) {
        next(new ApiError('the movie is already add', 402));
        return;
      }
      next();
    } catch (err) {
      next(err);
    }
  },
  checkDuplicateAuthors: async (req, res, next) => {
    try {
      const { authorId, collectionId } = req.body;
      if (!authorId || !collectionId) {
        next(new ApiError('incorrect data', 402));
        return;
      }
      const collection = await collectionServise.FindOne({
        authors: [authorId],
      });
      if (collection) {
        next(new ApiError('the author is already add', 402));
        return;
      }
      next();
    } catch (err) {
      next(err);
    }
  },
};
