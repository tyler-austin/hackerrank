const freqQuery = queries => {
  const result = [];
  const lookup = {};
  const freqs = new Set();
  // TODO: maintain set of freqs
  // https://www.hackerrank.com/challenges/frequency-queries/forum/comments/476734
  for (let i = 0; i < queries.length; i++) {
    const [op, data] = queries[i];
    if (op === 1) {
      if (lookup.hasOwnProperty(data)) lookup[data] += 1;
      else {
        lookup[data] = 1;
      }
    } else if (op === 2) {
      if (lookup.hasOwnProperty(data) && lookup[data] === 1) delete lookup[data];
      else if (lookup.hasOwnProperty(data) && lookup[data] > 1) lookup[data] -= 1;
    } else {
      // TODO: see if freqs Set contains data
      result.push(Object.values(lookup).indexOf(data) > -1 ? 1 : 0);
    }
  }
  return result;
};

export default freqQuery;
