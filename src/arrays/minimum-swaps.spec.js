import minimumSwaps from './minimum-swaps';

test('minimum bribes 4 3 1 2', () => {
  // eslint-disable-next-line prettier/prettier
  const arr = [4, 3, 1, 2];
  expect(minimumSwaps(arr)).toBe(3);
});

test('minimum bribes 2 3 4 1 5', () => {
  // eslint-disable-next-line prettier/prettier
  const arr = [2, 3, 4, 1, 5];
  expect(minimumSwaps(arr)).toBe(3);
});

test('minimum bribes 1 3 5 2 4 6 7', () => {
  // eslint-disable-next-line prettier/prettier
  const arr = [1, 3, 5, 2, 4, 6, 7];
  expect(minimumSwaps(arr)).toBe(3);
});
