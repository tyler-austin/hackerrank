import maximumToys from './maximum-toys';

test(`maximum number of toys for $50`, () => {
  const prices = [1, 12, 5, 111, 200, 1000, 10];
  const k = 50;
  expect(maximumToys(prices, k)).toBe(4);
});