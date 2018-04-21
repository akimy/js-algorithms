const first = [1, 2, 3, 4, 4];
const second = [1, 2, 3, 5, 4];

// Сравнить два массива (с точностью до свапа двух чисел)

function isEqual(first, second) {
  const withSwipe = (first, second, swiped) => {
    const { length } = first;
    const problemNumbs = [];

    for (let i = 0; i < length; i += 1) {
      if (first[i] !== second[i]) {
        problemNumbs.push({ val: first[i], index: i });
      }
    }

    if (problemNumbs.length === 0) {
      return true;
    } else if (problemNumbs.length === 2) {
      if (swiped) {
        return false;
      }
      const { val: firstVal, index: firstIndex } = problemNumbs[0];
      const { val: secondVal, index: secondIndex } = problemNumbs[1];
      [first[firstIndex], first[secondIndex]] =
      [secondVal, firstVal];
      return withSwipe(first, second, true);
    } return false;
  };

  return withSwipe(first, second, false);
}

console.log(isEqual(first, second));
