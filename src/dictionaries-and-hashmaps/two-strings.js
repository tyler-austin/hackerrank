const twoStrings = (s1, s2) => {
  const arr1 = Array.from(new Set(s1.split('')));
  const arr2 = Array.from(new Set(s2.split('')));
  for (let i = Math.max(0, arr1.length - 1); i >= 0; i--) {
    if (arr2.indexOf(arr1[i]) !== -1) return `YES`;
  }
  return `NO`;
};

export default twoStrings;
