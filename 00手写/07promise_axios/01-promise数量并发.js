function timeout(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

class MutilTask {
  constructor(maxCount = 2) {
    this.maxCount = maxCount;
    this.tasks = [];
    this.runningCount = 0;
  }

  add(task) {
    return new Promise((resolve, reject) => {
      this.tasks.push({
        task,
        resolve,
        reject,
      });
      this._run();
    });
  }

  _run() {
    while (this.tasks.length && this.runningCount < this.maxCount) {
      const { task, resolve, reject } = this.tasks.shift();
      this.runningCount++;
      task()
        .then(resolve, reject)
        .finally(() => {
          this.runningCount--;
          this._run();
        });
    }
  }
}

const mutilTask = new MutilTask(2);
function addTask(time, name) {
  mutilTask
    .add(() => timeout(time))
    .then(() => {
      console.log(`任务${name}完成`);
    });
}
addTask(10000, 1);
addTask(2000, 2);
addTask(5000, 3);
addTask(1000, 4);
addTask(7000, 5);
addTask(3000, 6);
