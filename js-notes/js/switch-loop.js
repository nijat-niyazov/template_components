'use strict';

let ələsgər = 'əliş';
let ülviş = 'ülviş';

console.log(ələsgər, ülviş);
console.log(1 / 0);

let age = prompt('How old are you?', '');
alert(`You are ${age} years old!`); // You are 100 years old!

let isBoss = confirm('Are you the boss?');

alert(isBoss); // true if OK is pressed

let i = 0;

for (; i < 3; ) {
  alert(i++);
}

let sum = 0;

while (true) {
  let value = Number(prompt('enter value', ''));

  if (!value) break;

  sum += value;
}

alert('Sum is ' + sum);

for (let i = 0; i < 10; i++) {
  if (i % 2) {
    alert(i);
  }
}

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, '');
  }
}
alert('Done!');

for (i = 2; i < 11; i++) {
  if (i % 2 !== 0) alert(i);
}

while (i < 3) {
  alert(`num is ` + i);
  i++;
}

let numb;

do {
  numb = prompt('enter num', '');
} while (numb <= 100 && numb);

let a = 'javascript';
switch (a) {
  case 'java':
    alert('backend');
    break;
  case 'phtyon':
    alert('AI!');
    break;
  case 'javascript':
    alert('all evertying');
    break;
  default:
    alert("I don't know such values");
}

let ac = '1';
let b = 0;
switch (+ac) {
  case b + 1:
    alert('this runs, because +a is 1, exactly equals b+1');
    break;
  default:
    alert("this doesn't run");
}

let ab = 2 + 2;
switch (ab) {
  case 3:
    alert('Right!');
    break;
  case 4: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;
  default:
    alert('The result is strange. Really.');
}

let arg = prompt('Enter a value?', '');
switch (arg) {
  case '0':
  case '1':
    alert('One or zero');
    break;
  case '2':
    alert('Two');
    break;
  case 3:
    alert('Never executes!');
    break;
  default:
    alert('An unknown value');
}

let browserName = prompt('Which browser you use', '');

switch (browserName) {
  case 'Opera':
  case 'Mozilla':
  case 'Chrome':
    alert('You using windows');
    break;

  case 'Safari':
    alert('You using MAC');
    break;

  default:
    alert('no idea ');
}

if (browserName === 'Opera' || 'Mozilla' || 'Chrome') {
  alert('windows user');
} else if (browserName === 'Safari') {
  alert('mac');
} else {
  alert('starngge');
}
