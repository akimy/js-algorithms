function quickSort(arr, left = 0, right = arr.length - 1) {
  let i = left;
  let j = right;

  const pivot = arr[(left + right) >> 1];

  while (i <= j) {
    while (arr[i] < pivot) {
      i += 1;
    }

    while (arr[j] > pivot) {
      j -= 1;
    }

    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i += 1;
      j -= 1;
    }
  }

  if (left < j) {
    quickSort(arr, left, j);
  }

  if (i < right) {
    quickSort(arr, i, right);
  }

  return arr;
}

console.log(quickSort([1, 4, 2, 8, -11, 10, 12, 11, 0]));

// OMG O_o
function quickSortF(arr) {
  if (!arr.length) return [];

  const [head, ...tail] = arr,
    left = tail.filter(e => e < head),
    right = tail.filter(e => e >= head);

  return quickSortF(left).concat(head, quickSortF(right));
}

const q7 = quickSortF([11, 8, -11, 0, -7, 14, 3, 6, 2, 7]);

console.log(q7);
