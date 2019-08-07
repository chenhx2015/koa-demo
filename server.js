const Koa = require("koa");
const routers = require("./src/routers");
const serve = require("koa-static");
const koaBody = require("koa-body");
const session = require("koa-session");
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
app.use(routers);

// app.use(async ctx => {
//   ctx.body = "Hello World8787";
// });

// const controllers = require('./src/controller')

app.listen(4000);
