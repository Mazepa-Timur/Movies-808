const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ApiError = require('../error/api.error');
const {
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
  ACTION_TOKEN_FORGOTRASSWORD,
} = require('../config/index');

module.exports = {
  hashPassword: async (password) => await bcrypt.hash(password, 8),
  comparePassword: async (password, hash_password) => {
    const comp_password = await bcrypt.compare(password, hash_password);
    if (!comp_password) {
      throw new ApiError('incorrect password', 402);
    }
  },
  generatorTokens: (data) => {
    const access_token = jwt.sign(data, ACCESS_TOKEN_SECRET, {
      expiresIn: '7d',
    });
    const refresh_token = jwt.sign(data, REFRESH_TOKEN_SECRET, {
      expiresIn: '31d',
    });
    return { access_token, refresh_token };
  },
  validateToken: (token, typeToken = 'access') => {
    try {
      let typeKey = ACCESS_TOKEN_SECRET;
      if (typeToken === 'refresh') {
        typeKey = REFRESH_TOKEN_SECRET;
      }
      jwt.verify(token, typeKey);
      return ''
    } catch (err) {
      console.error(err.message);
      return err.message || 'Invalid token'
    }
  },
  validateActionToken: (token, typeToken = 'action_password') => {
    let typeKey = ACTION_TOKEN_FORGOTRASSWORD;
    try {
      return jwt.verify(token, typeKey);
    } catch (err) {
      throw new ApiError(err.message || 'Invalid token', 401);
    }
  },
  generatorAction: (data) => {
    try {
      const token = jwt.sign(data, ACTION_TOKEN_FORGOTRASSWORD, {
        expiresIn: '1d',
      });
      return token;
    } catch (err) {
      throw new ApiError(err.message || 'Invalid action token', 401);
    }
  },
};
