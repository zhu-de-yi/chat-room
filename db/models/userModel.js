// 引入连接了MongoDB的monoose
const mongoose = require("../connect");
// 引入 bcryptjs 做加密
const bcryptjs = require("bcryptjs");

// 定义 schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },

  avatar: {
    type: String,
    default: `${process.env.BASEURL}/assets/img/avatar.png`
  }
});

userSchema.pre("save", function(next) {
  this.password = bcryptjs.hashSync(this.password, 10);

  next();
});

/**
 * 给UserModel提供一个原型方法  UserModel.proptype.comparePassword
 *
 * 原型上的这个方法，可以给每一个 UserModel 的实例去使用
 */
userSchema.methods.comparePassword = function(password) {
  return bcryptjs.compareSync(password, this.password);
};

// 生成 model
const UserModel = mongoose.model("user", userSchema);

// 暴露
module.exports = UserModel;
