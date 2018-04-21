const isNumberPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isNumberPrime(29)); // true
console.log(isNumberPrime(14)); // false

const getPrimeNumbersLimited = (number) => { // Решето эратосфена
  const arr = [];
  const numbersSet = new Set(Array(number).fill().map((el, i) => i + 1));
  numbersSet.delete(1);
  while (numbersSet.size > 0) {
    const current = numbersSet.values().next().value;
    numbersSet.delete(current);
    arr.push(current);
    numbersSet.forEach((el) => {
      if (el % current === 0) {
        numbersSet.delete(el);
      }
    });
  }

  return arr;
};

console.log(getPrimeNumbersLimited(20)); // 2, 3, 5, 7, 11, 13, 17, 19

