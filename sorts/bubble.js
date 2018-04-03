const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const bubbleSort = (arr) => {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorted = false;
      }
    }
  }

  console.log('\x1b[32m', 'Succesfully sorted');
  return arr;
};

rl.question(
  'Insert the data for bubble sorting (100, 50, 0, 1, 205, 400, 82, 300, 1000, 3021, 5, 15, 255) ',
  (answer) => {
    answer = answer === '' ? '100, 50, 0, 1, 205, 400, 82, 300, 1000, 3021, 5, 15, 255' : answer;
    const arr = answer.split(',').map(el => parseInt(el, 10));
    console.log('\x1b[0m', bubbleSort(arr), '\n');
    rl.close();
  },
);
