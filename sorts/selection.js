const selectionSort = (arr) => {
  const arr2 = [];
  let maximal;

  while (arr.length !== 0) {
    maximal = { value: arr[0], index: 0 };
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > maximal.value) {
        maximal.value = arr[i];
        maximal.index = i;
      }
    }
    arr2.unshift(arr.splice(maximal.index, 1)[0]);
  }
  return arr2;
};

selectionSort([-10, 30, 20, 35, 65, 40, 60, -35, 55, -40, -45, 5, 15, 25, 50, 70, -70, 0]);
