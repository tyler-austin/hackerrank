const freqQuery = queries => {
  const result = [];
  const lookup = {};
  const freqs = {};
  for (let i = 0; i < queries.length; i++) {
    const [op, data] = queries[i];
    const freq = lookup.hasOwnProperty(data) ? lookup[data] : 0;
    if (typeof freqs[freq] === 'undefined') freqs[freq] = new Set();
    if (op === 1) {
      lookup[data] = freq + 1;
      freqs[freq].delete(data);
      if (typeof freqs[freq + 1] === 'undefined') freqs[freq + 1] = new Set();
      freqs[freq + 1].add(data);
    } else if (op === 2) {
      lookup[data] = Math.max(0, freq - 1);
      freqs[freq].delete(data);
      if (typeof freqs[freq - 1] === 'undefined') freqs[freq - 1] = new Set();
      freqs[freq - 1].add(data);
    } else if (typeof freqs[data] === 'undefined') result.push(0);
    else result.push(freqs[data].size > 0 ? 1 : 0);
  }
  return result;
};

export default freqQuery;
