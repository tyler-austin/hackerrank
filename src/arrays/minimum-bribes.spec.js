import minimumBribes from './minimum-bribes';

test('minimum bribes 2 1 5 3 4', () => {
  // eslint-disable-next-line prettier/prettier
  const arr = [2, 1, 5, 3, 4];
  expect(minimumBribes(arr)).toBe(3);
});

test('minimum bribes 2 5 1 3 4', () => {
  // eslint-disable-next-line prettier/prettier
  const arr = [2, 5, 1, 3, 4];
  expect(minimumBribes(arr)).toBe('Too chaotic');
});
