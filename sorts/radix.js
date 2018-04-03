const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const listToBuckets = (arr, base, iteration) => {
  const buckets = Array.from({ length: base }).map(() => []);

  for (const number of arr) {
    const digit = Math.floor(number / (base ** iteration)) % base;
    buckets[digit].push(number);
  }

  return buckets;
};

const bucketsToList = (buckets) => {
  const numbers = [];

  for (const bucket of buckets) {
    for (const number of bucket) {
      numbers.push(number);
    }
  }

  return numbers;
};

const radixSort = (arr, base = 10) => {
  const max = Math.max(...arr);
  let iteration = 0;

  while (base ** iteration <= max) {
    arr = bucketsToList(listToBuckets(arr, base, iteration));
    iteration += 1;
  }

  return arr;
};

const radixSortWithSignedNumbers = (arr) => {
  const positiveInts = [];
  const negativeInts = [];
  const zeroes = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > 0) {
      positiveInts.push(arr[i]);
    } else if (arr[i] === 0) {
      zeroes.push(0);
    } else {
      negativeInts.push(-arr[i]);
    }
  }

  const sortedNegative = radixSort(negativeInts).map(el => -el).reverse();
  const sortedPositive = radixSort(positiveInts);

  console.log('\x1b[32m', 'Succesfully sorted');
  return sortedNegative.concat(zeroes).concat(sortedPositive);
};

rl.question(
  'Insert the data for radix sorting (100, 50, 0, 1, 205, 400, 82, 300, 1000, 3021, 5, 15, 255) ',
  (answer) => {
    answer = answer === '' ? '100, 50, 0, 1, 205, 400, 82, 300, 1000, 3021, 5, 15, 255' : answer;
    const arr = answer.split(',').map(el => parseInt(el, 10));
    console.log('\x1b[0m', radixSortWithSignedNumbers(arr), '\n');
    rl.close();
  },
);
