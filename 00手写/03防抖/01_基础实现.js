function debounce(fn, delay = 1000) {
  let timer = null;
  const _debounce = function () {
    if (timer) {
      clearTimeout(time);
    }
    time = setTimeout(() => {
      fn();
    }, delay);
  };

  return _debounce;
}
