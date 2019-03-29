const getCCBtnId = id => {
  switch (id) {
    case 6:
      return 3;
    case 9:
      return 6;
    case 8:
    case 7:
      return id + 1;
    case 4:
      return 7;
    case 1:
      return 4;
    case 2:
    case 3:
      return id - 1;
    default:
      return 5;
  }
};

const main = () => {
  const btns = document.querySelector('#btns');
  for (let i = 1; i < 10; i++) {
    const newBtn = document.createElement('button');
    newBtn.setAttribute('id', `btn${i}`);
    newBtn.setAttribute('class', 'btn');
    newBtn.innerHTML = `${i}`;
    btns.appendChild(newBtn);
  }
  const btn5 = document.querySelector('#btn5');
  btn5.onclick = () => {
    const btnArr = [];
    for (let i = 9; i > 0; i--) {
      if (i !== 5) {
        const btn = document.querySelector(`#btn${i}`);
        let id = btn.getAttribute('id');
        id = parseInt(id.charAt(id.length - 1), 0);
        const ccBtnId = getCCBtnId(id);
        const ccBtn = document.querySelector(`#btn${ccBtnId}`);
        btnArr.push([btn, ccBtn.innerHTML]);
      }
    }
    btnArr.forEach(item => {
      const [el, text] = item;
      el.innerHTML = text;
    });
  };
};

export default main;
