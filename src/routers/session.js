// 引入控制层，传参数进行处理
const sessionCtrl = require("../controller/session");

// 引入 crypto 模块， Hash类是用于创建数据哈希值的工具类
const crypto = require("crypto");

const sessionCtrlGet = ctx => {
  // 每访问一次，次数就会增加 1
  let n = ctx.session.view_times || 0;
  let times = ++n;
  ctx.body = sessionCtrl.sessionGetCtrl(times);
};
const sessionCtrlPost = ctx => {
  // 每访问一次，次数就会增加 1
  console.log("session-view-times:", ctx.session.view_times);
  let n = ctx.session.view_times || 0;
  // let n = parseInt(ctx.cookies.get("view_times")) || 0;
  let times = ++n;
  let tempUsername = ctx.request.body.username;
  const hash = crypto.createHash("sha256");
  hash.update(tempUsername);
  let user_id = hash.digest("hex");
  // 浏览次数和生成的 user_id 放进session里面
  ctx.session.view_times = times;
  ctx.session.user_id = user_id;
  // ctx.cookies.set("view_times", times);
  // ctx.cookies.set("user_id", user_id);

  ctx.body = sessionCtrl.sessionPostCtrl(times, user_id);
};

module.exports = { sessionCtrlGet, sessionCtrlPost };
