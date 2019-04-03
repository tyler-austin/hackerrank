import checkMagazine from './check-magazine';

test('check magazine 1', () => {
  const magazine = ['give', 'me', 'one', 'grand', 'today', 'night'];
  const note = ['give', 'one', 'grand', 'today'];
  expect(checkMagazine(magazine, note)).toEqual('Yes');
});

test('check magazine 2', () => {
  const magazine = ['two', 'times', 'three', 'is', 'not', 'four'];
  const note = ['two', 'times', 'two', 'is', 'four'];
  expect(checkMagazine(magazine, note)).toEqual('No');
});

test('check magazine 3', () => {
  const magazine = ['ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts'];
  const note = ['ive', 'got', 'some', 'coconuts'];
  expect(checkMagazine(magazine, note)).toEqual('No');
});
