function throttle(fn, delay) {
  let lastTime = 0;
  const _throttle = function () {
    const nowTime = new Date().getTime();
    const remainTime = delay - (nowTime - lastTime);
    if (remainTime <= 0) {
      fn();
      lastTime = nowTime;
    }
  };
  return _throttle;
}
