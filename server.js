const Koa = require("koa");
const routers = require("./src/routers");
const serve = require("koa-static");
const koaBody = require("koa-body");
const app = new Koa();

app.use(serve(__dirname + "/public"), { gzip: true });
console.log("tzm jz");
app.use(koaBody());
app.use(routers);

// app.use(async ctx => {
//   ctx.body = "Hello World8787";
// });

// const controllers = require('./src/controller')

app.listen(4000);
