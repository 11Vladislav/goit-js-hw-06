const fontSizeControl = document.getElementById('font-size-control');
const textSize = document.getElementById('text');

fontSizeControl.addEventListener('input', sizeChange);

function sizeChange(event) {
    textSize.style.fontSize = `${event.currentTarget.value}px`;
}
textSize.style.fontSize = `${fontSizeControl.value}px`;