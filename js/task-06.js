const inputField = document.querySelector('#validation-input');
inputField.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length == inputField.getAttribute('data-length')) {
        inputField.classList.remove('invalid');
        inputField.classList.add('valid');
        return;
    }
    
    inputField.classList.remove('valid');
    inputField.classList.add('invalid');
}