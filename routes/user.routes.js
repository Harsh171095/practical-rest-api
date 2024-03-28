const express = require("express");
const UserController = require("../controllers/user/user.controller");

const router = express.Router();

router.post("/user/createUser", UserController.createUser);
router.put(
  "/user/updateUser",

  UserController.updateUser
);
router.delete("/user/deleteUser", UserController.deleteUser);

module.exports = router;
