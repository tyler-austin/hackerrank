const res = document.querySelector('#res');
const btn0 = document.querySelector('#btn0');
const btn1 = document.querySelector('#btn1');
const btnClr = document.querySelector('#btnClr');
const btnEql = document.querySelector('#btnEql');
const btnSum = document.querySelector('#btnSum');
const btnSub = document.querySelector('#btnSub');
const btnMul = document.querySelector('#btnMul');
const btnDiv = document.querySelector('#btnDiv');

btn0.onclick = () => {
  res.innerHTML += `0`;
};

btn1.onclick = () => {
  res.innerHTML += `1`;
};

btnClr.onclick = () => {
  res.innerHTML = ``;
};

const operation = (o, a, b) => {
  switch (o) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return parseInt(a / b, 0);
    default:
      throw new TypeError(`Invalid Operator: ${o}`);
  }
};

btnEql.onclick = () => {
  const ctx = res.innerHTML;
  const match = /[+\-*/]/.exec(ctx);
  if (match) {
    const operand1 = parseInt(ctx.substring(0, match.index), 2);
    const operator = ctx.charAt(match.index);
    const operand2 = parseInt(ctx.substring(match.index + 1, ctx.length), 2);
    res.innerHTML = operation(operator, operand1, operand2).toString(2);
  } else {
    throw new EvalError('No Operator Present in Equation');
  }
};

btnSum.onclick = () => {
  res.innerHTML += `+`;
};

btnSub.onclick = () => {
  res.innerHTML += `-`;
};

btnMul.onclick = () => {
  res.innerHTML += `*`;
};

btnDiv.onclick = () => {
  res.innerHTML += `/`;
};
