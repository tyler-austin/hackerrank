import bubbleSort from './bubble-sort';

test(`bubble sort 1`, () => {
  const a = [1, 2, 3];
  expect(bubbleSort(a)).toBe(0);
});

test(`bubble sort 2`, () => {
  const a = [3, 2, 1];
  expect(bubbleSort(a)).toBe(3);
});

test(`bubble sort 2`, () => {
  const a = [6, 4, 1];
  expect(bubbleSort(a)).toBe(3);
});
