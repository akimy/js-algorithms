function bubbleSort(arr) {
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
  return arr;
}

bubbleSort([-10, 30, 20, 35, 65, 40, 60, -35, 55, -40, -45, 5, 15, 25, 50, 70, -70, 0]);
