// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
  // TODO: check test 2. You must check how many times something occurs. Use pop?
  const m = new Set([...magazine]);
  const n = new Set([...note]);
  const difference = new Set([...n].filter(x => !m.has(x)));
  console.log('diff', difference);
  return difference.size === 0 ? 'Yes' : 'No';
}

export default checkMagazine;
