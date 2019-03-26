import hourglassSum from './hourglass-sum';

test('largest hourglass', () => {
  // eslint-disable-next-line prettier/prettier
  const arr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
  ];
  expect(hourglassSum(arr)).toBe(19);
});
