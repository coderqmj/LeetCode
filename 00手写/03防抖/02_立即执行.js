function debounce(fn, delay = 1000, immediate = true) {
  let timer = null;
  let exceFlag = false;
  const _debounce = function (...args) {
    if (immediate && !exceFlag) {
      fn.apply(this, args);
      exceFlag = true;
    } else {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    }
  };

  _debounce.cancal = function () {
    if (timer) clearTimeout(timer);
    timer = null;
  };

  return _debounce;
}
