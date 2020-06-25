// Given an array of integers ‘num’ return the array incremented by 1.
// Each value in the array cannot exceed 9.
// You cannot use any function that converts the array into an integer.

// num = [1,2,7,9]

// return [1,2,8,0]

let num = [1, 2, 7, 9];

const arrayIncrementor = (num) => {
  for (let i = 0; i < num.length; i++) {
    if (num[i] === 9) num[i] = 0;
    else num[i]++;
  }
  return num;
};

console.log(arrayIncrementor(num));
