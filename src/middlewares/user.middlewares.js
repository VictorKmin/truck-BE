const { User } = require('../dataBase/models');

module.exports = {
  checkIfExistsByParams: (param, searchIn = 'body') => async (req, res, next) => {
    try {
      const fieldToSearch = req[searchIn] && req[searchIn][param];

      const user = await User.findOne({ [param]: fieldToSearch });

      if (!user) {
        return next({
          status: 404
        });
      }

      req.user = user;

      next();
    } catch (e) {
      next(e);
    }
  }
}
