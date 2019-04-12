class Player {
  constructor(name, score) {
    this.name = name;
    this.score = score
  }
  output() {
    return [this.name, this.score];
  }
}

const compare = (l, r) => {
  if (l.score < r.score) return true;
  if (l.score > r.score) return false;
  if (l.name < r.name) return false;
  if (l.name > r.name) return true;
  return false;
}

const quickSort = array => {
  if (array.length < 2) return array
  const chosenIndex  = array.length - 1;
  const chosen  = array[chosenIndex ];
  const a = [];
  const b = [];
  for (let i = 0; i < chosenIndex ; i++) {
    const temp = array[i];
    compare(temp, chosen) ? a.push(temp) : b.push(temp);
  }
  // decreasing
  const output = [...quickSort(b), chosen , ...quickSort(a)];
  return output;
}

const comparator = arr => {
  const output = [];
  let players = [];
  for (let i = 0; i < arr.length; i++) {
    players.push(new Player(...arr[i]));
  }
  players = quickSort(players);
  for (let i = 0; i < players.length; i++) {
    output.push(players[i].output());
  }
  return output;
}

export default comparator;