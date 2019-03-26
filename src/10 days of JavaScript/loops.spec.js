import vowelsAndConsonants from './loops';

test(`vowels and consonants 'javascriptloops'`, () => {
  // eslint-disable-next-line prettier/prettier
  const s = 'javascriptloops';
  expect(vowelsAndConsonants(s)).toBe('aaioojvscrptlps');
});
