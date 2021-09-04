document.querySelector('img.preview').addEventListener('click', function(e) {
  let lowRes = e.target.src
  let overlay = document.querySelector('.overlay');
  let highRes = document.createElement('img');
  let spinner = document.createElement('img');
  
  overlay.style.display='block';
  highRes.className = 'bgImg'
  highRes.src = lowRes.substr(0, lowRes.length-7) + '.jpg';
  overlay.appendChild(highRes)
  
  spinner.className = 'spinner'
  spinner.src = 'images/spinner.gif'
  overlay.appendChild(spinner)
  
  highRes.addEventListener('load', function() {
    spinner.parentNode.removeChild(spinner)
  })
}, false)