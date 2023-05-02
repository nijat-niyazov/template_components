// let arr = [1, 8, 5, -4, 3, 77, -1];
// let sorted = [];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       let tmp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = tmp;
//     }
//   }
// }

// for (let o = 0; o < arr.length; o++) {
//   console.log(arr[o]);
// }

// let str = '';

// const full = (figure, num) => {
//   for (let i = 1; i <= num; i++) {
//     i % Math.sqrt(num) === 0 ? (str += figure + '\n') : (str += figure);
//   }

//   console.log(str);
// };

// full('⬜', 36);

let str2 = '';

const border = (figure, num) => {
  let breaker = 1;
  for (let i = 1; i <= num; i++) {
    if (breaker === 1 || breaker === Math.sqrt(num)) {
      i % Math.sqrt(num) === 0
        ? (str2 += figure + '\n\n') && breaker++
        : (str2 += figure + ' ');
    } else {
      if ((i - 1) % Math.sqrt(num) === 0 || i % Math.sqrt(num) === 0) {
        i % Math.sqrt(num) === 0
          ? (str2 += figure + '\n\n') && breaker++
          : (str2 += figure);
      } else {
        str2 += '    ';
      }
    }
  }

  console.log(str2);
};

border('⬜', 36);

let a = 6;
let b = 8;

const changer = (first, sec) => {
  first = b;
  sec = a;
  console.log('a - ', first, 'b - ', sec);
};

changer(a, b);
