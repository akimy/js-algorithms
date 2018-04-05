/**
 * Возвращает таблицу префиксов
 * @param {String} string
 */
function prefix(string) {
  // Массив длинной в строку (needle) заполненный нулями
  const prefixTable = Array(string.length).fill(0);

  let k; // первый элемент 0 - не имеет префикса
  for (let i = 1; i < string.length; i += 1) {
    k = prefixTable[i - 1];
    while (k > 0 && string[k] !== string[i]) {
      k = prefixTable[k - 1];
    }
    if (string[k] === string[i]) {
      k += 1;
    }
    prefixTable[i] = k;
  }

  return prefixTable;
}

function kmp(string, haystack) {
  let index = -1;
  const prefixTable = prefix(string);
  let k = 0;
  for (let i = 0; i < haystack.length; i += 1) {
    while (k > 0 && string[k] !== haystack[i]) {
      k = prefixTable[k - 1];
    }
    if (string[k] === haystack[i]) {
      k += 1;
    }
    if (k === string.length) {
      index = i - string.length + 1;
      break;
    }
  }
  return index;
}

const first = 'Привет мир'.indexOf('мир');
const second = kmp('мир', 'Привет мир');
console.log(first === second);
