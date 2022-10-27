let counterValue = 0;

const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const spanEl = document.querySelector("#value");

btnIncrement.addEventListener('click', () => {
    counterValue += 1;
    document.getElementById('value').textContent = counterValue;
});
btnDecrement.addEventListener('click', () => {
    counterValue -= 1;
    document.getElementById('value').textContent = counterValue;
});

