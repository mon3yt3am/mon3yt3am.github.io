// scrollbar
var scroll_percent_mapped = 0;
var background = document.getElementById( "background" );
function move_highlight( ) {
  const top = -205;
  const bottom = 2700 - window.innerHeight;
  const scroll_percent = ( window.scrollY - top ) / ( bottom - top ) * 100; // test removing - top from scrollY
  scroll_percent_mapped = scroll_percent * ( window.innerHeight / 100 ) + window.scrollY;
  background.style.backgroundImage = 'linear-gradient( to bottom, rgba( 255, 255, 255, 0 ) ' + ( scroll_percent_mapped - 100 ) + 'px, rgba( 255, 255, 255, .777 ) ' + scroll_percent_mapped + 'px, rgba( 255, 255, 255, 0 ) ' + ( scroll_percent_mapped + 100 ) + 'px ), url("./img/background.webp")';
}
window.addEventListener( "scroll", move_highlight );

// services drop down
const paragraphs = document.getElementsByClassName( "hidden_txt" );
const buttons = document.getElementsByClassName( "hidden_link_txt" );
function hideAllElements() {
  for( var i = 0; i < paragraphs.length; i++ )
    paragraphs[ i ].style.display = "none";

  for( var i = 0; i < buttons.length; i++ )
    buttons[ i ].style.display = "none";
}
hideAllElements();

var paragraph_container = document.getElementById( "hidden_paragraph" );
var activeButton = null;
async function show_paragraph( num ) {
  var currentButton = paragraphs[ num ];
  var currentParagraph = paragraphs[ num ].nextElementSibling;
  var currentLink = buttons[ num / 2 ];

  if( activeButton === currentButton ) {
    paragraph_container.style.top = "1000px";
    paragraph_container.style.opacity = "0";
    activeButton = null;
  } else {
    hideAllElements();

    currentButton.style.display = "block";
    currentParagraph.style.display = "block";
    currentLink.style.display = "block";

    paragraph_container.style.top = "1250px";
    paragraph_container.style.opacity = "1";

    activeButton = currentButton;
  }
}

function get_time_of_day() {
  const currentTime = new Date();
  const hours = currentTime.getHours();

  if( hours >= 5 && hours < 12 )
    return "morning";
  else if( hours >= 12 && hours < 18 )
    return "afternoon";
  else
    return "evening";
}

// about us popup windows
function about_us_popups() {
  // get each about_container and change cursor to pointer when hovered
  // when clicked, create new popup window with person bio and maybe photo if it looks good formatted?
}