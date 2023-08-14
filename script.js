// services drop down
const paragraphs = document.getElementsByClassName( "hidden_txt" );
function hideAllElements() {
  for( var i = 0; i < paragraphs.length; i++ ) {
    paragraphs[ i ].style.display = "none";
  }
}
hideAllElements();

var paragraph_container = document.getElementById( "hidden_paragraph" );
var activeButton = null;
function show_paragraph( num ) {
  var currentParagraph = paragraphs[ num ].nextElementSibling;
  var currentButton = paragraphs[ num ];

  if( activeButton === currentButton ) {
    paragraph_container.style.top = "1000px";
    paragraph_container.style.opacity = "0";
    activeButton = null;
  } else {
    hideAllElements();
    currentButton.style.display = "block";
    currentParagraph.style.display = "block";
    paragraph_container.style.top = "1250px";
    paragraph_container.style.opacity = "1";

    activeButton = currentButton;
  }
}

// background highlight
/* fix top start pos since w ehave static bar now */
var scroll_percent_mapped = 0;
var background = document.getElementById( "background" );
function move_highlight( ) {
  const top = 0;
  const bottom = 3100 - window.innerHeight;
  const scroll_percent = ( window.scrollY - top ) / ( bottom - top ) * 100;
  scroll_percent_mapped = scroll_percent * ( window.innerHeight / 100 ) + window.scrollY;
  background.style.backgroundImage = 'linear-gradient( to bottom, rgba( 255, 255, 255, 0 ) ' + ( scroll_percent_mapped - 50 ) + 'px, rgba( 255, 255, 255, .777 ) ' + scroll_percent_mapped + 'px, rgba( 255, 255, 255, 0 ) ' + ( scroll_percent_mapped + 50 ) + 'px ), url("./img/background.png")';
}
window.addEventListener( "scroll", move_highlight );

const delay = ms => new Promise( res => setTimeout( res, ms ) );
const loopprint = async ( ) => {
  while( true ) {
    await delay( 1000 );
    console.log( scroll_percent_mapped );
  }
}
loopprint( );