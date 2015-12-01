function countDown(secs,elements) {
      var element=document.getElementById(elements)
      element.innerHTML = secs
      if(secs < 1) {
        window.location="lose-screen.html"
      }
      secs--;
      var timer= setTimeout('countDown('+secs+',"'+elements+'")',1000)
    }
