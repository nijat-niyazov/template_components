const arr = [1, 3, 4];
const str = 'cart';
const num = 4;
const oby = {
  name: 'me',
};
let x;
const test = null;
const unknown = undefined;

console.log(
  typeof arr,
  typeof str,
  typeof num,
  typeof oby,
  typeof test,
  typeof unknown,
  test == unknown,
  test === unknown
);

typeof undefined; // "undefined"
typeof 0; // "number"
typeof 10n; // "bigint"
typeof true; // "boolean"
typeof 'foo'; // "string"
typeof Symbol('id'); // "symbol"
typeof Math; // "object" (1)
typeof null; // "object" (2)
typeof alert; // "function" (3)

const numUn = Number(undefined); // Nan
const numNull = Number(null); // 0
const strFull = Number('cart        '); // NaN
const strEmpyu = Number('        '); // 0
const tre = Number(true); // 1
const wrong = Number(false); // 0

const BooleanUn = Boolean(undefined); // false
const BooleanNull = Boolean(null); // false
const BooleanEmpty = Boolean(' '); // true
const BooleanHasNoValue = Boolean(''); // false
console.log(
  numUn,
  numNull,
  strFull,
  strEmpyu,
  tre,
  wrong,
  BooleanNull,
  BooleanUn,
  BooleanEmpty,
  BooleanHasNoValue
);
console.log('4' - 2);
console.log('' - 2);
console.log('6' / 3, '2' * 3);

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

let a = 9;

a++; // 10
++a; // 11

console.log(a);

let b = 9;

console.log(++b); // 10
console.log(b++); // 9

let counter = 1;

console.log(2 * ++counter); // 4
console.log(2 * counter++); // 2

console.log('Ab' < 'Az');
console.log('ab' < 'Az');

console.log(5.0 == 5);
console.log(5.0 === 5);
console.log('2' > '12');
console.log(2 > '12');
