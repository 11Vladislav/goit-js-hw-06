const changeColor = document.querySelector('.change-color');
changeColor.addEventListener('click', newColor);

function newColor() {
  const spanColor = getRandomHexColor();
  document.body.style.backgroundColor = spanColor;
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
