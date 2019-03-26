const vowelsAndConsonants = s => {
  let vowels = '';
  let consonants = '';
  const vowelsArr = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < s.length; i++) {
    if (vowelsArr.includes(s[i])) vowels += s[i];
    else consonants += s[i];
  }
  return vowels + consonants;
};

// eslint-disable-next-line no-unused-vars
const vowelsAndConsonantsHackerRank = s => {
  const vowelsArr = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < s.length; i++) {
    if (vowelsArr.includes(s[i])) console.log(s[i]);
  }
  for (let i = 0; i < s.length; i++) {
    if (!vowelsArr.includes(s[i])) console.log(s[i]);
  }
};

export default vowelsAndConsonants;
