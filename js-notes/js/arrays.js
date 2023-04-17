// ===================== ARRAYS ====================

const fruits = ['apple', 'banana', 'kiwi'];

fruits[5] = 'mango';
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // indexes ['0', '1', '2', '5']
console.log(Object.values(fruits)); // values
console.log(fruits);
console.log(fruits.length); // 6

// creating copies of Array
// 1. assing syntax.
const fruitsCopies = ['Strawberry', 'Mango'];

// 2. spread syntax.
const fruitsCopy = [...fruitsCopies];
// ["Strawberry", "Mango"]

// 3. from() method.
const fruitsCopy2 = Array.from(fruitsCopies);
// ["Strawberry", "Mango"]

// 4. slice() method.
const fruitsCopy3 = fruitsCopies.slice();
// ["Strawberry", "Mango"]

// not shallow
const fruitsDeepCopy = JSON.parse(JSON.stringify(fruits));

// iterate over an array
const fruitsIterate = ['Apple', 'Mango', 'Cherry'];
for (const fruit of fruitsIterate) {
  console.log(fruit);
}

const fruitsIterate2 = ['Apple', 'Mango', 'Cherry'];
fruitsIterate2.forEach(fruit => console.log(fruit));
// Apple
// Mango
// Cherry

// create new Array

const foods = ('cart', 'okat');

//1.1
const fruits1_1 = new Array(foods);
console.log(fruits1_1);

//1.2
const fruits1_2 = Array.of('Apple, Banana');
console.log(fruits1_2);

// ================ Methods =======================

// #1 split
const fruits3 = 'Apple, Banana'.split(', ');
console.log(fruits3); // ["Apple", "Banana"]

// #2 Array.from returns array which takes each element of string //arr,el,func

const cim = 'Today we are going to learn array.from method';
const nums = '123';

console.log(Array.from(cim));
console.log(Array.from(nums, n => Number(n) ** n));

// creating array from 1 to giving length element
console.log(Array.from({ length: 5 }, (_, i) => i + 1));

// #3 JOIN method joins arrays into string with the givin sybmbol
const fruitsJoin = ['Apple', 'Banana'];
const fruitsString = fruitsJoin.join(', ');
console.log(fruitsString); // "Apple, Banana"

// #3 indexOf - returns index of element if found, otherwise returns -1 and sec element says form which index start to finding
const fruitsIndexOf = [
  'Apple',
  'Banana',
  'Pearl',
  'Banana',
  'Melon',
  'Banana',
  'water',
  'Banana',
  'cart',
  'Banana',
];

console.log(fruitsIndexOf.indexOf('Pearl', 1)); // 0
console.log(fruitsIndexOf.lastIndexOf('Banana')); // 9

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

// WITH method used for replaced with given index element value with given value

const fruitsWith = [
  'Apple',
  'Strawberry',
  'Cherry',
  'Banana',
  'Mango',
  'Pearl',
];

const replacedElementIndex = fruitsWith.findIndex(fruit => fruit === 'Cherry');

const changeWith = 'Berry';

console.log(fruitsWith.with(replacedElementIndex, changeWith));

// SLICE method cuts within givin indexes of elements

const animalsArr = ['ant', 'bison', 'camel', 'duck', 'elephant'];

const bisonCamel = animalsArr.slice(1, 3);
console.log(bisonCamel);

const elephantDuck = animalsArr.slice(-2);
console.log(elephantDuck);

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

// #10 ENTRIES method returns key and value of array element
const a = ['a', 'b', 'c'];
for (const [key, value] of a.entries()) {
  console.log(key, value); // it descrtuing arrays
}

for (const entries of a.entries()) {
  console.log(entries); // it return each index&element within array
}

// KEYS
for (const key of a.keys()) {
  console.log(key); // it descrtuing arrays
}

// VALUES
for (const value of a.values()) {
  console.log(value); // it descrtuing arrays
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

// #13 FILTER method returning values correspond to condition
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
const findSec = inventory.find(({ quantity }) => quantity === 7);
// FINDINDEX return index of first element correspond to condition
const findIndex = inventory.findIndex(({ quantity }) => quantity === 7);
// FINDLAST returns last element correspond to condition
const findLast = inventory.findLast(({ quantity }) => quantity === 7);
// FINDLASTINDEX return index of last element correspond to condition
const findLastIndex = inventory.findLastIndex(({ quantity }) => quantity === 7);

console.log(find); // obj
console.log(findSec); // obj
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

// #17 MAP method we can change any value and create new array

const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));

console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]

// #18. CONCAT method merges different arrays
const fruitsConcat = ['Apple', 'Banana', 'Strawberry'];
const moreFruitsConcat = ['Mango', 'Cherry'];
const combinedFruitsConcat = fruitsConcat.concat(moreFruitsConcat);
console.log(combinedFruitsConcat);
// ["Apple", "Banana", "Strawberry", "Mango", "Cherry"]

// #19. INCLUDES method check if element is within array or not
const animals = ['cat', 'lion', 'turtle', 'giraffe', 'mouse', 'dog', 'bat'];
const pets = ['cat', 'dog', 'hamster'];

const ev_heyvanlari = animals.filter(animal => pets.includes(animal));
console.log(ev_heyvanlari);

// // #19. indexOF method check if element is within array or not
// const animals = ['cat', 'lion', 'turtle', 'giraffe', 'mouse', 'dog', 'bat'];
// const pets = ['cat', 'dog', 'hamster'];

// const ev_heyvanlari = animals.filter(animal => pets.includes(animal));
// console.log(ev_heyvanlari);

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

console.log(groupedFoods); // {vegetables: Array(1), fruit: Array(2), meat: Array(2)}

// REDUCERIGHT method is same with reduce but its element order is reversed

const arrayRIT = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const resultRIght = arrayRIT.reduceRight((accumulator, currentValue) =>
  accumulator.concat(currentValue)
);

console.log(resultRIght);

const payments = [100, 200, 300, 400];
const cumulativeSum = payments.reduceRight(
  (acc, curr) => {
    acc.push(acc[acc.length - 1] + curr);
    return acc;
  },
  [0]
);

// 0,+400,+300,+200,+100
console.log(cumulativeSum); // [0, 400, 700, 900, 1000]

// REVERSE method reverse order of element in arr

const myCountry = 'najiabrezA';
console.log(Array.from(myCountry).reverse().join('')); // Azerbaijan

// SORT METHOD sorts from ascending to sendending in place of UTF-16
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

const myNums = [5, 6, 7, 1, 5, 3, 2, 1, 8, 9, 0];
// function compareNumbers(a, b) {
//   return a - b;
// }

const ascending = [...new Set(myNums)].sort((a, b) => a - b);
const descending = [...new Set(myNums)].sort((a, b) => b - a);

console.log(ascending, descending);

const items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 },
];

// sort by value
const students = [
  { name: 'Alex', grade: 15 },
  { name: 'Devlin', grade: 15 },
  { name: 'Eagle', grade: 13 },
  { name: 'Sam', grade: 14 },
];

// sort by name
console.log(
  students.sort((a, b) => {
    return a.grade - b.grade;
  })
);
