import rotLeft from './rotate-left';

test('minimum bribes 1 2 3 4 5', () => {
  // eslint-disable-next-line prettier/prettier
  const a = [1, 2, 3, 4, 5];
  const d = 4;
  expect(rotLeft(a, d)).toEqual([5, 1, 2, 3, 4]);
});
