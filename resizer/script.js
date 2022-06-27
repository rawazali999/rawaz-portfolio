

function resize() {

    let url = document.getElementById('url').value;
    let height = document.getElementById('height').value;
    let width = document.getElementById('width').value;
  
    /* only returns index number of last occurence of the forward slash : 27 */
    let lastIndex = url.lastIndexOf('/');
    //
    let lastPart = url.substring(lastIndex);
    let generatedUrl = `https://source.unsplash.com${lastPart}/${width}x${height}`;

  
    let ourImage = document.getElementById('generatedImage');
    ourImage.src = `${generatedUrl}`;
    ourImage.width = width ;
    ourImage.height = height ;
    ourImage.style.display = 'block';
  
    /* Make URL Placeholder appear once we have the URL */
    let urlDiv = document.getElementById('new-url');
  
    urlDiv.style.display = 'inline-block';
    urlDiv.innerHTML = `<i id="icon" class="bi bi-clipboard"></i>  ${generatedUrl}`;


  }
  
  function handleCopy() {
    let innerTxt = document.getElementById('new-url').innerText;
    copyToClipboard(innerTxt);
    iconChange();
  }
  
  /* copy whatever passed to it to the clipboard */
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(
      function () {
        console.log('Async: Copying to clipboard was successful!');
      },
      function (err) {
        console.error('Async: Could not copy text: ', err);
      }
    );
  }

  function iconChange(){
    let oldIcon = document.getElementById('icon');
    oldIcon.classList.remove("bi-clipboard");
    oldIcon.classList.add("bi-check")
    

  
  }
  