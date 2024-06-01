const userServise = require('../servises/userServise');
const oauthServise = require('../servises/oauthServise');
const validator = require('../validators/validator');
const { ACTION_TOKEN_FORGOTRASSWORD } = require('../config/index');
const ActionServise = require('../servises/actionServise');
const nodemailer = require('../servises/nodemailerServise');

module.exports = {
  createUser: async (req, res, next) => {
    try {
      const hashPassword = await validator.hashPassword(req.body.password);
      await userServise.Create({ ...req.body, password: hashPassword, roles: 'user' });
      res.status(201).json('USER CREATE');
      next();
    } catch (err) {
      next(err);
    }
  },
  loginUser: async (req, res, next) => {
    try {
      const { password } = req.body;
      const user = req.user;
      await validator.comparePassword(password, user.password);
      const jwt_obj = await validator.generatorTokens({roles: user.roles, userId: user._id });
      await oauthServise.Create({ userId: user._id, ...jwt_obj });
      user.password = undefined;
      res.status(201).json({ user, ...jwt_obj });
      next();
    } catch (err) {
      next(err);
    }
  },
  sattingSave: async (req, res, next) => {
    try {
      const { color, theme } = req.body;
      const user = req.user;
      await userServise.Update({ _id: user._id }, { setting: { color, theme } })
      res.status(201).json(`Setting save success ${color} ${theme}`);
      next();
    } catch (err) {
      next(err);
    }
  },
  authorization: async (req, res, next) => {
    try {
      const user = req.user;
      res.status(201).json({ user });
      next();
    } catch (err) {
      next(err);
    }
  },
  updateTokens: async (req, res, next) => {
    try {
      const user = req.user;
      const jwt_obj = await validator.generatorTokens({roles: user.roles, userId: user._id });
      await oauthServise.Create({ userId: user._id, ...jwt_obj });
      res.status(201).json({ user, ...jwt_obj });
      next();
    } catch (err) {
      next(err);
    }
  },
  createActionToken: async (req, res, next) => {
    try {
      const { email } = req.body;
      const { _id } = req.user;
      const token = await validator.generatorAction({userId: _id, ACTION_TOKEN_FORGOTRASSWORD});
      await ActionServise.Create({userId: _id, token, token_type: ACTION_TOKEN_FORGOTRASSWORD});
      await nodemailer.sendByMails(email, {token}, 'forgotPassword')
      res.status(201).json({ token });
      next();
    } catch (err) {
      next(err);
    }
  },
  updatePassword: async (req, res, next) => {
    try {
      const { password } = req.body;
      const { _id } = req.user;
      const newPassword = await validator.hashPassword(password);

      await userServise.Update({ _id }, { password: newPassword });
      await oauthServise.DeleteMany({ userId: _id });
      await ActionServise.DeleteOne({ userId: _id });
      res.status(201).json(['password change', { password, _id}]);
      next();
    } catch (err) {
      next(err);
    }
  },
};
