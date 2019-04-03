const arrayManipulation = (n, queries) => {
  const arr = new Array(n).fill(0);
  let max = 0;
  for (let i = queries.length - 1; i >= 0; i--) {
    const [a, b, k] = queries[i];
    arr[a - 1] += k;
    if (b < arr.length) {
      arr[b] -= k;
    }
  }
  for (let j = 1; j < n; j++) {
    arr[j] += arr[j - 1];
  }
  for (let k = arr.length - 1; k >= 0; k--) {
    max = Math.max(max, arr[k]);
  }
  return max;
};

export default arrayManipulation;
