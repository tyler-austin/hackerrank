const swap = (a, i, j) => {
  [a[i], a[j]] = [a[j], a[i]];
};

const bubbleSort = a => {
  let count = 0;
  let isSorted = false;
  let lastUnsorted = a.length - 1;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < lastUnsorted; i++) {
      if (a[i] > a[i + 1]) {
        swap(a, i, i + 1);
        count++;
        isSorted = false;
      }
    }
    lastUnsorted--;
  }
  return count;
  // const message = `Array is sorted in ${count} swaps.
  // First Element: ${a[0]}
  // Last Element: ${a[a.length - 1]}`;
  // console.log(message);
};

export default bubbleSort;
