// 'use strict';

// let ələsgər = 'əliş';
// let ülviş = 'ülviş';

// console.log(ələsgər, ülviş);
// console.log(1 / 0);

// const arr = [1, 3, 4];
// const str = 'cart';
// const num = 4;
// const oby = {
//   name: 'me',
// };
// let x;
// const test = null;
// const unknown = undefined;

// console.log(
//   typeof arr,
//   typeof str,
//   typeof num,
//   typeof oby,
//   typeof test,
//   typeof unknown,
//   test == unknown,
//   test === unknown
// );

// typeof undefined; // "undefined"
// typeof 0; // "number"
// typeof 10n; // "bigint"
// typeof true; // "boolean"
// typeof 'foo'; // "string"
// typeof Symbol('id'); // "symbol"
// typeof Math; // "object" (1)
// typeof null; // "object" (2)
// typeof alert; // "function" (3)

// const numUn = Number(undefined); // Nan
// const numNull = Number(null); // 0
// const strFull = Number('cart        '); // NaN
// const strEmpyu = Number('        '); // 0
// const tre = Number(true); // 1
// const wrong = Number(false); // 0

// const BooleanUn = Boolean(undefined); // false
// const BooleanNull = Boolean(null); // false
// const BooleanEmpty = Boolean(' '); // true
// const BooleanHasNoValue = Boolean(''); // false
// console.log(
//   numUn,
//   numNull,
//   strFull,
//   strEmpyu,
//   tre,
//   wrong,
//   BooleanNull,
//   BooleanUn,
//   BooleanEmpty,
//   BooleanHasNoValue
// );
// console.log('4' - 2);
// console.log('' - 2);
// console.log('6' / 3, '2' * 3);

// '' + 1 + 0; // "10" // (1)
// '' - 1 + 0; // -1 // (2)
// true + false; // 1
// 6 / '3'; // 2
// '2' * '3'; // 6
// 4 + 5 + 'px'; // "9px"
// '$' + 4 + 5; // "$45"
// '4' - 2; // 2
// '4px' - 2; // NaN
// 7 / 0; //Infinity
// ' -9 ' + 5; //" -9 5" // (3)
// ' -9 ' - 5; //-14 // (4)
// null + 1; //1 // (5)
// undefined + 1; //NaN // (6)
// ' \t \n' - 2; // -2 // (7)

// 1. The addition with a string "" + 1 converts 1 to a string: "" + 1 = "1" , and
// then we have "1" + 0 , the same rule is applied.
// 2. The subtraction - (like most math operations) only works with numbers, it converts
// an empty string "" to 0 .
// 3. The addition with a string appends the number 5 to the string.
// 4. The subtraction always converts to numbers, so it makes " -9 " a number -9
// (ignoring spaces around it).
// 5. null becomes 0 after the numeric conversion.
// 6. undefined becomes NaN after the numeric conversion.
// 7. Space characters, are trimmed off string start and end when a string is converted to
// a number. Here the whole string consists of space characters, such as \t , \n and a
// “regular” space between them. So, similarly to an empty string, it becomes 0 .

// let a = 9;

// a++; // 10
// ++a; // 11

// console.log(a);

// let b = 9;

// console.log(++b); // 10
// console.log(b++); // 9

// let counter = 1;

// console.log(2 * ++counter); // 4
// console.log(2 * counter++); // 2

// console.log('Ab' < 'Az');
// console.log('ab' < 'Az');

// console.log(5.0 == 5);
// console.log(5.0 === 5);
// console.log('2' > '12');
// console.log(2 > '12');

// let age = prompt('How old are you?', '');
// alert(`You are ${age} years old!`); // You are 100 years old!

// let isBoss = confirm('Are you the boss?');

// alert(isBoss); // true if OK is pressed

// let i = 0;

// for (; i < 3; ) {
//   alert(i++);
// }

// let sum = 0;

// while (true) {
//   let value = Number(prompt('enter value', ''));

//   if (!value) break;

//   sum += value;
// }

// alert('Sum is ' + sum);

// for (let i = 0; i < 10; i++) {
//   if (i % 2) {
//     alert(i);
//   }
// }

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     let input = prompt(`Value at coords (${i},${j})`, '');
//     // what if we want to exit from here to Done (below)?
//   }
// }
// alert('Done!');

// let i;

// for (i = 2; i < 11; i++) {
//   if (i % 2 !== 0) alert(i);
// }

// let i = 0;

// while (i < 3) {
//   alert(`num is ` + i);
//   i++;
// }

// let numb;

// do {
//   numb = prompt('enter num', '');
// } while (numb <= 100 && numb);

// let a = 'javascript';
// switch (a) {
//   case 'java':
//     alert('backend');
//     break;
//   case 'phtyon':
//     alert('AI!');
//     break;
//   case 'javascript':
//     alert('all evertying');
//     break;
//   default:
//     alert("I don't know such values");
// }

// let a = '1';
// let b = 0;
// switch (+a) {
//   case b + 1:
//     alert('this runs, because +a is 1, exactly equals b+1');
//     break;
//   default:
//     alert("this doesn't run");
// }

// let a = 2 + 2;
// switch (a) {
//   case 3:
//     alert('Right!');
//     break;
//   case 4: // (*) grouped two cases
//   case 5:
//     alert('Wrong!');
//     alert("Why don't you take a math class?");
//     break;
//   default:
//     alert('The result is strange. Really.');
// }

// let arg = prompt('Enter a value?', '');
// switch (arg) {
//   case '0':
//   case '1':
//     alert('One or zero');
//     break;
//   case '2':
//     alert('Two');
//     break;
//   case 3:
//     alert('Never executes!');
//     break;
//   default:
//     alert('An unknown value');
// }

// let browserName = prompt('Which browser you use', '');

// switch (browserName) {
//   case 'Opera':
//   case 'Mozilla':
//   case 'Chrome':
//     alert('You using windows');
//     break;

//   case 'Safari':
//     alert('You using MAC');
//     break;

//   default:
//     alert('no idea ');
// }

// if (browserName === 'Opera' || 'Mozilla' || 'Chrome') {
//   alert('windows user');
// } else if (browserName === 'Safari') {
//   alert('mac');
// } else {
//   alert('starngge');
// }

// function minDec(a, b) {
//   return a ** b;
// }

// const minExp = function (a, b) {
//   return a ** b;
// };

// console.log(minDec(2, 5));
// console.log(minExp(2, 3));

// sayHi('John'); // Hello, John

// // The Function Declaration sayHi is created when JavaScript is preparing to start the script and is visible everywhere in it. ✅
// function sayHi(name) {
//   console.log(`Hello, ${name}`);
// }

// sayHi2('John'); // error ❌

// // Because expresison funciton doesn't exist till it's called or execution is happened
// let sayHi2 = function (name) {
//   console.log(`Hello, ${name}`);
// };

// console.log(
//   typeof undefined, // error in the language
//   typeof null, // error in the language
//   typeof function () {}
// );

