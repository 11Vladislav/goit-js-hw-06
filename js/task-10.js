const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

createBtn.addEventListener('click', () => {
  const amount = document.querySelector('input').value;
  createBoxes(amount);
  
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});

const createBoxes = (amount) => {
  let size = 30;
  for (let i = 0; i <= amount; i+=1) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    document.querySelector('#boxes').appendChild(box);
    size += 10;
  }
  
} 

const destroyBoxes = () => {  
  const boxes = document.querySelector('#boxes');
  boxes.innerHTML = '';
}

const getRandomHexColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i+=1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
