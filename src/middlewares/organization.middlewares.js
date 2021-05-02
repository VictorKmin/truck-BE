const { organizationService } = require('../services');

module.exports = {
  checkIfExists: async (req, res, next) => {
    try {
      const { organization_id } = req.params;

      const organization = await organizationService.getById(organization_id);

      if (!organization) {
        return next({
          status: 404
        });
      }

      req.organization = organization;

      next();
    } catch (e) {
      next(e);
    }
  }
}
