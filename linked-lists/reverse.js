const list = {
  value: 3,
  next: {
    value: 2,
    next: {
      value: 1,
      next: {
        next: null,
        value: 0,
      },
    },
  },
};

const reverse = (list, tail) => {
  if (list.next === null) {
    return { value: list.value, next: tail };
  }
  const newTail = { value: list.value, next: tail };
  return reverse(list.next, newTail);
};

const reversedList = reverse(list, null);

console.log(JSON.stringify(reversedList, '', 2));
