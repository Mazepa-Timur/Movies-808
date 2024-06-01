const ApiError = require('../error/api.error');
const userValidator = require('../validators/userValidator');
const passwordValidator = require('../validators/passwordValidator');
const userServise = require('../servises/userServise');

module.exports = {
  isUserFound: async (req, res, next) => {
    try {
      const { email } = req.body;
      const user = await userServise.Find({ email });
      if (user) {
        next(new ApiError('User register already', 402));
        return;
      }
      next();
    } catch (err) {
      next(err);
    }
  },
  isCheckEmail: async (req, res, next) => {
    try {
      const { email } = req.body;
      const user = await userServise.Find({ email });
      if (!user) {
        next(new ApiError('Email incorrect', 402));
        return;
      }
      req.user = user;
      next();
    } catch (err) {
      next(err);
    }
  },
  isCheckId: async (req, res, next) => {
    try {
      const { _id } = req.user;
      const user = await userServise.Find({ _id });
      if (!user) {
        next(new ApiError('Id incorrect', 402));
        return;
      }
      req.user = user;
      next();
    } catch (err) {
      next(err);
    }
  },
  userValidator: (req, res, next) => {
    try {
      const { error } = userValidator.validate(req.body);
      if (error) {
        next(new ApiError(error.details[0].message, 400));
        return;
      }
      next();
    } catch (err) {
      next(err);
    }
  },
  passwordValidator: (req, res, next) => {
    try {
      const { password } = req.body;
      const { error } = passwordValidator.validate({ password });
      if (error) {
        next(new ApiError(`incorrect password, ${error.details[0].message}`, 401));
        return;
      }
      next();
    } catch (err) {
      next(err);
    }
  }
};
