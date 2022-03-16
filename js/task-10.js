const boxEl = document.getElementById('boxes');
const inputNum = document.querySelector('input');
const createBox = document.querySelector('[data-create]');
const destroyBox = document.querySelector('[data-destroy]');

createBox.addEventListener('click', createBoxBtn);
destroyBox.addEventListener('click', destroyBoxBtn);

function createBoxBtn() {
  createBoxes(Number(inputNum.value));
  inputNum.value = '';
}

function destroyBoxBtn() {
  boxEl.textContent = '';
  inputNum.value = '';
}

function createBoxes(amount) {
  const boxArray = [];
  let size = 30;

  for (let i = 0; i < amount; i += 1){
    const divEl = document.createElement('div');
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = `${size}px`;
    divEl.style.height = `${size}px`;
    boxArray.push(divEl);
    size += 10;
  }
   boxEl.append(...boxArray);
  }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
