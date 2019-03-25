// Inspiration: https://gist.github.com/victornpb/7736865
// https://medium.com/@mannycodes/how-to-solve-the-repeated-string-challenge-759b4ea34242#6271

const repeatedString = (s, n) => {
  let count = 0;
  if (s.length === 0) return count;
  if (s.length === 1) {
    if (s === 'a') return n;
    return count;
  }
  count = parseInt(n / s.length, 10) * s.split('').filter(i => i === 'a').length;
  // eslint-disable-next-line prettier/prettier
  return count + s.slice(0, n % s.length).split('').filter(i => i === 'a').length;
};

export default repeatedString;
