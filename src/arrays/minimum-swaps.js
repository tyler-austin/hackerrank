const minimumSwaps = arr => {
  let swaps = 0;
  let temp = null;
  for (let i = 0; i < arr.length - 1; i++) {
    while (arr[i] !== i + 1) {
      temp = arr[arr[i] - 1];
      arr[arr[i] - 1] = arr[i];
      arr[i] = temp;
      swaps++;
    }
  }
  return swaps;
};

export default minimumSwaps;
