const name = document.querySelector('#name');
const password = document.querySelector('#password');
const form = document.querySelector('#form');
const error = document.querySelector('#error');

form.addEventListener('submit', (e) => {
    if(name.length < 4) {
        error.innerText = 'I hate you!'
    }
    e.preventDefault();
})