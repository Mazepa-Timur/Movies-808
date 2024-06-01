const ApiError = require('../error/api.error');

module.exports = {
  isRoleSuits: (role) => {
    return async (req, res, next) => {
      try {
        const roles = req.user.roles;
        if (!roles) {
          next(new ApiError('found not role', 401));
        }
        if (!roles.includes(role)) {
            next(new ApiError('no role', 401))
        }
        next();
      } catch (err) {
        next(err);
      }
    };
  },
};
