import sockMerchant from './sock-merchant';

test('there should be 3 pairs of socks', () => {
  const n = parseInt(9, 10);
  const ar = '10 20 20 10 10 30 50 10 20'.split(' ').map(arTemp => parseInt(arTemp, 10));
  expect(sockMerchant(n, ar)).toBe(3);
});
