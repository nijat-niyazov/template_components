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

const fruits = ['apple', 'banana', 'kiwi'];

fruits[5] = 'mango';
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // indexes ['0', '1', '2', '5']
console.log(Object.values(fruits)); // values
console.log(fruits);
console.log(fruits.length); // 6

// new Array
const fruits2 = new Array('Apple', 'Banana');
console.log(fruits2);

// iterate over an array
const fruitsIterate = ['Apple', 'Mango', 'Cherry'];
for (const fruit of fruitsIterate) {
  console.log(fruit);
}
// Apple
// Mango
// Cherry

// merge different arrays
const fruitsConcat = ['Apple', 'Banana', 'Strawberry'];
const moreFruitsConcat = ['Mango', 'Cherry'];
const combinedFruitsConcat = fruitsConcat.concat(moreFruitsConcat);
console.log(combinedFruitsConcat);
// ["Apple", "Banana", "Strawberry", "Mango", "Cherry"]

// creating copies of Array

//first

const fruitsCopies = ['Strawberry', 'Mango'];

// Create a copy using spread syntax.
const fruitsCopy = [...fruitsCopies];
// ["Strawberry", "Mango"]

// Create a copy using the from() method.
const fruitsCopy2 = Array.from(fruitsCopies);
// ["Strawberry", "Mango"]

// Create a copy using the slice() method.
const fruitsCopy3 = fruitsCopies.slice();
// ["Strawberry", "Mango"]

// not shallow
const fruitsDeepCopy = JSON.parse(JSON.stringify(fruits));

// ================ Methods =======================

// #1 split
const fruits3 = 'Apple, Banana'.split(', ');
console.log(fruits3); // ["Apple", "Banana"]

// #2 join
const fruitsJoin = ['Apple', 'Banana'];
const fruitsString = fruitsJoin.join(', ');
console.log(fruitsString); // "Apple, Banana"

// #3 indexOf - returns index of element if found, otherwise returns -1
const fruitsIndexOf = ['Apple', 'Banana'];
console.log(fruitsIndexOf.indexOf('Apple')); // 0

// #4 push - adds new element to end and returns the length of new array
const fruitsPush = ['Apple', 'Banana'];
const newLength = fruitsPush.push('Orange');
console.log(fruitsPush); // ["Apple", "Banana", "Orange"]
console.log(newLength); // 3

// #5 pop - removes last element of array and returns removed element
const fruitsPop = ['Apple', 'Banana', 'Orange'];
const removedItem = fruitsPop.pop();
console.log(fruitsPop); // ["Apple", "Banana"]
console.log(removedItem); // "Orange"

// #6 shift - removes first element and returns removed element
const fruitsShift = ['Apple', 'Banana'];
const removedItemShift = fruitsShift.shift();
console.log(fruitsShift); // ["Banana"]
console.log(removedItemShift); // "Apple"

// #7 unshift - adds new element to start and returns length of newArray
const fruitsUnshift = ['Banana', 'Mango'];
const newLengthUnshift = fruitsUnshift.unshift('Strawberry');
console.log(fruitsUnshift); // ["Strawberry", "Banana", "Mango"]
console.log(newLengthUnshift); // 3

// #8 splice - removes multiple elements from given index and returns spliced elements
const fruitsSplice = ['Apple', 'Banana', 'Strawberry', 'Mango', 'Cherry'];
const removedItems = fruitsSplice.splice(-3);
console.log(fruitsSplice); // ["Apple", "Banana"]
console.log(removedItems); // ["Strawberry", "Mango", "Cherry"]

// REMOVE MULTIPLE ELEMENTS splice method remove element from given start index and second argument is how many elements we want to remove and it returns removed elements
const fruitsSplice2 = [
  'Apple',
  'Strawberry',
  'Cherry',
  'Banana',
  'Mango',
  'Pearl',
];

const removedItemsSplice2 = fruitsSplice2.splice(3, 2, 'CHANGO');
console.log(fruitsSplice2); // ["Apple", "Strawberry", "Cherry", "Pearl"]
console.log(removedItemsSplice2); // ["Banana", "Mango",]

// REPLACE MULTIPLE ELEMENTS splice method remove element from given start index and second argument is how many elements we want to remove and it replaced changed elements
const fruitsSplice3 = ['Apple', 'Banana', 'Strawberry'];
const removedItems3 = fruitsSplice3.splice(-2, 2, 'Mango', 'Cherry');
console.log(fruitsSplice3);
// ["Apple", "Mango", "Cherry"]
console.log(removedItems3);
// ["Banana", "Strawberry"]

// #8 at find element with given index
const arr = ['a', 'b', 'c'];
console.log(arr.at(2)); // 'c'
console.log(arr.at(5)); // undefined
console.log(arr.at(-1)); // 'c'
console.log(arr.at(-4)); // undefined

// #9 copyWithin coping to index target the element at index start till but not included end element

const array1 = [
  'nicat',
  'fuad',
  'ibo',
  'atayev',
  'vahid',
  'eyyub',
  'ayxan',
  'elsad',
  'murad',
];

console.log(array1.copyWithin(-4));

// #10 #entries returns key and value of array element
const a = ['a', 'b', 'c'];

for (const [key, value] of a.entries()) {
  console.log(key, value); // it descrtuing arrays
}

for (const entries of a.entries()) {
  console.log(entries); // it return each index&element within array
}

// #11 EVERY test each element respond to condition or not if not any one of them responds it gets false

const everyArray = [1, 30, 39, 29, 10, 13];
console.log(everyArray.every(el => el < 40));

// #12 SOME test any element respond to condition or not if not any one of them responds it gets true

const tester = [15, 10, 230];
const someArray = [1, 30, 39, 29, 10, 13];
console.log(someArray.some(el => tester.includes(el)));

// #12 fill with given element from  start index position till end index-1
const arrayFill = [1, 2, 3, 4, 5];
// Fill with 0 from position 2 until position 4
console.log(arrayFill.fill('cart', 2, 4));
// [1, 2, 0, 0]
// Fill with 5 from position 1
console.log(arrayFill.fill(5, 1));
// [1, 5, 5, 5]
console.log(arrayFill.fill(6));
// [6, 6, 6, 6]

// #13 FILTER returning values correspond to condition
const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];

const result = words.filter(word => word.length > 6);

console.log(result);

// #14 FIND methods
const inventory = [
  { name: 'apples', quantity: 2 },
  { name: 'bananas', quantity: 5 },
  { name: 'cherries', quantity: 5 },
  { name: 'pearl', quantity: 7 },
  { name: 'kiwi', quantity: 7 },
];

// FIND returns first element correspond to condition
const find = inventory.find(({ name }) => name === 'cherries');
// FINDINDEX return index of first element correspond to condition
const findIndex = inventory.findIndex(({ quantity }) => quantity === 7);
// FINDLAST returns last element correspond to condition
const findLast = inventory.findLast(({ quantity }) => quantity === 7);
// FINDLASTINDEX return index of last element correspond to condition
const findLastIndex = inventory.findLastIndex(({ quantity }) => quantity === 7);

console.log(find); // obj
console.log(findIndex, inventory.at(findIndex).name); // pearl,3
console.log(findLast); // obj
console.log(findLastIndex, inventory.at(findLastIndex).name); // 4, kiwi

// #15 FLAT method takes all array into 1 array and we give level we want infiniy level does till the last depth

// flat just remove depth
const deepArr = [1, [2, [3, [4, [5, [6]]]]]];
console.log(deepArr.flat(Infinity));

// flatMap removes depth also we map each element
const deepArrMap = [1, [2, [3, [4, [5, [6]]]]]];
console.log(deepArrMap.flat(Infinity).map(n => n ** 2));

// #15 Array.from returns array which takes each element of string //arr,el,func

const cim = 'Today we are going to learn array from method';
const nums = '123';

console.log(Array.from(cim));
console.log(Array.from(nums, n => Number(n) ** n));

// creating array from 1 to giving length element
console.log(Array.from({ length: 5 }, (_, i) => i + 1));

// #16 REDUCE method
console.log([1, 100].reduce((acc, val) => Math.max(acc, val), 50)); // 100

const movies = [
  {
    title: 'Inception',
    year: '2010',
    director: 'Christopher Nolan',
  },
  {
    title: 'Interstellar',
    year: '2014',
    director: 'Christopher Nolan',
  },
  {
    title: 'Avatar',
    year: '2009',
    director: 'James Cameron',
  },
  {
    title: 'The Dark Knight',
    year: '2008',
    director: 'Christopher Nolan',
  },
  {
    title: 'Titanic',
    year: '1997',
    director: 'James Cameron',
  },
];

const groupedMovies = movies.reduce((group, movie) => {
  const { director } = movie;
  group[director] = group[director] ?? [];
  group[director].push(movie);
  return group;
}, {});

console.log(groupedMovies);

const obj = {
  name: 'John',
  age: 30,
  city: 'New York',
};

const inventori = [
  { name: 'cucumber', type: 'vegetables', quantity: 5 },
  { name: 'banana', type: 'fruit', quantity: 0 },
  { name: 'chickhen', type: 'meat', quantity: 23 },
  { name: 'cherries', type: 'fruit', quantity: 5 },
  { name: 'fish', type: 'meat', quantity: 22 },
];

const groupedFoods = inventori.reduce((foodGroup, food) => {
  const { type } = food;

  foodGroup[type] = foodGroup[type] ?? [];
  foodGroup[type].push(food);
  return foodGroup;
}, {});

console.log(groupedFoods);
