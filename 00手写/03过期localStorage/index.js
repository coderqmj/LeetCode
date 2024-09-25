function setLocalStorageOfTime(key, value, epxiresTime) {
  const data = { value, epxiresTime: new Date().getTime() + epxiresTime };
  localStorage.setItem(key, JSON.stringify(data));
}

function getLocalStorageOfTime(key) {
  const data = JSON.parse(localStorage.getItem(key));
  if (data.epxiresTime > new Date().getTime()) {
    return null;
  }
  return data.value;
}
