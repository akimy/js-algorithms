const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const selectionSort = (arr) => {
  const arr2 = [];
  let maximal;

  while (arr.length !== 0) {
    maximal = { value: arr[0], index: 0 };
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] > maximal.value) {
        maximal.value = arr[i];
        maximal.index = i;
      }
    }
    arr2.unshift(arr.splice(maximal.index, 1)[0]);
  }

  console.log('\x1b[32m', 'Succesfully sorted');
  return arr2;
};

rl.question(
  'Insert the data for selection sorting (-10, 30, 20, 35, 65, 40, 60, -35, 55, -40, -45, 5, 15, 25, 50, 70, -70, 0) ',
  (answer) => {
    answer = answer === '' ? '-10, 30, 20, 35, 65, 40, 60, -35, 55, -40, -45, 5, 15, 25, 50, 70, -70, 0' : answer;
    const arr = answer.split(',').map(el => parseInt(el, 10));
    console.log('\x1b[0m', selectionSort(arr), '\n');
    rl.close();
  },
);
