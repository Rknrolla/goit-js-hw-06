const counterEl = document.getElementById('counter');
const decrementBtn = counterEl.querySelector('[data-action="decrement"]');
const incrementBtn = counterEl.querySelector('[data-action="increment"]');
const valueEl = counterEl.querySelector('#value');

let counterValue = 0;

decrementBtn.addEventListener('click', () => {
  counterValue--;
  valueEl.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
  counterValue++;
  valueEl.textContent = counterValue;
});