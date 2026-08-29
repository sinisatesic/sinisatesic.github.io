    const inputBox = document.getElementById("inputBox");
    const messageContainer = document.getElementById("messageContainer");
    const fileTypeMessage = document.createElement("span");
    const messageContent = document.createTextNode("");

    inputBox.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        const fileExtension = file.name.split('.').pop().toLowerCase();


        if (!file) return
        if (fileExtension !== "dwg"){
            inputBox.value = '';
            messageContent.textContent = 'Only DWG file type is permitted';
        } else {
            messageContent.textContent = 'Compressing';
            try {
                const zip = new JSZip();
                zip.file(file.name, file);
                const content = await zip.generateAsync({ type: "blob" }); //learn more; jszip stuff
                console.log(content)
                // saveAs(URL.createObjectURL, document.createElement('a')); //learn more; jszip stuff
                const downloadURL = URL.createObjectURL(content);
                const anchorLink = document.createElement('a');
                anchorLink.href = downloadURL;
                anchorLink.download = 'DWG_Zip_Folder.zip';
                anchorLink.click();
                URL.revokeObjectURL(downloadURL);
                messageContent.textContent = 'zip downloaded';
            } catch (error) {
                messageContent.textContent = `Error during runtime - please check file integrity (i.e. broken dwg file)`;
                console.error (error);
            }
            
        }

            fileTypeMessage.appendChild(messageContent);
            console.log(inputBox);
            console.log(fileExtension);

    })

    messageContainer.appendChild(fileTypeMessage);