const ApiError = require('../error/api.error');
const validator = require('../validators/validator');
const oauthServise = require('../servises/oauthServise');
const actionServise = require('../servises/actionServise');

module.exports = {
  checkAccessToken: async (req, res, next) => {
    try {
      const access_token = req.get('Authorization');
      const checkAccessToken = validator.validateToken(access_token, 'access');
      if (checkAccessToken) {
        next(new ApiError('token incorrect', 400));
        return;
      }
      const userToken = await oauthServise.Find({ access_token });
      if (!userToken) {
        next(new ApiError('Token not found', 401));
      }
      req.user = userToken.userId;
      next();
    } catch (err) {
      next(err);
    }
  },
  checkRefreshToken: async (req, res, next) => {
    try {
      const {refresh_token} = req.body;
      const checkRefreshToken = validator.validateToken(refresh_token, 'refresh');
      if (checkRefreshToken) {
        next(new ApiError('token incorrect', 400));
        return;
      }
      const userToken = await oauthServise.Find({ refresh_token });
      if (!userToken) {
        next(new ApiError('Token not found', 401));
      }
      req.user = userToken.userId;
      next();
    } catch (err) {
      next(err);
    }
  },
  checkActionToken: async (req, res, next) => {
    try {
      const { token } = req.body;
      validator.validateActionToken(token, 'action_password');
      const tokenData = await actionServise.Find({ token });
      if (!tokenData) {
        return next(new ApiError('Token not valid'), 403);
      }
      req.user = {_id: `${tokenData.userId}`};
      next();
    } catch (err) {
      next(err);
    }
  },
};
