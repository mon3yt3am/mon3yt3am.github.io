var options = document.getElementsByClassName( "options" )[ 0 ];

function toggle_options( ) {
  options.classList.toggle( "options-open" );
}

var paragraph_container = document.getElementById("hidden_paragraph");
var software = document.getElementsByClassName("hidden_txt")[0];
var software_sub = document.getElementsByClassName("hidden_txt")[1];
var social = document.getElementsByClassName("hidden_txt")[2];
var social_sub = document.getElementsByClassName("hidden_txt")[3];
var marketing = document.getElementsByClassName("hidden_txt")[4];
var marketing_sub = document.getElementsByClassName("hidden_txt")[5];
var cyber = document.getElementsByClassName("hidden_txt")[6];
var cyber_sub = document.getElementsByClassName("hidden_txt")[7];
var activeButton = null;

// Hide all the elements initially
hideAllElements();

function hideAllElements() {
  software.style.display = "none";
  software_sub.style.display = "none";
  social.style.display = "none";
  social_sub.style.display = "none";
  marketing.style.display = "none";
  marketing_sub.style.display = "none";
  cyber.style.display = "none";
  cyber_sub.style.display = "none";
}

function show_paragraph(num) {
  var currentButton = null;
  var currentParagraph = null;

  switch (num) {
    case 1:
      currentButton = software;
      currentParagraph = software_sub;
      break;
    case 2:
      currentButton = social;
      currentParagraph = social_sub;
      break;
    case 3:
      currentButton = marketing;
      currentParagraph = marketing_sub;
      break;
    case 4:
      currentButton = cyber;
      currentParagraph = cyber_sub;
      break;
  }

  if (activeButton === currentButton) {
    // Hide the container and reset styles if the same button is pressed twice
    paragraph_container.style.top = "1000px";
    paragraph_container.style.opacity = "0";
    activeButton = null;
  } else {
    // Show the selected button's paragraph and subtext
    hideAllElements(); // Hide all elements before showing the selected ones
    currentButton.style.display = "block";
    currentParagraph.style.display = "block";
    paragraph_container.style.top = "1250px";
    paragraph_container.style.opacity = "1";

    activeButton = currentButton;
  }
}