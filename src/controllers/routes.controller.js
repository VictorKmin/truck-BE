const { routeService } = require('../services');

module.exports = {
  createRoute: async (req, res, next) => {
    try {
      await routeService.createRoute(req.body);

      res.json('created');
    } catch (e) {
      next(e);
    }
  },

  getAllRoutes: async (req, res, next) => {
    try {
      const routes = await routeService.getRoutes();
      res.json(routes);
    } catch (e) {
      next(e);
    }
  }
}
