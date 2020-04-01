const inputField = document.createElement('textarea');
document.querySelector('body').appendChild(inputField);
inputField.classList.add('input-field');

const keysWrapper = document.createElement('div');
document.querySelector('body').appendChild(keysWrapper);
inputField.insertAdjacentElement("afterend", keysWrapper);
keysWrapper.classList.add('keys-wrapper');

const changeLanguage = document.createElement('div');
document.querySelector('body').appendChild(changeLanguage);
changeLanguage.innerHTML = 'Use Ctrl+Shift combination to change lang';
changeLanguage.classList.add('change-language');

for (let i = 65; i > 0; i--) {
    const key = document.createElement('div');
    keysWrapper.appendChild(key);
    key.classList.add('keys');
}

const one = document.querySelector('.keys:nth-child(1)');

one.addEventListener('click', function(event) {
    inputField.innerHTML += 'ё';
    console.log('123');
    // if (event.code == 'Backquote') {inputField.innerHTML = 'ё'};
});


