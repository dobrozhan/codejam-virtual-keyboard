let russianBoard = {
    0: 'ё',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: '0',
    11: '-',
    12: '=',
    13: 'backspace',
    14: 'tab',
    15: 'й',
    16: 'ц',
    17: 'у',
    18: 'к',
    19: 'е',
    20: 'н',
    21: 'г',
    22: 'ш',
    23: 'щ',
    24: 'з',
    25: 'х',
    26: 'ъ',
    27: '\\',
    28: 'del',
    29: 'caps lock',
    30: 'ф',
    31: 'ы',
    32: 'в',
    33: 'а',
    34: 'п',
    35: 'р',
    36: 'о',
    37: 'л',
    38: 'д',
    39: 'ж',
    40: 'э',
    41: 'enter',
    42: 'shift',
    43: '\\',
    44: 'я',
    45: 'ч',
    46: 'с',
    47: 'м',
    48: 'и',
    49: 'т',
    50: 'ь',
    51: 'б',
    52: 'ю',
    53: '/',
    54: '⇑',
    55: 'shift',
    56: 'ctrl',
    57: 'win',
    58: 'alt',
    59: '&nbsp',
    60: 'alt',
    61: 'ctrl',
    62: '⇐',
    63: '⇓',
    64: '⇒'
};

let russianBoardShifted = {
    0: 'ё',
    1: '!',
    2: '"',
    3: '№',
    4: ';',
    5: '%',
    6: ':',
    7: '?',
    8: '*',
    9: '(',
    10: ')',
    11: '_',
    12: '+',
    13: 'backspace',
    14: 'tab',
    15: 'й',
    16: 'ц',
    17: 'у',
    18: 'к',
    19: 'е',
    20: 'н',
    21: 'г',
    22: 'ш',
    23: 'щ',
    24: 'з',
    25: 'х',
    26: 'ъ',
    27: '/',
    28: 'del',
    29: 'caps lock',
    30: 'ф',
    31: 'ы',
    32: 'в',
    33: 'а',
    34: 'п',
    35: 'р',
    36: 'о',
    37: 'л',
    38: 'д',
    39: 'ж',
    40: 'э',
    41: 'enter',
    42: 'shift',
    43: '/',
    44: 'я',
    45: 'ч',
    46: 'с',
    47: 'м',
    48: 'и',
    49: 'т',
    50: 'ь',
    51: 'б',
    52: 'ю',
    53: '.',
    54: '⇑',
    55: 'shift',
    56: 'ctrl',
    57: 'win',
    58: 'alt',
    59: '&nbsp',
    60: 'alt',
    61: 'ctrl',
    62: '⇐',
    63: '⇓',
    64: '⇒'
};

let englishBoard = {
    0: '`',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: '0',
    11: '-',
    12: '=',
    13: 'backspace',
    14: 'tab',
    15: 'q',
    16: 'w',
    17: 'e',
    18: 'r',
    19: 't',
    20: 'y',
    21: 'u',
    22: 'i',
    23: 'o',
    24: 'p',
    25: '[',
    26: ']',
    27: '\\',
    28: 'del',
    29: 'caps lock',
    30: 'a',
    31: 's',
    32: 'd',
    33: 'f',
    34: 'g',
    35: 'h',
    36: 'j',
    37: 'k',
    38: 'l',
    39: ';',
    40: '\'',
    41: 'enter',
    42: 'shift',
    43: '\\',
    44: 'z',
    45: 'x',
    46: 'c',
    47: 'v',
    48: 'b',
    49: 'n',
    50: 'm',
    51: '.',
    52: ',',
    53: '/',
    54: '⇑',
    55: 'shift',
    56: 'ctrl',
    57: 'win',
    58: 'alt',
    59: '&nbsp',
    60: 'alt',
    61: 'ctrl',
    62: '⇐',
    63: '⇓',
    64: '⇒'
};

let englishBoardShifted = {
    0: '~',
    1: '!',
    2: '@',
    3: '#',
    4: '$',
    5: '%',
    6: '^',
    7: '&',
    8: '*',
    9: '(',
    10: ')',
    11: '_',
    12: '+',
    13: 'backspace',
    14: 'tab',
    15: 'q',
    16: 'w',
    17: 'e',
    18: 'r',
    19: 't',
    20: 'y',
    21: 'u',
    22: 'i',
    23: 'o',
    24: 'p',
    25: '{',
    26: '}',
    27: '|',
    28: 'del',
    29: 'caps lock',
    30: 'a',
    31: 's',
    32: 'd',
    33: 'f',
    34: 'g',
    35: 'h',
    36: 'j',
    37: 'k',
    38: 'l',
    39: ':',
    40: '"',
    41: 'enter',
    42: 'shift',
    43: '\\',
    44: 'z',
    45: 'x',
    46: 'c',
    47: 'v',
    48: 'b',
    49: 'n',
    50: 'm',
    51: '<',
    52: '>',
    53: '?',
    54: '⇑',
    55: 'shift',
    56: 'ctrl',
    57: 'win',
    58: 'alt',
    59: '&nbsp',
    60: 'alt',
    61: 'ctrl',
    62: '⇐',
    63: '⇓',
    64: '⇒'
};

let keyCodes = {
    0: '192',
    1: '49',
    2: '50',
    3: '51',
    4: '52',
    5: '53',
    6: '54',
    7: '55',
    8: '56',
    9: '57',
    10: '48',
    11: '189',
    12: '187',
    13: '8',
    14: '9',
    15: '81',
    16: '87',
    17: '69',
    18: '82',
    19: '84',
    20: '89',
    21: '85',
    22: '73',
    23: '79',
    24: '80',
    25: '219',
    26: '221',
    27: '220',
    28: '46',
    29: '20',
    30: '65',
    31: '83',
    32: '68',
    33: '70',
    34: '71',
    35: '72',
    36: '74',
    37: '75',
    38: '76',
    39: '186',
    40: '222',
    41: '13',
    42: '16',
    43: '220',
    44: '90',
    45: '88',
    46: '67',
    47: '86',
    48: '66',
    49: '78',
    50: '77',
    51: '188',
    52: '190',
    53: '191',
    54: '38',
    55: '16',
    56: '17',
    57: '91',
    58: '18',
    59: '32',
    60: '18',
    61: '17',
    62: '37',
    63: '40',
    64: '39'
};


const inputField = document.createElement('textarea');
document.querySelector('body').appendChild(inputField);
inputField.classList.add('input-field');

const keysWrapper = document.createElement('div');
document.querySelector('body').appendChild(keysWrapper);
inputField.insertAdjacentElement("afterend", keysWrapper);
keysWrapper.classList.add('keys-wrapper');

const changeLanguage = document.createElement('div');
document.querySelector('body').appendChild(changeLanguage);
changeLanguage.innerHTML = 'Please, select keyboard layout language. OS Windows 10.';
changeLanguage.classList.add('change-language');

for (let i = 65; i > 0; i--) {
    const key = document.createElement('div');
    keysWrapper.appendChild(key);
    key.classList.add('keys','inner-text');
}

const russianButton = document.createElement('div');
const englishButton = document.createElement('div');

document.querySelector('body').appendChild(russianButton);
document.querySelector('body').appendChild(englishButton);

russianButton.classList.add('evaluation-button-rus','inner-text');
englishButton.classList.add('evaluation-button-en','inner-text');
  
russianButton.innerHTML = 'Russian';
englishButton.innerHTML = 'English';

russianButton.addEventListener('click', () => {
    russianButton.classList.add('selected');
    englishButton.classList.remove('selected');
    const buttons = document.querySelectorAll('.keys');

    buttons.forEach( (e, i = 1) => {
        e.innerHTML = russianBoard[i];
    });

    changeLanguage.classList.add('stop-blur-animation');
});

englishButton.addEventListener('click', () => {
    englishButton.classList.add('selected');
    russianButton.classList.remove('selected');
    const buttons = document.querySelectorAll('.keys');

    buttons.forEach( (e, i = 1) => {
        e.innerHTML = englishBoard[i];
    });

    changeLanguage.classList.add('stop-blur-animation');
});

document.addEventListener('keydown', function(event) {
    if (event.keyCode == 20) {
        const buttons = document.querySelectorAll('.keys');

        buttons.forEach( e => {
            e.classList.toggle('caps-lock');
        });
    }

    if (event.keyCode == 16 && russianButton.classList.contains('selected')) {
        const buttons = document.querySelectorAll('.keys');

        buttons.forEach( e => {
            e.classList.add('shift');
        });
        
        buttons.forEach( (e, i = 1) => {
            e.innerHTML = russianBoardShifted[i];
        });
    } else if (event.keyCode == 16 && englishButton.classList.contains('selected')) {
        const buttons = document.querySelectorAll('.keys');

        buttons.forEach( e => {
            e.classList.add('shift');
        });
        
        buttons.forEach( (e, i = 1) => {
            e.innerHTML = englishBoardShifted[i];
        });
    }
});

document.addEventListener('keyup', function(event) {
    if (event.keyCode == 16 && russianButton.classList.contains('selected')) {
        const buttons = document.querySelectorAll('.keys');

        buttons.forEach( e => {
            e.classList.remove('shift');
        });

        buttons.forEach( (e, i = 1) => {
            e.innerHTML = russianBoard[i];
        });
    } else if (event.keyCode == 16 && englishButton.classList.contains('selected')) {
        const buttons = document.querySelectorAll('.keys');

        buttons.forEach( e => {
            e.classList.remove('shift');
        });

        buttons.forEach( (e, i = 1) => {
            e.innerHTML = englishBoard[i];
        });
    }
});

document.addEventListener('keydown', (event, positionCode = []) => {

    for (let code in keyCodes) {
        if (event.keyCode == keyCodes[code]) { positionCode.push(code); }
    }

    for (let i = 0; i < positionCode.length; i++) {    
        const buttons = document.querySelectorAll('.keys');

        buttons.forEach( e => {
            let innerText = e.innerText;

            if (russianButton.classList.contains('selected')) {
                if (innerText.toLowerCase() == russianBoard[positionCode[i]] || innerText.toLowerCase() == russianBoardShifted[positionCode[i]]) {
                e.classList.add('highlight');
            }
            }

            if (englishButton.classList.contains('selected')) {
                if (innerText.toLowerCase() == englishBoard[positionCode[i]] || innerText.toLowerCase() == englishBoardShifted[positionCode[i]]) {
                e.classList.add('highlight');
            }
            }



        });
    }
});

document.addEventListener('keyup', (event, positionCode = []) => {

    for (let code in keyCodes) {
        if (event.keyCode == keyCodes[code]) { positionCode.push(code); }
    }

    for (let i = 0; i < positionCode.length; i++) {    
        const buttons = document.querySelectorAll('.keys');

        buttons.forEach( e => {
            let innerText = e.innerText;

            if (russianButton.classList.contains('selected')) {
                if (innerText.toLowerCase() == russianBoard[positionCode[i]] || innerText.toLowerCase() == russianBoardShifted[positionCode[i]]) {
                e.classList.remove('highlight');
            }
            }

            if (englishButton.classList.contains('selected')) {
                if (innerText.toLowerCase() == englishBoard[positionCode[i]] || innerText.toLowerCase() == englishBoardShifted[positionCode[i]]) {
                e.classList.remove('highlight');
            }
            }
        });
    }
});

const buttons = document.querySelectorAll('.keys');
    buttons.forEach( e => {
        e.addEventListener('click', () => {
            inputField.value += e.innerText;
        });
});


if (!russianButton.classList.contains('selected') || !englishButton.classList.contains('selected')) {
    inputField.setAttribute('disabled', 'true');
} else if (russianButton.classList.contains('selected') || englishButton.classList.contains('selected')) {
    inputField.removeAttribute('disabled');
    inputField.focus();
}

document.addEventListener('click', () => {
    if (russianButton.classList.contains('selected') || englishButton.classList.contains('selected')) {
        inputField.removeAttribute('disabled');
        inputField.focus();
    }
});




// клики по кнопкам мышкой на виртуальной клавиатуре или нажатие на кнопки физической клавиатуры выводят символы в инпут(textarea), 
// расположенный на странице над клавиатурой. Нажатие стрелок вниз-вверх-влево-вправо либо выводят соответствующую стрелочку в инпут, 
// либо реализуют навигацию по инпуту, нажатие на enter должно осуществлять перевод каретки, tab создает горизонтальный отступ,
//  при нажатии остальных функциональных клавиш в инпут символы не выводятся, backspace удаляет символ стоящий перед курсором, del удаляет символ стоящий после курсора.