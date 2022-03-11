const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientEl = document.querySelector('#ingredients');

const itemElements = AddElements(ingredients);

ingredientEl.append(...itemElements);

function AddElements(elemList) {
  return elemList.map((elem) => {
    const itemElem = document.createElement('li');
    itemElem.textContent = elem;
    itemElem.classList.add('item');
    return itemElem;
  }
  )}

