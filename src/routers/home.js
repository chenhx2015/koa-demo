// 首页
const axios = require("axios");
const homeCtrl = require("../controller/home");

const JWT = require("jsonwebtoken"); // 用老生成token签名与验证token的

let baseUrl =
  "https://www.easy-mock.com/mock/5d4aeec1e8f13c52962b4da9/koa-study";

// 对 get post 过来的请求分别处理
const homeGet = async ctx => {
  // 先判断 token
  console.log("Authorization", ctx.header.token);
  // JWT.verify(ctx.header.Authorization)
  // 从 easy-mock 拿数据（即从后端服务器请求数据）
  let response = await axios.get(baseUrl + "/home/index");
  ctx.set("Content-Type", "application/json");
  // 传入实参，全部商品
  // let result = homeCtrl.homeGetCtrl(response.data.data); // 如有业务处理需求则可通过此函数处理
  ctx.body = JSON.stringify(response.data.data);
};
const homePost = ctx => {
  // 从 easy-mock 拿数据（即从后端服务器请求数据）
  // 传入实参，全部商品及ID
  homeCtrl.homePostCtrl();
};
module.exports = { homeGet, homePost };
