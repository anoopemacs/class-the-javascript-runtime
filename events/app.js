var buttonElement = document.getElementById('myButton');
buttonElement.addEventListener('click', function onClick (e) {
  debugger;
  console.log('clicked button');
});

var count = 0;
window.addEventListener('mousemove', function (e) {
  console.log('mouse move: ' + count++);
});

debugger;
for (var i = 0; i < 1000 * 50; i++) {
  console.log('iteration ' + i);
}

console.log('iteration complete');
