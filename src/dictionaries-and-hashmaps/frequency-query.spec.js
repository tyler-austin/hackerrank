import freqQuery from './frequency-query';

test('frequency query 1', () => {
  // eslint-disable-next-line prettier/prettier
  const query = [
    [1, 5],
    [1, 6],
    [3, 2],
    [1, 10],
    [1, 10],
    [1, 6],
    [2, 5],
    [3, 2]
  ];
  expect(freqQuery(query)).toEqual([0, 1]);
});

test('frequency query 2', () => {
  // eslint-disable-next-line prettier/prettier
  const query = [
    [3, 4],
    [2, 1003],
    [1, 16],
    [3, 1]
  ];
  expect(freqQuery(query)).toEqual([0, 1]);
});

test('frequency query 3', () => {
  // eslint-disable-next-line prettier/prettier
  const query = [
    [1, 3],
    [2, 3],
    [3, 2],
    [1, 4],
    [1, 5],
    [1, 5],
    [1, 4],
    [3, 2],
    [2, 4],
    [3, 2]
  ];
  expect(freqQuery(query)).toEqual([0, 1, 1]);
});
