const loginCtrl = require("../controller/login");

const login = ctx => {
  loginCtrl.login(ctx.request.body.username, ctx.request.body.password);
  ctx.body = "hello chenhuaxiang";
  console.log("username", ctx.request.body.username);
  console.log("password", ctx.request.body.password);
};
const loginView = ctx => {
  ctx.body = loginCtrl.loginView();
};
module.exports = { login, loginView };
