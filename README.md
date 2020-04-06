# express-1904-chat

> 使用 express + mongoose + socket.io + ejs 实现前后端不分离的小项目

## 主要功能

1. 聊天室功能（必须登录才能进入聊天室）
2. 登录功能
3. 身份验证功能
   去 A 页面由于没有登录，打到了登录页面，登录成功希望直接给我带到 A 页面
   去 B 页面由于没有登录，打到了登录页面，登录成功希望直接给我带到 B 页面

   A 方案：打到登录页面时，将你当前的页面地址给存起来（存到 session 里面），在登录成功的地方从 session 中取出，就知道你要去哪里了。

   B 方案：打到登录页面时，将你当前的页面地址给写入到登录页面的地址后面。（/login?redirect=xxx）
   渲染登录页面时，将 redirect 做为模板变量带到登录页面模板中并设置到 form 表单的 action 后面（/users/login?redirect=xxx）
   登录操作时，就从 req.query.redirect 中取出之前要去的页面地址做跳转即可。
