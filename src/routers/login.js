const loginCtrl = require("../controller/login");

const JWT = require("jsonwebtoken");

const loginPost = async ctx => {
  loginCtrl.login(ctx.request.body.username, ctx.request.body.password);
  // todo 在 header 头里面返回 token，并返回 json 数据
  // jwt 方式生成 token (要搭配 jsonwebtoken 这个库一起使用)
  const payload = {
    name: ctx.request.body.username
  };
  const secret = "sasa";

  // 同步的方式
  // let token = JWT.sign(payload, secret, { expiresIn: "60m" });
  // ctx.response.body = token;
  // ctx.set("Authorization", "Bearer " + token); // Bearer 是koa-jwt的一个标识单词，方便解析

  // 异步的方式
  const tokenPromise = new Promise((resolve, reject) => {
    JWT.sign(payload, secret, { expiresIn: "60m" }, (err, token) => {
      if (err) {
        reject(err);
      }
      if (token) {
        resolve(token);
      }
    });
  });
  tokenPromise.then(token => {
    ctx.response.body = token;
    ctx.set("Authorization", "Bearer " + token);
  });
  return tokenPromise;
};
const loginGet = ctx => {
  ctx.body = loginCtrl.loginView();
};
module.exports = { loginPost, loginGet };
