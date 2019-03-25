const countingValleys = (n, s) => {
  let elevation = 0;
  let numValleys = 0;
  for (let i = 0; i < s.length; i++) {
    const step = s[i];
    const newElev = step === 'U' ? ++elevation : --elevation;
    if (step === 'U' && newElev === 0) ++numValleys;
  }
  return numValleys;
};

export default countingValleys;
