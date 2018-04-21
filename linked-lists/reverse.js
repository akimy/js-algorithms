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

const printLinkedList = (list) => {
  const arr = [];
  while (list.next !== null) {
    arr.push(list.value);
    list = list.next;
  }
  arr.push(list.value);
  return arr.join(' ');
};

console.log(printLinkedList(list));

const reverseLinkedList = (list) => {
  const iterator = (list, tail) => {
    const newTail = { value: list.value, next: tail };
    if (list.next === null) {
      return newTail;
    }

    return iterator(list.next, newTail);
  };

  return iterator(list, null);
};
const reversedList = reverseLinkedList(list, null);

console.log(printLinkedList(reversedList));
