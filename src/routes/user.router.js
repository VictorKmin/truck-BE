const router = require('express').Router();

const { userController } = require('../controllers');
const { userMiddlewares } = require('../middlewares');

router.use('/:user_id', userMiddlewares.checkIfExistsByParams('user_id', 'query'))
router.get('/:user_id', userController.getSingle);

module.exports = router;
