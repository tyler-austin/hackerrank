import arrayManipulation from './array-manipulation';

test('array manipulation 1', () => {
  // eslint-disable-next-line prettier/prettier
  const n = 5;
  // eslint-disable-next-line prettier/prettier
  const queries = [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100]
  ];
  expect(arrayManipulation(n, queries)).toBe(200);
});

test('array manipulation 2', () => {
  // eslint-disable-next-line prettier/prettier
  const n = 10;
  // eslint-disable-next-line prettier/prettier
  const queries = [
    [1, 5, 3],
    [4, 8, 7],
    [6, 9, 1]
  ];
  expect(arrayManipulation(n, queries)).toBe(10);
});

test('array manipulation 3', () => {
  // eslint-disable-next-line prettier/prettier
  const n = 10;
  // eslint-disable-next-line prettier/prettier
  const queries = [
    [2, 6, 8],
    [3, 5, 7],
    [1, 8, 1],
    [5, 9, 15],
  ];
  expect(arrayManipulation(n, queries)).toBe(31);
});
