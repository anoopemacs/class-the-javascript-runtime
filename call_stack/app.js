function three() {
  console.log('function: three');
  return 'three'
}

function two() {
  console.log('function: two');
  var threeReturnValue = three();
  return 'two'
}

function one() {
  console.log('function: one');
  var twoReturnValue = two();
  return 'one';
}

function onClickHandler(e) {
  debugger;
  console.log('click event: ', e);
}

var buttonElement = document.getElementById('myButton');
buttonElement.addEventListener('click', onClickHandler);

debugger;
console.log('start');
one();
console.log('end');
