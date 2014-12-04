console.log('running our program');

/**
 * Example functions to put on the call stack.
 */

function two() {
  console.log('two');
  return 2;
}

function one() {
  // stack overflow!
  debugger;
  one();
}

/**
 * Example to illustrate some of what a lower level
 * run time method might do in order to call a function.
 */
var heap = {};
var stack = [];

var callFunction = function (nameFunc, args, lineNumber) {
  var func = heap[nameFunc];

  var stackFrame = {
    func: func,
    name: nameFunc,
    args: args,
    env: {},
    returnValue: undefined
  };

  stack.push(stack);

  var returnValue = func.apply(this, args);
  stackFrame.returnValue = returnValue;
  return stack.pop();
};
