// ========== Object Methods ===========

// #1. Assing method (merging objects)

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

returnedTarget.c = 6;

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true

// they have same reference which means if something will change in returnedTarget it will affect source and in assing if there is mutual property it will be overwritten

// Deep Clone
const obj3 = { a: 0, b: { c: 0 } };
const obj4 = JSON.parse(JSON.stringify(obj3));
obj3.a = 4;
obj3.b.c = 4;
console.log(obj4); // { a: 0, b: { c: 0 } }

// #2. defineProperties((object, property name, value: existed object))

const ahmad = {};
const man = { name: 'Parviz', age: 53, isTeacher: true };

Object.defineProperties(ahmad, {
  // kimligi: { value: man, writable: true, enumerable: true, configurable: true },
  kisiliyi: {
    value: man,
    writable: true, // it allows change value of obj
    enumerable: false, // it lets get value on iteration
    configurable: true, // it lets remove a property
  },
});

// ahmad.kimligi = { esi: 'nem' }; // can change if object is writable/enumarable/confugrable is true

// delete ahmad.kimligi
// console.log(ahmad.kimligi);

ahmad.kisiliyi.name = 'Bexram';
console.log(ahmad.kisiliyi);

for (let key in ahmad.kisiliyi) {
  console.log(ahmad.kisiliyi[key]);
}

// #2. defineProperty((object, property name, values))

const elmeddin = {};

Object.defineProperty(elmeddin, 'isMyNeighbour', {
  value: false,
  writable: true,
});

elmeddin.isMyNeighbour = true;

console.log(elmeddin.isMyNeighbour);

// entries(obj)

// converts key&value into 1 array,

const object1 = {
  a: 'zerbaijan',
  b: 'aku',
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// creating array from objects
const arr = Object.entries(object1);
console.log(...arr);

// converts word into index&value array
const word = 'word';
const string = Object.entries(word);
console.log(...string);

// fromEntries(arr&obj) converts arr to objects also reverse

const fromEnt = { a: 2, b: 3, c: 5 };

const changeValues = Object.fromEntries(
  Object.entries(fromEnt).map(([key, value]) => [key, value ** 2])
);

console.log(changeValues);
