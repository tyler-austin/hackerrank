const freqQuery = queries => {
  const result = [];
  const lookup = {};
  const freqs = {};
  // https://www.hackerrank.com/challenges/frequency-queries/forum/comments/476734
  for (let i = 0; i < queries.length; i++) {
    const [op, data] = queries[i];
    const freq = lookup.hasOwnProperty(data) ? lookup[data] : 0;
    if (op === 1) {
      lookup[data] = freq + 1;
      
      freq.delete(freq);
      freq.add(freq + 1);
    } else if (op === 2) {
      if (lookup[data] === 1) delete lookup[data];
      else if (lookup[data] > 1) lookup[data] -= 1;

    } else {
      // TODO: see if freqs Set contains data
      result.push(Object.values(lookup).indexOf(data) > -1 ? 1 : 0);
    }
  }
  return result;
};

export default freqQuery;
