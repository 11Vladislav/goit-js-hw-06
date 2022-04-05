const createBtn = document.querySelector('[data-create]'); 
const destroyBtn = document.querySelector('[data-destroy]'); 
const input = document.querySelector('input'); 
const btn = document.querySelector('button'); 

createBtn.addEventListener('click', () => { 
  const amount = input.value; 
  createBoxes(amount); 
});

const destroyBoxes = () => { 
  const box = document.querySelector('#boxes'); 
  box.innerHTML = ''; 
};

destroyBtn.addEventListener('click', destroyBoxes); 

const createBoxes = (amount) => {
  let size = 30;
  const box = document.querySelector('#boxes');
  for (let i = 0; i <= amount; i += 1) {
    
  
    const div = document.createElement('div');
    div.classList.add('box');
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    box.appendChild(div);
    size += 10;
 
  }
  console.log(box);
};

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;


