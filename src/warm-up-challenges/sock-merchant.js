const sockMerchant = (n, ar) => {
  let pairs = 0;
  const colorOccurMap = new Map();
  for (let i = 0; i < n; i++) {
    const color = ar[i];
    if (!colorOccurMap.has(color)) colorOccurMap.set(color, 1);
    else {
      const mapColorVal = colorOccurMap.get(color);
      colorOccurMap.set(color, mapColorVal + 1);
    }
  }
  const colors = colorOccurMap.values();
  let color = colors.next();
  while (!color.done) {
    pairs += Math.floor(color.value / 2);
    color = colors.next();
  }
  return pairs;
};

const main = __ => {
  const n = parseInt(9);
  const ar = '10 20 20 10 10 30 50 10 20'.split(' ').map(arTemp => parseInt(arTemp, 10));
  const result = sockMerchant(n, ar);
  console.log('Result:', result);
};

main();
