var socket = null;
var locked = false;

if (document.readyState != 'loading') ready();
else document.addEventListener('DOMContentLoaded', ready);

function ready() {
  const url = 'ws://' + location.host + '/ws';
  socket = new ReconnectingWebsocket(url);

  socket.onmessage = function(evt) {

    if (evt.data == 'b') {
      vibrate();
    }
    
    if (evt.data == 'a') {
      locked = true;
    }
    
  };

}

function send(str) {
  socket.send(str);
}
  
  function vibrate() {
    navigator.vibrate(1000);
  }


function islocked () {
  if ( locked == true ) {
        navigator.vibrate([500, 100, 250, 100, 1000]),
        document.getElementById("yes").innerHTML = "Yes it is!"
        
  } else {
    document.getElementById("yes").innerHTML = "No it's not"
  }
}














