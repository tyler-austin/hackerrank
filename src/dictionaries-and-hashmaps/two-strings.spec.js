import twoStrings from './two-strings';

test('two strings 1', () => {
  const s1 = 'hello';
  const s2 = 'world';
  expect(twoStrings(s1, s2)).toEqual('YES');
});

test('two strings 2', () => {
  const s1 = 'hi';
  const s2 = 'world';
  expect(twoStrings(s1, s2)).toEqual('NO');
});

// test('two strings 3', () => {
//   const s1 = '';
//   const s2 = '';
//   expect(twoStrings(s1, s2)).toEqual('YES');
// });
