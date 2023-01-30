const express = require("express");
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);

router.use(authMiddleware);

module.exports = router;