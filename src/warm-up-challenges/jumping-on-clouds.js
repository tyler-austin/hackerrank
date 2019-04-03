const jumpingOnClouds = c => {
  let jumps = 0;
  for (let i = 1; i < c.length; i++) {
    if (c[i + 1] === 0) {
      jumps++;
      i++;
    } else {
      jumps++;
    }
  }
  return jumps;
};

export default jumpingOnClouds;
