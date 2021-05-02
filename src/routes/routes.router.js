const router = require('express').Router();

const { routesController } = require('../controllers');

router.get('/', routesController.getAllRoutes);
router.post('/', routesController.createRoute);

module.exports = router;
