var MySpecialCode = {
  msg: 'My special code',
  toString: function () { return this.msg; }
};

function six() {
  console.log('six');
  debugger;
  throw MySpecialCode;
  return;
}

function five() {
  console.log('five');
  six();
  return;
}

function four() {
  console.log('four');
  five();
  return;
}

function three() {
  console.log('three');

  try {
    four();
  } catch (obj) {
    if (obj === MySpecialCode) {
      console.log(obj);
      debugger;
    } else {
      throw obj;
    }
  }

  return;
}

function two() {
  console.log('two');
  three();
  return;
}

function one() {
  console.log('one');
  two();
  return;
}

one();
