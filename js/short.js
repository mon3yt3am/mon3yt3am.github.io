// set <html> and background height to window size on load and resize
var bksize = document.getElementById( "background" );
var bkcont = document.getElementById( "background_container" );
var desccont = document.getElementsByClassName( "description_container" )[0];

document.documentElement.style.height = window.innerHeight + "px";
bksize.style.height = window.innerHeight + "px";
bkcont.style.height = window.innerHeight + "px";
if( this.window.innerWidth <= 705 && desccont )
  desccont.style.top = ( ( window.innerHeight / 2 ) + 115 ) + "px";
else if( desccont )
  desccont.style.top = ( window.innerHeight / 2 ) + "px";

window.addEventListener( "resize", function() {
  document.documentElement.style.height = window.innerHeight + "px";
  bksize.style.height = window.innerHeight + "px";
  bkcont.style.height = window.innerHeight + "px";
  if( this.window.innerWidth <= 705 && desccont )
    desccont.style.top = ( ( window.innerHeight / 2 ) + 115 ) + "px";
  else if( desccont )
    desccont.style.top = ( window.innerHeight / 2 ) + "px";
} );

// if window is resized, change icons in nav bar
window.addEventListener( "resize", () => {
  $('.options').children().first().next().children().first().html( window.innerWidth < 650 ? '<i class="fa-solid fa-house"></i>' : 'Home' );
  $('.options').children().first().next().children().first().next().html( window.innerWidth < 625 ? '<i class="fa-solid fa-briefcase"></i>' : 'Service' );
  $('.options').children().first().next().children().first().next().next().html( window.innerWidth < 600 ? '<i class="fa-solid fa-people-group"></i>' : 'About' );
  $('.options').children().first().next().children().first().next().next().next().html( window.innerWidth < 575 ? '<i class="fa-solid fa-circle-question"></i>' : 'FAQ' );
});