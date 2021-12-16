var express = require("express");
var router = express.Router();
const {
  createPost,
  getAllPost,
  getPostById,
  getAllPostOfSingleUser,
  updatePost,
  deletePost,
} = require("../controller/post");

router.get("/all", getAllPost);
router.post("/create", createPost);
router.get("/:postId", getPostById);
router.get("/byAuthor/:author", getAllPostOfSingleUser);
router.put("/update/:postId", updatePost);
router.delete("/delete/:postId", deletePost);

module.exports = router;
