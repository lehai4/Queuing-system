const express = require("express");
const router = express.Router();
const authController = require("../app/controllers/authController");
const middlewareController = require("../app/controllers/middlewareController");
// Register
router.post(
  "/register",
  middlewareController.middlewareCORS,
  authController.registerUser
);

// signIn
router.post(
  "/signIn",
  middlewareController.middlewareCORS,
  authController.loginUser
);

router.get(
  "/",
  middlewareController.middlewareCORS,
  authController.getDefaultAllUser
);

// refresh
router.post(
  "/refresh",
  middlewareController.middlewareCORS,
  authController.requestRefreshToken
);

// logout
router.post(
  "/logout",
  middlewareController.middlewareCORS,
  middlewareController.verifyToken,
  authController.userLogout
);

module.exports = router;
