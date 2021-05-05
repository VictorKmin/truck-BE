const { general } = require('../constants');
const { O_Auth, User } = require('../dataBase/models');
const { passwordHasher, tokenizer } = require('../helpers');

module.exports = {
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email }).select('+password').lean();

      if (!user) {
        return next({
          status: 404,
          message: 'Record not found'
        })
      }

      await passwordHasher.compare(password, user.password);

      const tokens = tokenizer();

      await O_Auth.create({ ...tokens, _user_id: user._id });

      res.json(tokens);
    } catch (e) {
      next(e);
    }
  },

  logout: async (req, res, next) => {
    try {
      const access_token = req.get(general.AUTHORIZATION);

      await O_Auth.remove({ access_token });

      res.json('Ok');
    } catch (e) {
      next(e);
    }
  },

  refreshToken: async (req, res, next) => {
    try {
      const user = req.user;
      const refresh_token = req.get(general.AUTHORIZATION);

      const tokens = tokenizer();

      await O_Auth.remove({refresh_token});
      await O_Auth.create({ ...tokens, _user_id: user._id });

      res.json(tokens);
    } catch (e) {
      next(e);
    }
  }
}
