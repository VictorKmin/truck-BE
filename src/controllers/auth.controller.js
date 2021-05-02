module.exports = {
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;

      res.json('body');
    } catch (e) {
      next(e);
    }
  },

  logout: async (req, res, next) => {
    try {
      const body = req.body;

      res.json(body);
    } catch (e) {
      next(e);
    }
  },

  refreshToken: async (req, res, next) => {
    try {
      const body = req.body;

      res.json(body);
    } catch (e) {
      next(e);
    }
  }
}
