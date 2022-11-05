function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRefs = document.querySelector("body");
const spanRefs = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");
// console.log(btnChangeColor)
btnChangeColor.addEventListener('click', onRandomColor);

function onRandomColor() { 
  bodyRefs.style.backgroundColor = getRandomHexColor();
  spanRefs.textContent = bodyRefs.style.backgroundColor;
}