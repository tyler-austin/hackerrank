import repeatedString from './repeated-string';

test(`there should be 7 a's in the first 10 characters`, () => {
  const n = parseInt(10, 10);
  const s = 'aba';
  expect(repeatedString(s, n)).toBe(7);
});

test(`there should be 1000000000000 a's in the first 1000000000000 characters`, () => {
  const n = parseInt(1000000000000, 10);
  const s = 'a';
  expect(repeatedString(s, n)).toBe(1000000000000);
});
