const counterValue = {
    value: 0,
    increment(){
        this.value += 1;
    },
    decrement(){
        this.value -= 1;
    },
}

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementtBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

decrementBtn.addEventListener('click', () => {
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
});

incrementtBtn.addEventListener('click', () => {
    counterValue.increment();
    valueEl.textContent = counterValue.value;
});