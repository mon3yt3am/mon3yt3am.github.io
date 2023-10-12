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
$( document ).ready( () => {
  $('.about_container').on( 'click', event => {
    if( $('#popup') !== null )
      $('#popup').remove();

    var popup = document.createElement( "div" );
    popup.id = "popup";
    
    const popup_w = 555;
    var popup_x = Math.floor( Math.random() * ( window.innerWidth - popup_w ) );
    
    { // popup styling
      popup.style.position = "absolute";
      popup.style.left = popup_x + "px";
      popup.style.width = popup_w + "px";
      popup.style.height = "auto";
      popup.style.background = "rgb( 24, 24, 24 )";
      popup.style.border = "1px solid black";
      popup.style.boxShadow = "0 0 10px black";
      popup.style.zIndex = "100000";
      popup.style.userSelect = "none";
    }
    document.body.appendChild( popup );

    $( popup ).ready( () => {
      var popup_h = popup.offsetHeight;
      var popup_y = scrollY + 125 + Math.floor( Math.random() * ( window.innerHeight - 125 - popup_h ) );
      popup.style.top = popup_y + "px";
    });

    { // setup title bar
      var popup_title_bar = document.createElement( "div" );
      popup_title_bar.style.position = "absolute";
      popup_title_bar.style.top = "0px";
      popup_title_bar.style.left = "0px";
      popup_title_bar.style.width = "100%";
      popup_title_bar.style.height = "20px";
      popup_title_bar.style.background = "linear-gradient( to bottom, rgb( 32, 32, 32 ), rgba( 24, 24, 24 ) )";
      popup_title_bar.style.border = "1px solid black";
      popup_title_bar.style.userSelect = "none";

      { // add listeners for dragging
        var dragging = false;
        var drag_x_offset = 0, drag_y_offset = 0;
        $( popup_title_bar ).on( 'mousedown', event => {
          dragging = true;
          drag_x_offset = event.clientX - popup_x;
          drag_y_offset = event.clientY - popup_y;
        });
        $( document ).on( 'mouseup', () => { dragging = false; });
        $( document ).on( 'mousemove', event => {
          if( !dragging )
            return;

          popup_x = event.clientX - drag_x_offset;
          popup_y = event.clientY - drag_y_offset;
          popup.style.top = popup_y + "px";
          popup.style.left = popup_x + "px";
        });
      }
    }
    popup.appendChild( popup_title_bar );

    { // add close button to top right
      var popup_close_button = document.createElement( "div" );
      popup_close_button.id = "close_button";
      popup_close_button.style.position = "absolute";
      popup_close_button.style.top = "0px";
      popup_close_button.style.right = "0px";
      popup_close_button.style.width = "20px";
      popup_close_button.style.height = "20px";
      popup_close_button.style.background = "linear-gradient( to bottom, rgb( 64, 0, 0 ), rgba( 24, 0, 0 ) )";
      popup_close_button.style.border = "1px solid black";

      $( popup_close_button ).on( 'click', () => {
        document.body.removeChild( popup );
      });
    }
    popup_title_bar.appendChild( popup_close_button );

    { // add the persons name from the p tag in the about_container
      var popup_name = document.createElement( "h2" );
      popup_name.id = "popup_name";
      popup_name.innerHTML = event.target.nextElementSibling ? event.target.nextElementSibling.innerHTML : "undefined";

      popup_name.style.position = "absolute";
      popup_name.style.top = "10px";
      popup_name.style.right = "10px";
      popup_name.style.color = "rgb( 121, 121, 121 )";
    }
    popup.appendChild( popup_name );

    { // image porting
      var popup_image = event.target;
      if( popup_image.tagName === "P" )
        popup_image = popup_image.previousElementSibling;
      var popup_image_element = document.createElement( "img" );
      popup_image_element.src = popup_image.src ? popup_image.src : "./img/logo.webp";
      popup_image_element.style.position = "relative";
      popup_image_element.style.width = "33%";
      popup_image_element.style.margin = "30px 10px 5px 10px";
      popup_image_element.style.float = "left";
      popup_image_element.style.clear = "both";
    }
    popup.appendChild( popup_image_element );

    { // add the appropriate bio based off of a switch statement from the name
      var popup_name_comparable = event.target.nextElementSibling ? event.target.nextElementSibling.innerHTML : "undefined";
      var popup_bio = document.createElement( "p" );

      { // bio styling
        popup_bio.style.position = "relative";
        popup_bio.style.color = "rgb(144, 144, 144)";
        popup_bio.style.overflowWrap = "break-word";
        popup_bio.style.hyphens = "manual";
        popup_bio.style.margin = "66px 10px 5px 10px";
      }
      

      switch( popup_name_comparable.toLowerCase() ) {
      case "demarre j.":
        popup_bio.innerHTML = "I'm Demarre Johnson, a social entrepreneur who has spent more than 5 years studying business concentrating in accounting, having since done over 8 internships in various fields of finance, accounting, and business. As snap.<span id='col_red'>red</span>'s founder, my years of expertise have columinated into a degree this spring at Babson, 500k+ views on social media, and more than 10 internships.";
        break;
      case "vaness g.":
        popup_bio.innerHTML = "I am Reece Gardner, an AI advocate, entrepreneur, and artist specializing in text-to-image generation and AI Graphic Design. With a year in the generative AI field, I bring expertise in workflow optimization and leadership as a CEO in my own ventures, overseeing a marketing team producing content on platforms like Instagram, TikTok, Snapchat, and YouTube Shorts. At snap.<span id='col_red'>red</span>, I focus on AI-driven graphic designs, business workflow enhancement, and consulting on AI tools to boost efficiency for individuals and organizations.";
        break;
      case "aiden h.":
        popup_bio.innerHTML = "Good " + get_time_of_day() + ", I am the Lead Software Consultant for snap.red. Born and raised in Dallas, I became acclimated with technology from a young age, and started a slow entrance to my coding journey at 16. Nowadays, production has ramped up and I take on everything from scripts, to websites, desktop applications, and everything in between.";
        break;
      case "rhesa t.":
        popup_bio.innerHTML = "My name is Rhesa Teesdale, I am the Founder of Prophet | Envoy, and the Lead Marketing Consultant here at snap.<span id='col_red'>red</span>. I graduated from Babson College this past spring with a double concentration in Entrepreneurship & Consulting and I am currently a graduate student pursuing a Master of Science in Entrepreneurial Leadership at Babson's F.W Graduate School of Business. I have worked in marketing for four years and have accrued over 75 million impressions across all social media platforms. I specialize in creating viral content templates on TikTok & Instagram to drive traffic to your websites.";
        break;
      case "isaiah w.":
        popup_bio.innerHTML = "Hello! I'm Isaiah Williams the Lead Cybersecurity Consultant for snap.<span id='col_red'>red</span>. I manage the cybersecurity in-house as well as analyzing client infrastructure and creating training material. I gained experience in cybersecurity and automation through hands-on experience with web applications and internal networks. This background comes from experience with bug bounty hunting and working for leading corporations.";
        break;
      case "spencer k.":
        popup_bio.innerHTML = "Good day fellow thinkers. I am an active creator, collaborator, and efficiency specialist. I have worked and interned across the medical, machine learning, real estate development and engineering industries. My primary background is in the sciences and iterative engineering design, with my time at Babson leading me to apply many of these skills into small business entities. My most recent ventures have been in cryptocurrency, real estate, and AI. I also am the founder of a small business called QuikStik Shelving. My primary focus with AI is automation and integration.";
        break;
      case "jack f.":
        popup_bio.innerHTML = "I'm Jack Folkman, Lead Business Analyst and Co-founder at snap.<span id='col_red'>red</span>. Hailing from St. Paul, MN, my experience in sports and military leadership, supported by my passion for finance, risk management, and AI applications fuels my intuition for business strategy. I'm passionate about helping companies navigate technological shifts, and snap.<span id='col_red'>red</span>'s advanced services will help you adapt to your evolving needs as you grow.";
        break;
      case "undefined":
        popup_bio.innerHTML = "undefined";
        break;
      default:
        popup_bio.innerHTML = "Congratulations, you found a bug!";
        break;
      }
    }
    popup.appendChild( popup_bio );
  });
});