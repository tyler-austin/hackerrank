const quickSort = (array) => {
  if (array.length < 2) return array
  const chosenIndex = array.length - 1;
  const chosen = array[chosenIndex];
  const a = [];
  const b = [];
  for (let i = 0; i < chosenIndex; i++) {
    const temp = array[i];
    temp < chosen ? a.push(temp) : b.push(temp);
  }
  const output = [...quickSort(a), chosen, ...quickSort(b)];
  return output;
}

const maximumToys = (prices, k) => {
  let count = 0;
  let sum = 0;
  prices = quickSort(prices);
  for (let i = 0; i < prices.length; i++) {
    sum += prices[i];
    if (sum > k) return count;
    else if (sum === k) return count++
    count++;
  }
}

export default maximumToys;