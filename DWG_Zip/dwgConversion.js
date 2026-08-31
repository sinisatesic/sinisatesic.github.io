const inputBox = document.getElementById('inputBox');
const messageContainer = document.getElementById('messageContainer');
const fileTypeMessage = document.createElement('span');
const messageContent = document.createTextNode('');
const wow = new Audio('wow.mp3'), boo = new Audio('boo.mp3'), error = new Audio('error.mp3');

inputBox.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (!file) return
    if (fileExtension !== 'dwg'){
        inputBox.value = '';
        messageContainer.querySelector('span').style.color = '#ff6000';
        messageContainer.querySelector('span').style.textShadow = `0 0 5px red, 0 0 10px red, 0 0 20px red, 0 0 40px red`;
        messageContent.textContent = 'Only DWG!';
        boo.play();
    } else {
        messageContainer.querySelector('span').style.color = 'white';
        messageContainer.querySelector('span').style.textShadow = `0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff`;
        messageContent.textContent = 'Compressing';
        try {
            const zip = new JSZip();
            zip.file(file.name, file);
            const content = await zip.generateAsync({ type: 'blob' }); //learn more; jszip stuff
            console.log(content)
            // saveAs(URL.createObjectURL, document.createElement('a')); //learn more; jszip stuff
            const downloadURL = URL.createObjectURL(content);
            const anchorLink = document.createElement('a');
            anchorLink.href = downloadURL;
            anchorLink.download = 'DWG_Zip_Folder.zip';
            anchorLink.click();
            URL.revokeObjectURL(downloadURL);
            messageContent.textContent = 'zip downloaded';
            wow.play();
        } catch (error) {
            messageContent.textContent = `Error during runtime - please check file integrity (i.e. broken dwg file)`;
            console.error (error);
            error.play();
        }
    }
        fileTypeMessage.appendChild(messageContent);
        console.log(inputBox);
        console.log(fileExtension);
});
messageContainer.appendChild(fileTypeMessage);


