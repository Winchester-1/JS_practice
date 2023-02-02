/* eslint-disable no-unused-vars */
'use strict';

// const num = 50;

// if (num < 49) {
//   console.log('Wrong!');
// } else if (num > 100) {
//   console.log('Wrong!');
// } else {
//   console.log('Correct!');
// }

// (num === 50) ? console.log('Correct!') : console.log('Error!');

// switch (num) {
//   case 49:
//     console.log('Nope!');
//     break;
//   case 51:
//     console.log('Nope again!');
//     break;
//   case 50:
//     console.log('Yeap!');
//     break;
//   default:
//     console.log('Not this time, bro!');  
// }

let num = 50;

// while (num < 60) {
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num);
//   num++;
// }
// while (num < 60);

// for (let i = 1; i <= 20; i++) {
//   console.log(num);
//   num++;
// }

for (let i = 1; i <= 20; i++) {
  if (i === 12) {
    // break;
    continue;
  }

  console.log(i);
}