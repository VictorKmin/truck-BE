const jwt = require('jsonwebtoken');

const { O_Auth } = require('../dataBase/models')
const { JWT_SECRET, JWT_REFRESH_SECRET } = require('../config/config')
const { general } = require('../constants')

module.exports = {
  checkAccessToken: async (req, res, next) => {
    try {
      const token = req.get(general.AUTHORIZATION);

      if (!token) {
        return next({
          status: 400,
          message: 'No token'
        });
      }

      jwt.verify(token, JWT_SECRET, err => {
        if (err) {
          return next({
            status: 401,
            message: 'Token not valid'
          });
        }
      });

      const tokensFromDB = await O_Auth.findOne({ access_token: token }).lean();

      if (!tokensFromDB) {
        return next({
          status: 400,
          message: 'Wrong token'
        });
      }

      req.user = tokensFromDB.user
      next()
    } catch (e) {
      next(e)
    }
  },

  checkRefreshToken: async (req, res, next) => {
    try {
      const token = req.get(general.AUTHORIZATION);

      if (!token) {
        return next({
          status: 400,
          message: 'No token'
        });
      }

      jwt.verify(token, JWT_REFRESH_SECRET, err => {
        if (err) {
          return next({
            status: 401,
            message: 'Token not valid'
          });
        }
      });

      const tokensFromDB = await O_Auth.findOne({refresh_token: token}).lean()

      if (!tokensFromDB) {
        return next({
          status: 400,
          message: 'Wrong token'
        });
      }

      req.user = tokensFromDB.user
      next()
    } catch (e) {
      next(e)
    }
  }
}
