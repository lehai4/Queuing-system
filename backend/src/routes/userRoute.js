const express = require("express");
const router = express.Router();
const userController = require("../app/controllers/userController");
const middlewareController = require("../app/controllers/middlewareController");

router.get(
  "/:id",
  middlewareController.verifyToken,
  userController.getUserById
);
router.get("/", middlewareController.verifyToken, userController.getAllUsers);

router.put("/update/:id", userController.updateUser);

router.delete(
  "/:id",
  middlewareController.verifyTokenAndAdminAuth,
  userController.deleteUser
);
module.exports = router;
