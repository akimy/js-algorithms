const merge = (left, right) => {
  let i = 0;
  let j = 0;

  const result = [];

  while (i < left.length || j < right.length) {
    if (i >= left.length) {
      result.push(right[j]);
      j += 1;
      continue;
    }

    if (j >= right.length) {
      result.push(left[i]);
      i += 1;
      continue;
    }

    if (left[i] < right[j]) {
      result.push(left[i]);
      i += 1;
    } else if (right[j] < left[i]) {
      result.push(right[j]);
      j += 1;
    } else {
      result.push(right[j]);
      result.push(left[i]);
      i += 1;
      j += 1;
    }
  }

  return result;
};

const mergeSort = (arr) => {
  const length = arr.length;

  if (length === 1) {
    return arr;
  }

  const middle = length >> 1;
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort([5, 4, 3, 12, 7, -11, -15, 120]));
