const router = require('express').Router();

const { organizationController } = require('../controllers');
const { organizationMiddlewares } = require('../middlewares');

router.get('/', organizationController.getAll);

router.use('/:organization_id', organizationMiddlewares.checkIfExists)
router.get('/:organization_id', organizationController.getOneById);

module.exports = router;
