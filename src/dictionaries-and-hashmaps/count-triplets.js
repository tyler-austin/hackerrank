const countTriplets = (arr, r) => {
  const map2 = {};
  const map3 = {};
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const k = parseInt(arr[i], 10);
    if (!map2.hasOwnProperty(k)) map2[k] = 0;
    if (!map3.hasOwnProperty(k)) map3[k] = 0;
    if (!map2.hasOwnProperty(k * r)) map2[k * r] = 0;
    if (!map3.hasOwnProperty(k * r)) map3[k * r] = 0;
    count += map3[k];
    map3[k * r] += map2[k];
    map2[k * r] += 1;
  }
  return count;
};

export default countTriplets;
