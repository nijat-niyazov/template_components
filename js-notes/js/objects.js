//

// ========= Creating object ===========
let objectNew = new Object();
let objectBracket = {};

let user = {
  // an object
  name: 'John', // by key "name" store value "John"
  age: 30, // by key "age" store value 30
  admin: '',
};

// 1#
console.log(user.name === user['name']);

console.log(createUser('ulvi', 23));

function createUser(name, age) {
  return {
    name: name,
    age: age,
  };
}

const createUserArr = (name, age) => ({
  name: name,
  // key, value

  age: age,
  //key, value
});

console.log(createUserArr('ulvi', 23));

// dectructuring objects
const createDec = function (name, age) {
  return {
    name,
    age,
  };
};

console.log(createDec('ulvi', 23));

// ========= CHECK EXISTENCE ===========

let guy = {
  name: 'Nijat',
  job: 'programmer',
  school: 'UNEC',
};

// #1 object.key checks if propery with given key exist on object
// if exist returns value ---- if non exist returns undefined
console.log(guy.company); // undefined

// #2 object[key] and key must be in dual quotes.
// if exist returns value ---- if non exist returns undefined
console.log(guy['job']); // programmer
console.log(guy['company']); // undefined

// #3 "key" in object checks property with given key exist on object or not
// if exist returns true ---- if non exist returns false
console.log('name' in guy); // true

// The “for…in” loop

let john = {
  name: 'John',
  age: 30,
  isAdmin: true,
};

// get keys&&properties
for (let key in john) {
  console.log(key, '-', john[key]);
}

// ========= Orders In Objects ===========

// #1. if properties&keys are integers they are sorted in ascending method if non integers they sorted in given order
let codes = {
  '+49': 'Germany',
  '+41': 'Switzerland',
  '+44': 'Great Britain',

  '+1': 'USA',
};
for (let code in codes) {
  console.log(code); // 1, 41, 44, 49
}

// ========= Copying reference ===========

// A variable stores not the object itself, but its “address in memory”, in other words “a reference” to it.

let man = { name: 'John' }; // reference to adress in memory of object
let admin = man; // copied reference
// now admin variable also has reference to same adress as man variable
admin.name = 'Pete';
console.log(man.name); // 'Pete'

let empty = {};
let b = empty; // copy the reference
console.log(empty == b); // true, both variables reference the same object
console.log(empty === b); // true

let otherEmpty1 = {};
let otherEmpty2 = {}; // two independent objects
console.log(otherEmpty1 == otherEmpty2); // false

// ========= CREATING COPIES ===========

// ========= They are not new object they copied by reference

// #1. Assign method
let menAssign = {
  name: 'John',
  age: 30,
};

let cloneFirst = menAssign;

cloneFirst['age'] = 23; // it  affects original object because they have same reference

console.log(menAssign);
console.log(cloneFirst);

// #2. Object.assign (toObject, copy these)

let assign = { name: 'John', canView: false };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

let newOne = Object.assign({}, assign);

newOne.canEdit = false;
// copies all properties from permissions1 and permissions2 into assign and if there is with same property it will be overwritten
console.log(Object.assign(assign, permissions1, permissions2));
console.log(Object.assign(assign, { job: 'accountant' }));
console.log(newOne);

let userAssign = {
  name: 'John',
  sizes: {
    height: 182,
    width: 50,
  },
};
let cloneAssign = Object.assign({}, userAssign);
console.log(userAssign.sizes === cloneAssign.sizes); // true, same object

// userAssign and cloneAssign share sizes
userAssign.sizes.width++; // change a property from one place
console.log(cloneAssign.sizes.width); // 51, see the result from the other one

// ========= They are new objects and they have different references

// #1. Assign method
let men = {
  name: 'John',
  age: 30,
};

let clone = {};

for (let key in men) {
  clone[key] = men[key];
}

clone['age'] = 23; // it doesn't affect original object

console.log(men);
console.log(clone);

// =========== TASKS ==========

let task = {};
let taskEmpty = {};

task['name'] = 'John';
task.surname = 'Smith';
console.log(task);
task.name = 'Pete';
delete task.surname;
console.log(task);

// ====================================

const isEmpty = obj => {
  for (let key in obj) {
    return false;
  }
  return true;
};

console.log(isEmpty(task));
console.log(isEmpty(taskEmpty));

// ====================================

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const findSumSalary = obj => {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
};

console.log(findSumSalary(salaries));

// ====================================

const multiplyNumerics = obj => {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
    return obj
  }
};

let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

console.log(multiplyNumerics(menu));
multiplyNumerics(menu);
console.log(menu);


function multiplyNumeric(obj) {
  for (let prop in obj) {
    if (typeof obj[prop] === 'number') {
      obj[prop] *= 2;
    }
  }
}

// Example usage
let myObj = {
  name: 'John',
  age: 30,
  height: 175,
  weight: 70.5,
};

multiplyNumeric(myObj);
multiplyNumeric(menu);

console.log(myObj);
console.log(menu);

// ====================================


// Method examples
// A function that is the property of an objects is called its method.

