const router = require('express').Router();
const userController = require('../controllers/userController');
const userMiddleware = require('../middlewares/userMiddleware');
const tokenMiddleware = require('../middlewares/oauthMidleware');

router.post(
  '/register',
  userMiddleware.userValidator,
  userMiddleware.isUserFound,
  userController.createUser
);
router.post('/login', userMiddleware.isCheckEmail, userController.loginUser);
router.post(
  '/setting',
  tokenMiddleware.checkAccessToken,
  userMiddleware.isCheckId,
  userController.sattingSave
);
router.post(
  '/authorization',
  tokenMiddleware.checkAccessToken,
  userController.authorization
);
router.post(
  '/updateToken',
  tokenMiddleware.checkRefreshToken,
  userController.updateTokens
);
router.post(
  '/forgotPassword',
  userMiddleware.isCheckEmail,
  userController.createActionToken
);
router.post(
  '/changePassword',
  userMiddleware.passwordValidator,
  tokenMiddleware.checkActionToken,
  userController.updatePassword
);
router.post('/addfrend', (req, res)=>{res.status(201).json('Frends ;)'); })
router.post('/deletefrend', (req, res)=>{res.status(201).json('Frends ;)'); })
module.exports = router;
