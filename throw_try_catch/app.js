var MySpecialCode = {
  msg: 'My special code',
  toString: function () { return this.msg; }
};

function six() {
  console.log('six');
  debugger;

  // throw the MySpecialCode object down the
  // call stack until the runtime finds a catch
  // that knows how to deal with it.
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
    // catch any thrown object, and if it's our MySpecialObject
    // do something special, otherwise rethrow the object down
    // the callstack. Notice, at this point, functions five and six
    // have been skipped (we jumpted to this point in the call stack)!
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
