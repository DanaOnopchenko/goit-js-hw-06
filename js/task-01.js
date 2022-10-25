const ulElem = document.querySelector('#categories');
// console.log(ulElem)
const itemElem = ulElem.querySelectorAll('.item');
// console.log(itemElem)
console.log(`Number of categories: ${itemElem.length}`);
for (let i = 0; i < itemElem.length; i += 1) {
    
    console.log(`Category: ${itemElem[i].querySelector('h2').textContent}`);
    console.log(`Elements: ${itemElem[i].querySelectorAll("li").length}`)
 }
