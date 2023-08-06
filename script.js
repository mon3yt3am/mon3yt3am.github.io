var options = document.getElementsByClassName( "options" )[ 0 ];

function toggle_options( ) {
  options.classList.toggle( "options-open" );
}

var paragraph_container = document.getElementById( "hidden_paragraph" );
const paragraphs = document.getElementsByClassName( "hidden_txt" );
var activeButton = null;

function hideAllElements() {
  for( var i = 0; i < paragraphs.length; i++ ) {
    paragraphs[ i ].style.display = "none";
  }
}

hideAllElements();

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