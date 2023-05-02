// // Primitive types which has one value
// // string,number,booelan,null and undefined,symbol

// console.log(1e9); // 1 and 9x(1000) zeros
// console.log(4.3e9); // 1 and 9x(1000) zeros

// let ms = 0.000001;
// ms = 1e-6; // 1 / 6x(1000000)

// const num = 12345;
// console.log(num.toString(36));

// const upperCaseString = 'Hello'.toUpperCase();
// console.log(upperCaseString);

// let sum = 0.1 + 0.2;

// console.log(sum == 0.3); // false
// console.log(+sum.toFixed(2) == 0.3); // true

// console.log((0.1 * 10 + 0.2 * 10) / 10);
// console.log((0.28 * 100 + 0.14 * 100) / 100);

// console.log(typeof Infinity);
// console.log(typeof NaN);
// console.log(isNaN(NaN));
// console.log(isFinite(NaN));
// console.log(isFinite(Infinity));

// console.log(5 == '5');
// console.log(Object.is(5, '5'));
// console.log(Object.is(5, 5));

// const style = '90.34.2px';
// const USD = '100.25$';

// // they both parse number values till first NaN value
// console.log(parseInt(style)); //90
// console.log(parseInt(USD)); // 100
// console.log(parseFloat(style)); //90.34
// console.log(parseFloat(USD)); // 100.25

// // const num1 = +prompt('type first number', '');
// // const num2 = +prompt('type second number', '');

// // console.log(num1 + num2);

// // function readNumber() {
// //   let num;
// //   do {
// //     num = prompt('Enter a number please?', 0);
// //   } while (!isFinite(num));
// //   if (num === null || num === '') return null;
// //   return +num;
// // }

// // alert(`Read: ${readNumber()}`);

// console.log(Math.floor(Math.random() * 5 + 5));

let a = 0;

const num = '5.6';

console.log(typeof num, typeof parseInt(num));

console.log(a++);
console.log('5.0' == 5.0);
console.log('5.0' === 5.0);
console.log('5.0' == 5);
console.log(parseInt(num) === 5);

const arr1 = [1, 2];
const arr2 = [3, 4];

console.log(arr1 + arr2);

console.log(1 + 2 * 6);

let b = 2 + 2;
switch (b) {
  case 3:
    alert('Too small');
  case 4:
    alert('Exactly!');
    break;
  case 5:
    alert('Too big');
  default:
    alert("I don't know such values");
}
