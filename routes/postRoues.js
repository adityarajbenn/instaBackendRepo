const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const authMiddleware = require("../middlewares/auth");

router.get("/", authMiddleware, postController.getPosts);
router.post("/", authMiddleware, postController.createPost);
router.put("/:id", authMiddleware, postController.updatePost);
router.delete("/:id", authMiddleware, postController.deletePost);

module.exports = router;