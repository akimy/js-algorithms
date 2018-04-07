function findAntiNumbers(a) {
  const map = new Map();

  for (let i = 0; i < a.length; i++) {
    if (map.get(-a[i]) === a[i]) {
      console.log(`Founded ${a[i]}, ${-a[i]}`);
      return true;
    }
    map.set(a[i], -a[i]);
  }
  return false;
}

const array = [...Array(10000).keys()].sort(e => Math.random()).concat([-3456]);
findAntiNumbers(array);
