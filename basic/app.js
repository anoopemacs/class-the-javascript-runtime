function sayHello() {
  debugger;
  console.log('Hello!');
}

function tryEventLoop() {
  console.log('putting function on the task queue');
  setTimeout(function () {
    console.log('task executed about 2 seconds later.');
  }, 2000);
}
