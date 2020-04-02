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
53: '.',
54: '⇑',
55: 'shift',
56: 'ctrl',
57: 'win',
58: 'alt',
59: ' ',
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
53: ',',
54: '⇑',
55: 'shift',
56: 'ctrl',
57: 'win',
58: 'alt',
59: ' ',
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
51: ',',
52: '.',
53: '/',
54: '⇑',
55: 'shift',
56: 'ctrl',
57: 'win',
58: 'alt',
59: ' ',
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
43: '|',
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
59: ' ',
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
changeLanguage.innerHTML = 'Please, select keyboard layout language and apply SHIFT + Alt to switch language. Adapted for 1920x1080px. OS Windows 10. GL & HF.';
changeLanguage.classList.add('change-language');

for (let i = 65; i > 0; i--) {
const key = document.createElement('div');
keysWrapper.appendChild(key);
key.classList.add('keys', 'inner-text');
}

const russianButton = document.createElement('div');
const englishButton = document.createElement('div');

document.querySelector('body').appendChild(russianButton);
document.querySelector('body').appendChild(englishButton);

russianButton.classList.add('evaluation-button-rus', 'inner-text');
englishButton.classList.add('evaluation-button-en', 'inner-text');

russianButton.innerHTML = 'Russian';
englishButton.innerHTML = 'English';

russianButton.addEventListener('click', () => {
russianButton.classList.add('selected');
englishButton.classList.remove('selected');
const buttons = document.querySelectorAll('.keys');
buttons.forEach((e, i = 1) => {
    e.innerHTML = russianBoard[i];
});
changeLanguage.classList.add('stop-blur-animation');
});

englishButton.addEventListener('click', () => {
englishButton.classList.add('selected');
russianButton.classList.remove('selected');
const buttons = document.querySelectorAll('.keys');
buttons.forEach((e, i = 1) => {
    e.innerHTML = englishBoard[i];
});
changeLanguage.classList.add('stop-blur-animation');
});

document.addEventListener('keydown', function(event) {

if (event.keyCode == 20) {
    const buttons = document.querySelectorAll('.keys');
    buttons.forEach(e => {
    e.classList.toggle('caps-lock');
    });
}

if (event.keyCode == 16 && russianButton.classList.contains('selected')) {
    const buttons = document.querySelectorAll('.keys');
    buttons.forEach(e => {
    e.classList.add('shift');
    });
    buttons.forEach((e, i = 1) => {
    e.innerHTML = russianBoardShifted[i];
    });
} else if (event.keyCode == 16 && englishButton.classList.contains('selected')) {
    const buttons = document.querySelectorAll('.keys');
    buttons.forEach(e => {
    e.classList.add('shift');
    });
    buttons.forEach((e, i = 1) => {
    e.innerHTML = englishBoardShifted[i];
    });
}
});

document.addEventListener('keyup', function(event) {
if (event.keyCode == 16 && russianButton.classList.contains('selected')) {
    const buttons = document.querySelectorAll('.keys');
    buttons.forEach(e => {
    e.classList.remove('shift');
    });
    buttons.forEach((e, i = 1) => {
    e.innerHTML = russianBoard[i];
    });
} else if (event.keyCode == 16 && englishButton.classList.contains('selected')) {
    const buttons = document.querySelectorAll('.keys');
    buttons.forEach(e => {
    e.classList.remove('shift');
    });
    buttons.forEach((e, i = 1) => {
    e.innerHTML = englishBoard[i];
    });
}
});

document.addEventListener('keydown', (event, positionCode = []) => {

for (let code in keyCodes) {
    if (event.keyCode == keyCodes[code]) {
    positionCode.push(code);
    }
}

for (let i = 0; i < positionCode.length; i++) {
    const buttons = document.querySelectorAll('.keys');
    buttons.forEach(e => {
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
    if (event.keyCode == keyCodes[code]) {
    positionCode.push(code);
    }
}

for (let i = 0; i < positionCode.length; i++) {
    const buttons = document.querySelectorAll('.keys');
    buttons.forEach(e => {
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
buttons.forEach(e => {
e.addEventListener('click', () => {
    if (e.innerText != 'backspace' && e.innerText != 'del' && e.innerText != 'tab' && e.innerText != 'caps lock' && e.innerText != 'enter' &&
    e.innerText != 'shift' && e.innerText != 'ctrl' && e.innerText != 'alt' && e.innerText != 'win' &&
    e.innerText != '⇐' && e.innerText != '⇒' &&
    e.innerText != 'BACKSPACE' && e.innerText != 'DEL' && e.innerText != 'TAB' && e.innerText != 'CAPS LOCK' && e.innerText != 'ENTER' &&
    e.innerText != 'SHIFT' && e.innerText != 'CTRL' && e.innerText != 'ALT' && e.innerText != 'WIN') {
    inputField.value += e.innerText;
    }
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

russianButton.addEventListener('click', () => {
sessionStorage.setItem('language-russian', russianButton.classList.contains('selected'));
sessionStorage.setItem('language-english', englishButton.classList.contains('selected'));
});

englishButton.addEventListener('click', () => {
sessionStorage.setItem('language-russian', russianButton.classList.contains('selected'));
sessionStorage.setItem('language-english', englishButton.classList.contains('selected'));
});

if (sessionStorage.getItem('language-russian') == 'null' && sessionStorage.getItem('language-english') == 'null') {
englishButton.classList.remove('selected');
russianButton.classList.remove('selected');
} else if (sessionStorage.getItem('language-russian') == 'true' && sessionStorage.getItem('language-english') == 'false') {
englishButton.classList.remove('selected');
russianButton.classList.add('selected');
changeLanguage.classList.add('stop-blur-animation');
inputField.removeAttribute('disabled');
inputField.focus();
const buttons = document.querySelectorAll('.keys');
buttons.forEach((e, i = 1) => {
    e.innerHTML = russianBoard[i];
});
} else if (sessionStorage.getItem('language-russian') == 'false' && sessionStorage.getItem('language-english') == 'true') {
englishButton.classList.add('selected');
russianButton.classList.remove('selected');
changeLanguage.classList.add('stop-blur-animation');
inputField.removeAttribute('disabled');
inputField.focus();
const buttons = document.querySelectorAll('.keys');
buttons.forEach((e, i = 1) => {
    e.innerHTML = englishBoard[i];
});
}

document.addEventListener('keydown', function(event) {

if (event.keyCode == 9) {
    event.preventDefault();
    inputField.value += '   ';
}

if (event.keyCode == 18) {
    event.preventDefault();
}

if (event.keyCode == 32) {
    document.querySelector('.keys:nth-child(60)').classList.add('highlight');
    inputField.value += ' ';
}
});

document.addEventListener('keyup', function(event) {

if (event.keyCode == 32) {
    document.querySelector('.keys:nth-child(60)').classList.remove('highlight');
}
});

document.querySelector('.keys:nth-child(60)').addEventListener('click', function() {
inputField.value += ' ';
});

document.querySelector('.keys:nth-child(15)').addEventListener('click', function() {
inputField.value += '    ';
});

document.querySelector('.keys:nth-child(14)').addEventListener('click', function() {
if (inputField.value.substring(inputField.selectionStart, inputField.selectionEnd).length == 0) {
    let position = inputField.selectionStart;
    inputField.value = inputField.value.substr(0, inputField.selectionStart - 1) + inputField.value.substr(inputField.selectionStart, inputField.value.length);
    inputField.selectionEnd = position - 1;
} else {
    let position = inputField.selectionStart;
    inputField.value = inputField.value.substr(0, inputField.selectionStart) + inputField.value.substr(inputField.selectionEnd, inputField.value.length);
    inputField.selectionEnd = position;
}
});

document.querySelector('.keys:nth-child(29)').addEventListener('click', function() {
if (inputField.value.substring(inputField.selectionStart, inputField.selectionEnd).length == 0) {
    let position = inputField.selectionStart;
    inputField.value = inputField.value.substr(0, inputField.selectionStart) + inputField.value.substr(inputField.selectionStart + 1, inputField.value.length);
    inputField.selectionEnd = position;
} else {
    let position = inputField.selectionStart;
    inputField.value = inputField.value.substr(0, inputField.selectionStart) + inputField.value.substr(inputField.selectionEnd, inputField.value.length);
    inputField.selectionEnd = position;
}
});

document.querySelector('.keys:nth-child(30)').addEventListener('click', function() {
const buttons = document.querySelectorAll('.keys');
buttons.forEach(e => {
    e.classList.toggle('caps-lock');
});
});

document.querySelector('.keys:nth-child(42)').addEventListener('click', function() {
inputField.value += '\n';
});

document.querySelector('div.keys:nth-child(43)').addEventListener('click', function() {
if (russianButton.classList.contains('selected')) {
    const buttons = document.querySelectorAll('.keys');
    buttons.forEach(e => {
    e.classList.toggle('shift');
    });
    buttons.forEach((e, i = 1) => {
    if (e.classList.contains('shift')) {
        e.innerHTML = russianBoardShifted[i];
    } else if (!e.classList.contains('shift')) {
        e.innerHTML = russianBoard[i];
    }
    });
} else if (englishButton.classList.contains('selected')) {
    const buttons = document.querySelectorAll('.keys');
    buttons.forEach(e => {
    e.classList.toggle('shift');
    });
    buttons.forEach((e, i = 1) => {
    if (e.classList.contains('shift')) {
        e.innerHTML = englishBoardShifted[i];
    } else if (!e.classList.contains('shift')) {
        e.innerHTML = englishBoard[i];
    }
    });
}
});

document.querySelector('div.keys:nth-child(56)').addEventListener('click', function() {
if (russianButton.classList.contains('selected')) {
    const buttons = document.querySelectorAll('.keys');
    buttons.forEach(e => {
    e.classList.toggle('shift');
    });
    buttons.forEach((e, i = 1) => {
    if (e.classList.contains('shift')) {
        e.innerHTML = russianBoardShifted[i];
    } else if (!e.classList.contains('shift')) {
        e.innerHTML = russianBoard[i];
    }
    });
} else if (englishButton.classList.contains('selected')) {
    const buttons = document.querySelectorAll('.keys');
    buttons.forEach(e => {
    e.classList.toggle('shift');
    });
    buttons.forEach((e, i = 1) => {
    if (e.classList.contains('shift')) {
        e.innerHTML = englishBoardShifted[i];
    } else if (!e.classList.contains('shift')) {
        e.innerHTML = englishBoard[i];
    }
    });
}
});

document.querySelector('div.keys:nth-child(59)').addEventListener('click', function() {
const buttons = document.querySelectorAll('.keys');
buttons.forEach(e => {
    if (e.classList.contains('shift')) {
    if (russianButton.classList.contains('selected')) {
        russianButton.classList.toggle('selected');
        englishButton.classList.toggle('selected');
        const buttons = document.querySelectorAll('.keys');
        buttons.forEach((e, i = 1) => {
        e.innerHTML = englishBoardShifted[i];
        });
    } else if (englishButton.classList.contains('selected')) {
        russianButton.classList.toggle('selected');
        englishButton.classList.toggle('selected');
        const buttons = document.querySelectorAll('.keys');
        buttons.forEach((e, i = 1) => {
        e.innerHTML = russianBoardShifted[i];
        });
    }
    }
});
});

document.querySelector('div.keys:nth-child(61)').addEventListener('click', function() {
    const buttons = document.querySelectorAll('.keys');
    buttons.forEach(e => {
        if (e.classList.contains('shift')) {
        if (russianButton.classList.contains('selected')) {
            russianButton.classList.toggle('selected');
            englishButton.classList.toggle('selected');
            const buttons = document.querySelectorAll('.keys');
            buttons.forEach((e, i = 1) => {
            e.innerHTML = englishBoardShifted[i];
            });
        } else if (englishButton.classList.contains('selected')) {
            russianButton.classList.toggle('selected');
            englishButton.classList.toggle('selected');
            const buttons = document.querySelectorAll('.keys');
            buttons.forEach((e, i = 1) => {
            e.innerHTML = russianBoardShifted[i];
            });
        }
        }
});
});

document.querySelector('.keys:nth-child(63)').addEventListener('click', function() {
    inputField.selectionEnd = inputField.selectionStart - 1;
    if (inputField.selectionStart == 0) {
        inputField.selectionEnd = 0;
    }
});

document.querySelector('.keys:nth-child(65)').addEventListener('click', function() {
    inputField.selectionStart = inputField.selectionEnd  + 1 ;
});