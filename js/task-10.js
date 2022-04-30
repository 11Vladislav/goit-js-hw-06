const refs = {
  inputValue: document.querySelector("input"), // поле ввода
  createBtn: document.querySelector("[data-create]"), // кнопка создать
  destroyBtn: document.querySelector("[data-destroy]"), // кнопка уничтожить
  divBox: document.querySelector("#boxes"), // блок для контейнера
};

refs.createBtn.addEventListener("click", (event) => { // кнопка создать
  createBox(event); // вызов функции создания контейнера
});

let firstDivWidth = 30; // переменная для ширины первого контейнера
let firstDivHeight = 30; // переменная для высоты первого контейнера
function createBox(amount) { // функция создания контейнера
  amount = refs.inputValue.value; // переменная для количества контейнеров

  for (let i = 0; i <= amount; i+=1) {   // цикл для создания контейнеров
    const newDiv = document.createElement("div"); // создание нового контейнера
    if (firstDivWidth > newDiv.style.width) { // если ширина первого контейнера больше ширины нового контейнера
      firstDivWidth += 10;  // увеличиваем ширину первого контейнера на 10
      firstDivHeight += 10; // увеличиваем высоту первого контейнера на 10
    } else { // если ширина первого контейнера меньше ширины нового контейнера
      firstDivWidth = 30; // устанавливаем ширину первого контейнера на 30
      firstDivHeight = 30; // устанавливаем высоту первого контейнера на 30
      const firstDiv = document.createElement("div"); // создание нового контейнера
      firstDiv.style.width = `${firstDivWidth}px`; // установка ширины первого контейнера
      firstDiv.style.height = `${firstDivHeight}px`; // установка высоты первого контейнера
      firstDiv.style.backgroundColor = getRandomHexColor(); // установка цвета первого контейнера
      refs.divBox.append(firstDiv); // добавление первого контейнера в блок
    }
    newDiv.style.width = `${firstDivWidth - 10}px`; // установка ширины нового контейнера
    newDiv.style.height = `${firstDivHeight - 10}px`; // установка высоты нового контейнера
    newDiv.style.backgroundColor = getRandomHexColor(); // установка цвета нового контейнера
    refs.divBox.append(newDiv); // добавление нового контейнера в блок

  }
}

refs.destroyBtn.addEventListener("click", () => { // кнопка уничтожить
  for (let i = 0; i < refs.divBox.children.length; i+=1) { // цикл для уничтожения контейнеров
    refs.divBox.children[i].remove(); // удаление контейнера
    [i] = [i - 1]; // уменьшение индекса на 1
  }
  firstDivHeight = 30; // установка высоты первого контейнера на 30
  firstDivWidth = 30; // установка ширины первого контейнера на 30
});

function getRandomHexColor() { // функция генерации цвета
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`; // возвращает случайный цвет
}