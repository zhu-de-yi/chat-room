const express = require("express");
const auth = require("../middlewares/auth");
const router = express.Router();

// GET / 欢迎页面
router.get("/", (req, res) => {
  console.log(req.session);

  res.render("welcome");
});

// GET /chatroom 聊天室页面
router.get("/chatroom", auth, (req, res) => {
  res.render("chatroom", { username: req.auth.username });
});

// GET /posts 帖子列表页面
router.get("/posts", auth, (req, res) => {
  res.render("post/index");
});

// GET /login 登录页面
router.get("/login", (req, res) => {
  // 可以获取 ？号传参
  const redirect = req.query.redirect || "/";
  res.render("login", { redirect });
});

module.exports = router;
