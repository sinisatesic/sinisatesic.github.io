const generateButton = document.getElementById('generateButton');
const clearButton = document.getElementById('clearButton');
const copyButton = document.getElementById('copyButton');
const initial = document.getElementById('initialText');
const content = document.getElementById('content');
const input = document.getElementById('input');
let createdText;

const generateIDs = () => {
console.log(input.value)
const randomizer = () => {
let arr = [];
// let arr = [], specialChars = '!$#&@';

// arr.push(Math.floor((Math.random() * 9) + 1));
// arr.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97).toUpperCase());
// arr.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97).toLowerCase());
// arr.push(specialChars.charAt(Math.floor(Math.random() * 5)))
// arr.push(Math.floor((Math.random() * 9) + 1));
// arr.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97).toUpperCase());
// arr.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97).toLowerCase());
// arr.push(specialChars.charAt(Math.floor(Math.random() * 5)))
// arr.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97).toUpperCase());
// arr.push(specialChars.charAt(Math.floor(Math.random() * 5)))

// arr.push(Math.floor((Math.random() * 9) + 1));
// arr.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97).toUpperCase());


// arr.push(Array(4).fill(Math.floor(Math.random() * 9) + 1));
// arr.push(...Array(3).fill(String.fromCharCode(Math.floor(Math.random() * 26) + 97).toUpperCase()));
// arr.push(...Array(4).fill(Math.floor(Math.random() * 9) + 1));

    for(let i = 0; i < 3; i++){
        arr.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97).toUpperCase());
    }

    for(let i = 0; i < 3; i++){
        arr.push(Math.floor((Math.random() * 9) + 1));
    }

    // console.log(arr.join(','));
    // content.innerHTML = '';
    createdText = document.createElement('text');
    createdText.innerHTML = `${arr.join('')}<br>`;
    createdText.classList.add('opacityFont');
    content.appendChild(createdText);
    }

    for(let i = 0; i < input.value; i++){
    randomizer();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    generateButton.addEventListener('click', generateIDs);
    generateButton.addEventListener('click', () => {
    initialText.innerHTML = '';
    content.classList.add('postClickBorder');
    content.classList.add('vertExpand');
    createdText.classList.add('opacityFont');
    copyButton.innerHTML = 'Copy All';
})

clearButton.addEventListener('click', () => {
    location.reload();
    copyButton.innerHTML = 'Copy All';
})

copyButton.addEventListener('click', copyToClipboard);

copyButton.addEventListener('click', () => {
    copyButton.innerHTML = `Copied`;
    })
})

document.addEventListener('keypress', (e) => {
    if (13 == e.keyCode){
        generateButton.click();
    }
})

const copyToClipboard = () => {
  var range = document.createRange();
  range.selectNode(document.getElementById('content'));
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
}