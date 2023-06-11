const express = require("express");
const router = express.Router();
const authController = require("../app/controllers/authController");
const middlewareController = require("../app/controllers/middlewareController");
// Register
router.post("/register", authController.registerUser);

// signIn
router.post("/signIn", authController.loginUser);

// refresh
router.post("/refresh", authController.requestRefreshToken);

// logout
router.post(
  "/logout",
  middlewareController.verifyToken,
  authController.userLogout
);

module.exports = router;
