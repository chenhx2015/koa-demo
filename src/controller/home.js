// 首页
const homeGetCtrl = allGoods => {
  return allGoods;
};
const homePostCtrl = (allGoods, id) => {
  return allGoods[id];
};

module.exports = { homeGetCtrl, homePostCtrl };
