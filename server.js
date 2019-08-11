const Koa = require("koa");
const routers = require("./src/routers");
const serve = require("koa-static");
const koaBody = require("koa-body"); // request body 的解析器
const session = require("koa-session");
const jwt = require("koa-jwt"); // koa-jwt 与 koa-session 可以二选一，但是koa-jwt不用服务器共享状态，并且不需要请求DB来获取用户信息
const app = new Koa();

app.keys = ["some secret hurr"];
const CONFIG = {
  key: "koa:sess",
  maxAge: 86400000,
  autoCommit: true,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false,
  renew: false
};

app.use(serve(__dirname + "/public"), { gzip: true });
console.log("tzm jz");
app.use(koaBody());
app.use(session(CONFIG, app));
app.use(jwt({ secret: "sasa" }).unless({ path: [/^\/login/] }));

app.use(routers);

// app.use(async ctx => {
//   ctx.body = "Hello World8787";
// });

// const controllers = require('./src/controller')

app.listen(4000);
