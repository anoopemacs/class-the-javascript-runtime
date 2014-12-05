function three() {
  return;
}

function two() {
  three();
  return;
}

function one() {
  two();
  return;
}

setInterval(function intervalHandler () {
  console.log('interval handler');
}, 2000);

one();
console.log('now');
