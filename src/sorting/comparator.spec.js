import comparator from './comparator';

test(`comparator 1`, () => {
  const inArr = [['amy', 100], ['david', 100], ['heraldo', 50], ['aakansha', 75], ['aleksa', 150]];
  const outArr = [['aleksa', 150], ['amy', 100], ['david', 100], ['aakansha', 75], ['heraldo', 50]];
  expect(comparator(inArr)).toEqual(outArr);
});
