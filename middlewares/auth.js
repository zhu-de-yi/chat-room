module.exports = (req, res, next) => {
  // 判断是否登录了
  if (req.session.auth) {
    // 登录了，直接走后续的流程代码
    req.auth = req.session.auth;

    next();
  } else {
    // 没登录
    /**
     * A方案
     */
    // 将当前的url地址给存到session中
    // console.log(req.url);
    // req.session.redirect = req.url;
    // // 直接打回到登录页面
    // res.redirect("/login");

    /**
     * B方案
     * 将当前要去的url地址，追加到 /login 的后面通过?传参的方式
     */
    res.redirect(`/login?redirect=${req.url}`);
  }
};
