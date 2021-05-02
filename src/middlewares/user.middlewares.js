const { userService } = require('../services');

module.exports = {
  checkIfExists: async (req, res, next) => {
    try {
      const { user_id } = req.params;

      const user = await userService.getById(user_id);

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
