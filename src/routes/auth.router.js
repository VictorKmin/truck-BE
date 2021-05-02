const router = require('express').Router();

const { authController } = require('../controllers');

router.post('/', authController.login);
router.post('/logout', authController.logout);
router.post('/refresh', authController.refreshToken);

module.exports = router;
