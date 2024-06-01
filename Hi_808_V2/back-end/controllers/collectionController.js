const collectionServise = require('../servises/collectionServise');

module.exports = {
  foundCollection: async (req, res, next) => {
    try {
      const collection = await collectionServise.FindName({
        name: req.body.name,
      });
      res.status(201).json(collection);
      next();
    } catch (err) {
      next(err);
    }
  },
  foundByIdCollection: async (req, res, next) => {
    try {
      const collection = await collectionServise.FindOne({
        _id: req.body.collectionId,
      });
      res.status(201).json(collection);
      next();
    } catch (err) {
      next(err);
    }
  },
  createNewCollection: async (req, res, next) => {
    try {
      await collectionServise.Create({ ownId: req.user._id, ...req.body });
      res.status(201).json('Collection CREATE');
      next();
    } catch (err) {
      next(err);
    }
  },
  updataCollection: async (req, res, next) => {
    try {
      const { collectionId, logo, name, description } = req.body;
      await collectionServise.Update(
        { _id: collectionId },
        { logo, name, description }
      );
      res.status(201).json('Collection UPDATA');
      next();
    } catch (err) {
      next(err);
    }
  },
  addFilmCollection: async (req, res, next) => {
    try {
      const { filmId, collectionId } = req.body;
      const collection = await collectionServise.FindOne({ _id: collectionId });
      await collectionServise.Update(
        { _id: collectionId },
        { films: [...collection.films, filmId] }
      );
      res.status(201).json('Collection Film Add');
      next();
    } catch (err) {
      next(err);
    }
  },
  deleteFilmCollection: async (req, res, next) => {
    try {
      const { filmId, collectionId } = req.body;
      const collection = await collectionServise.FindOne({ _id: collectionId });
      await collectionServise.Update(
        { _id: collectionId },
        { films: collection.films.filter((i) => i != filmId) }
      );
      res.status(201).json('Collection Film delete');
      next();
    } catch (err) {
      next(err);
    }
  },
  addAuthorCollection: async (req, res, next) => {
    try {
      const { authorId, collectionId } = req.body;
      const collection = await collectionServise.FindOne({ _id: collectionId });
      await collectionServise.Update(
        { _id: collectionId },
        { authors: [...collection.authors, authorId] }
      );
      res.status(201).json('Collection Auther Add');
      next();
    } catch (err) {
      next(err);
    }
  },
  deleteCollection: async (req, res, next) => {
    try {
      await collectionServise.Delete({
        $and: [{ ownId: req.user._id }, { _id: req.body.collectionId }],
      });
      res.status(201).json('Collection DELETE');
      next();
    } catch (err) {
      next(err);
    }
  },
};
