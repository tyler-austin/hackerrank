const hourglassSum = arr => {
  const sums = [];
  const [height, width] = [arr.length, arr[0].length];
  for (let y = 0; y < height - 2; y++) {
    for (let x = 0; x < width - 2; x++) {
      const top = arr[y].slice(x, x + 3);
      const mid = arr[y + 1].slice(x + 1, x + 2);
      const btm = arr[y + 2].slice(x, x + 3);
      const sum = (total, num) => total + num;
      const total = [...top, ...mid, ...btm].reduce(sum, 0);
      sums.push(total);
    }
  }
  return Math.max(...sums);
};

export default hourglassSum;
