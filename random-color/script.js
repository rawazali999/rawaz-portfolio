function clickHandler() {
    let randomColor = generateRandomColor();
  
    /* select an element by ID, and change it's styling */
    document.getElementById('container').style.backgroundColor = `#${randomColor}`;
    document.getElementById('hexCode').innerHTML = `#${randomColor}`;

    let urlDiv = document.getElementById('new-url');
  
    urlDiv.style.display = 'inline-block';
    urlDiv.innerHTML = `<i id="icon" class="bi bi-clipboard"></i>`;

  }
  
  /* Generate Random Number hex value */
  function generateRandomColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
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
  