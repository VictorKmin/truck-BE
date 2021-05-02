const router = require('express').Router();

const routesRouter = require('./routes.router');

router.use('/auth', routesRouter);
router.use('/organizations', routesRouter);
router.use('/routes', routesRouter);
router.use('/users', routesRouter);

module.exports = router;
