function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

alert(
  n > 0
    ? pow(x, n)
    : `Power ${n} is not supported, please enter an integer number greater than zero`
);

function minDec(a, b) {
  return a ** b;
}

const minExp = function (a, b) {
  return a ** b;
};

console.log(minDec(2, 5));
console.log(minExp(2, 3));

sayHi('John'); // Hello, John

// The Function Declaration sayHi is created when JavaScript is preparing to start the script and is visible everywhere in it. ✅
function sayHi(name) {
  console.log(`Hello, ${name}`);
}

sayHi2('John'); // ERROR ❌

// Because expresison funciton doesn't exist till it's called or execution is happened
let sayHi2 = function (name) {
  console.log(`Hello, ${name}`);
};

console.log(
  typeof undefined, // error in the language
  typeof null, // error in the language
  typeof function () {}
);
