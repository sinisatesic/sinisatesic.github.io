const generateButton = document.getElementById('generateButton');
const clearButton = document.getElementById('clearButton');
const copyButton = document.getElementById('copyButton');
const initial = document.getElementById('initialText');
const content = document.getElementById('content');
const input = document.getElementById('input');

const generateIDs = () => {

    // console.log(input.value)

    // const randomizer = () => {

    // let arr = [];

    //     for(let i = 0; i < 3; i++){
    //         arr.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97).toUpperCase());
    //     }

    //     for(let i = 0; i < 4; i++){
    //         arr.push(Math.floor((Math.random() * 9) + 1));
    //     }

    //     createdText = document.createElement('text');
    //     createdText.innerHTML = `${arr.join('')}<br>`;
    //     createdText.classList.add('opacityFont');


    //     content.appendChild(createdText);
    //     }

    //     for(let i = 0; i < input.value; i++){
    //         randomizer();
    //     }


    console.log(input.value);

  const randomizer = () => {
    let arr = [];
    
    // Generate 3 random letters
    for (let i = 0; i < 3; i++) {
      arr.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97).toUpperCase());
    }
    // Generate 4 random numbers
    for (let i = 0; i < 4; i++) {
      arr.push(Math.floor((Math.random() * 9) + 1));
    }

    // 1. Create the final ID string first
    let finalID = arr.join('');

    // 2. THE CHECK: If the ID already exists in the content div, 
    // keep rebuilding a new array until you get a unique one.
    while (content.textContent.includes(finalID)) {
      arr = []; // clear the old duplicate array
      for (let i = 0; i < 3; i++) {
        arr.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97).toUpperCase());
      }
      for (let i = 0; i < 4; i++) {
        arr.push(Math.floor((Math.random() * 9) + 1));
      }
      finalID = arr.join(''); // Update finalID to test again
    }

    // 3. Only run DOM injection once uniqueness is guaranteed
    const createdText = document.createElement('span'); // Changed from 'text' to 'span' for valid HTML
    createdText.innerHTML = `${finalID}<br>`;
    createdText.classList.add('opacityFont');
    content.appendChild(createdText);
  }

  for (let i = 0; i < input.value; i++) {
    if (input.value > 10000){
        input.value = 0;
    }
    randomizer();
  }
}


// // A reusable utility function just for generating the random string
// const generateRandomID = () => {
//   const letters = Array.from({ length: 3 }, () => String.fromCharCode(Math.floor(Math.random() * 26) + 65)); // 65 is uppercase A
//   const numbers = Array.from({ length: 4 }, () => Math.floor(Math.random() * 9) + 1);
//   return [...letters, ...numbers].join('');
// };

// const generateIDs = () => {
//   const count = parseInt(input.value, 10) || 0;
//   const existingIDs = new Set(); // Using a Set prevents duplicates instantly

//   for (let i = 0; i < count; i++) {
//     let newID = generateRandomID();
    
//     // Ensure uniqueness
//     while (existingIDs.has(newID)) {
//       newID = generateRandomID();
//     }
//     existingIDs.add(newID);

//     // Modern DOM insertion
//     const idSpan = document.createElement('span');
//     idSpan.className = 'opacityFont ';
//     idSpan.innerHTML = `${newID}<br>`;
//     content.appendChild(idSpan);
//   }
// };



document.addEventListener("DOMContentLoaded", () => {
    generateButton.addEventListener('click', generateIDs);
    generateButton.addEventListener('click', () => {
    initialText.innerHTML = '';
    content.classList.add('postClickBorder');
    content.classList.add('vertExpand');
    copyButton.innerHTML = 'Copy All';
})

clearButton.addEventListener('click', () => {
    location.reload();
    copyButton.innerHTML = 'Copy All';
})

copyButton.addEventListener('click', copyToClipboard);

copyButton.addEventListener('click', () => {
    copyButton.innerHTML = `Copied!`;
    })
})

document.addEventListener('keypress', (e) => {
    if (13 == e.keyCode){
        generateButton.click();
    }
})


//Stack of:
const copyToClipboard = () => {
  var range = document.createRange();
  range.selectNode(document.getElementById('content'));
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
}