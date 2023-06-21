
const generateButton = document.getElementById("generateButton");
const clearButton = document.getElementById("clearButton");
const copyButton = document.getElementById("copyButton");
const content = document.getElementById("content");
const input = document.getElementById("input");
const inputValue = input.value;
let createdText;


const logs = () => {
	console.log(input.value)
	const randomizer = () => {
	
		let arr = [], specialChars = '!$#&@';
	
			arr.push(Math.floor((Math.random() * 9) + 1));
			arr.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97).toUpperCase());
			arr.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97).toLowerCase());
			arr.push(specialChars.charAt(Math.floor(Math.random() * 5)))
			arr.push(Math.floor((Math.random() * 9) + 1));
			arr.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97).toUpperCase());
			arr.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97).toLowerCase());
			arr.push(specialChars.charAt(Math.floor(Math.random() * 5)))
			arr.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97).toUpperCase());
			arr.push(specialChars.charAt(Math.floor(Math.random() * 5)))
		
			
			console.log(arr.join(''));
			createdText = document.createElement('text');
			createdText.innerHTML = `${arr.join('')}<br>`;
			createdText.classList.add('opacityFont')
			content.appendChild(createdText);
			
	}

	for(let i = 0; i < input.value; i++){
		randomizer();
	}
}

document.addEventListener("DOMContentLoaded", () => {
	generateButton.addEventListener('click', logs);
	generateButton.addEventListener('click', () => {
		content.classList.add('postClickBorder');
		content.classList.add('vertExpand');
		createdText.classList.add('opacityFont');
		copyButton.innerHTML = `Copy All`
	})
	clearButton.addEventListener('click', () => {
		content.innerHTML = ``;
		copyButton.innerHTML = `Copy All`
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
  range.selectNode(document.getElementById("content"));
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  window.getSelection().removeAllRanges()
}

// if (copyToClipboard){
// 	copyButton.innerHTML = `Copied`;
// } else {
// 	copyButton.innerHTML = `Copy All`;
// }



