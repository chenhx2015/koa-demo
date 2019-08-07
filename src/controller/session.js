// 测试 session 相关的知识点
// 一些单纯的处理数据的函数，形式有点像纯函数，但并不是纯函数
const sessionGetCtrl = times => {
  return "<div>Your request times : </div>" + times;
};
const sessionPostCtrl = (times, sessionId) => {
  return (
    "<div>Your post request times : </div>" +
    times +
    "<div>session_id is : </div>" +
    sessionId
  );
};

module.exports = { sessionGetCtrl, sessionPostCtrl };
