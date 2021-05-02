const { organizationService } = require('../services');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const { page = 1, limit = 20 } = req.query;
      const offset = ( page - 1 ) * limit;

      const organizations = await organizationService.getList({}, limit, offset);
      res.json(organizations);
    } catch (e) {
      next(e);
    }
  },

  getOneById: async (req, res, next) => {
    try {
      const organization = req.organization;

      res.json(organization);
    } catch (e) {
      next(e);
    }
  }
}
