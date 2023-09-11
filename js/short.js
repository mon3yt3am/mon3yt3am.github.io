// set <html> and background height to window size on load and resize
var bksize = document.getElementById( "background" );
var bkcont = document.getElementById( "background_container" );
var desccont = document.getElementsByClassName( "description_container" )[0];

document.documentElement.style.height = window.innerHeight + "px";
bksize.style.height = window.innerHeight + "px";
bkcont.style.height = window.innerHeight + "px";
desccont.style.top = ( window.innerHeight / 2 ) + "px";

window.addEventListener( "resize", function() {
  document.documentElement.style.height = window.innerHeight + "px";
  bksize.style.height = window.innerHeight + "px";
  bkcont.style.height = window.innerHeight + "px";
  if( this.window.innerWidth <= 490 )
    desccont.style.top = ( ( window.innerHeight / 2 ) + 115 ) + "px";
  else
    desccont.style.top = ( window.innerHeight / 2 ) + "px";
} );