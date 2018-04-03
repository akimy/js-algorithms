function listToBuckets(arr, base, iteration) {
  const buckets = Array.from({ length: base }).map(() => []);

  for (const number of arr) {
    const digit = Math.floor(number / (base ** iteration)) % base;
    buckets[digit].push(number);
  }

  return buckets;
}

function bucketsToList(buckets) {
  const numbers = [];

  for (const bucket of buckets) {
    for (const number of bucket) {
      numbers.push(number);
    }
  }

  return numbers;
}

function radixSort(arr, base = 10) {
  const max = Math.max(...arr);
  let iteration = 0;

  while (base ** iteration <= max) {
    arr = bucketsToList(listToBuckets(arr, base, iteration));
    iteration += 1;
  }

  return arr;
}

function radixSortWithSignedNumbers(arr) {
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
  return sortedNegative.concat(zeroes).concat(sortedPositive);
}

radixSort([100, 50, 205, 3021, 5, 15, 255]);
radixSortWithSignedNumbers([-10, 3440, 20, 35, 0, 0, -115, 365, 40, 60, -35, 1255, -40, -45, 5, 15, 25, 50, 70, -70, 0]);

