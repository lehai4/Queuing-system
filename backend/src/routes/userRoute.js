const express = require("express");
const router = express.Router();
const userController = require("../app/controllers/userController");
const middlewareController = require("../app/controllers/middlewareController");

router.get(
  "/:id",
  middlewareController.middlewareCORS,
  middlewareController.verifyToken,
  userController.getUserById
);
router.get(
  "/",
  middlewareController.middlewareCORS,
  middlewareController.verifyToken,
  userController.getAllUsers
);

router.put(
  "/update/:id",
  middlewareController.middlewareCORS,
  userController.updateUser
);
router.delete(
  "/:id",
  middlewareController.middlewareCORS,
  middlewareController.verifyTokenAndAdminAuth,
  // middlewareController.verifyToken,
  userController.deleteUser
);
module.exports = router;
