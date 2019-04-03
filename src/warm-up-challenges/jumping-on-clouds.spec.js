import jumpingOnClouds from './jumping-on-clouds';

test('jumping on clouds 1', () => {
  const c = [0, 0, 1, 0, 0, 1, 0];
  expect(jumpingOnClouds(c)).toBe(4);
});

test('jumping on clouds 2', () => {
  const c = [0, 0, 0, 0, 1, 0];
  expect(jumpingOnClouds(c)).toBe(3);
});
