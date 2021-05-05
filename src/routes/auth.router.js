const router = require('express').Router();

const { authController } = require('../controllers');
const { authMiddlewares } = require('../middlewares');

router.post('/', authController.login);
router.post('/logout', authMiddlewares.checkAccessToken, authController.logout);
router.post('/refresh', authMiddlewares.checkRefreshToken, authController.refreshToken);

module.exports = router;
