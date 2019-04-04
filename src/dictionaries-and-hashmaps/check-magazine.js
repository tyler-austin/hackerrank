const checkMagazine = (magazine, note) => {
  for (let i = note.length - 1; i >= 0; i--) {
    const noteWord = note[i];
    const magazineWordIndex = magazine.indexOf(noteWord);
    if (magazineWordIndex !== -1) magazine.splice(magazineWordIndex, 1);
    else return `No`;
  }
  return `Yes`;
};

export default checkMagazine;
