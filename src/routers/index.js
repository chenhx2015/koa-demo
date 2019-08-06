const Router = require("koa2-router");

const loginRouter = require("./login");

const router = new Router();
// 对路由进行处理
router.get("/login", loginRouter.loginView);
router.post("/login", loginRouter.login);
module.exports = router;
