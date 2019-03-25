import countingValleys from './counting-valleys';

test('counts valleys in a string', () => {
  const n = parseInt(8, 10);
  const s = 'UDDDUDUU';
  expect(countingValleys(n, s)).toBe(1);
});
