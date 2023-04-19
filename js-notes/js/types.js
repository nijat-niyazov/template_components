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

'' + 1 + 0; // "10" // (1)
'' - 1 + 0; // -1 // (2)
true + false; // 1
6 / '3'; // 2
'2' * '3'; // 6
4 + 5 + 'px'; // "9px"
'$' + 4 + 5; // "$45"
'4' - 2; // 2
'4px' - 2; // NaN
7 / 0; //Infinity
' -9 ' + 5; //" -9 5" // (3)
' -9 ' - 5; //-14 // (4)
null + 1; //1 // (5)
undefined + 1; //NaN // (6)
' \t \n' - 2; // -2 // (7)

1. The addition with a string "" + 1 converts 1 to a string: "" + 1 = "1" , and
then we have "1" + 0 , the same rule is applied.
2. The subtraction - (like most math operations) only works with numbers, it converts
an empty string "" to 0 .
3. The addition with a string appends the number 5 to the string.
4. The subtraction always converts to numbers, so it makes " -9 " a number -9
(ignoring spaces around it).
5. null becomes 0 after the numeric conversion.
6. undefined becomes NaN after the numeric conversion.
7. Space characters, are trimmed off string start and end when a string is converted to
a number. Here the whole string consists of space characters, such as \t , \n and a
“regular” space between them. So, similarly to an empty string, it becomes 0 .

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
