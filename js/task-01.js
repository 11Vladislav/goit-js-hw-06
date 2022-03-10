const categoryList = document.querySelector('ul#categories');
console.log(`Number of categories: ${categoryList.children.length}`);

for (const elem of categoryList.children) {
    const categoryName = elem.firstElementChild.textContent;
    console.log(categoryName);
    const categoryElem = elem.lastElementChild;
    console.log(`Elements: ${categoryElem.children.length}`);
 }

