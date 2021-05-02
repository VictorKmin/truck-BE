const { userService } = require('../services');

module.exports = {
  getSingle: async (req, res, next) => {
    try {
      const user = req.user;

      res.json(user);
    } catch (e) {
      next(e);
    }
  }
}
