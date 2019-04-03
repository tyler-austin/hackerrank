const rotLeft = (a, d) => {
  for (let i = d; i > 0; i--) {
    a.push(a.shift());
  }
  return a;
};

export default rotLeft;
