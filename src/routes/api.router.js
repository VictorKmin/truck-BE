const router = require('express').Router();

const authRouter = require('./auth.router');
const organizationRouter = require('./organization.router');
const routesRouter = require('./routes.router');
const userRouter = require('./user.router');

router.use('/auth', authRouter);
router.use('/organizations', organizationRouter);
router.use('/routes', routesRouter);
router.use('/users', userRouter);

module.exports = router;
