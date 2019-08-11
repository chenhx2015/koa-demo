const Router = require("koa2-router");

const loginRouter = require("./login");
const sessionRouter = require("./session");
const homeRouter = require("./home");

const router = new Router();

// 对路由进行处理
router.get("/login", loginRouter.loginGet);
router.post("/login", loginRouter.loginPost);

router.get("/session", sessionRouter.sessionCtrlGet);
router.post("/session", sessionRouter.sessionCtrlPost);

router.get("/home", homeRouter.homeGet);
router.post("/home", homeRouter.homePost);

module.exports = router;
