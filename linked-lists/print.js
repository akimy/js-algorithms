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

const print = (list) => {
  while (true) {
    console.log(list.value); // 3 2 1 0
    if (list.next === null) {
      break;
    }
    list = list.next;
  }
};

print(list);
