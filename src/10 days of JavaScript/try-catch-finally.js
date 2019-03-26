const reverseString = s => {
  try {
    s = s.split('');
    s = s.reverse().join('');
    console.log(s);
  } catch (e) {
    console.log(e.message);
    console.log(s);
  }
};

export default reverseString;
