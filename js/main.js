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
function show_paragraph( num ) {
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

var about_containers = document.querySelectorAll( ".about_container" );
var about_container = document.getElementById( "about" );
var about_top = document.getElementById( "about_top" );
var about_bottom = document.getElementById( "about_bottom" );
about_containers.forEach( container => {
  const about_popup = document.createElement("div");
  let timeout;

  container.addEventListener( "mouseover", function() {
    clearTimeout( timeout );

    if( container.innerText === "Demarre J." )
      about_popup.innerHTML = "<p>My name is Demarre Johnson, a proud Texan who ventured to Babson College to run track, while also “chasing” (haha get it?) my dream of creating entrepreneurial opportunities for those in need. As founder of snap.<span id='col_red'>red</span>, my first step in reaching this goal in launching this venture is helping professional services companies leverage cutting edge technology. As a graduating senior studying Accounting Analytics at Babson College, my extroverted personality has grown my reach to over 500k views across various social media channels; while also affording me multiple tech analyst roles at the largest accounting firm in the world (PwC).</p>";
    else if( container.innerText === "Vaness G." )
      about_popup.innerHTML = "<p>I am Reece Gardner, a passionate advocate for Artificial Intelligence, a seasoned entrepreneur, and an AI artist with specializations in text-to-image generation and AI Graphic Design. With over a year of intensive exploration into the generative AI space and its applications in workflow optimization, I offer a unique and versatile skill set. My expertise also spans in leadership as a CEO managing a marketing team and strategic content creation across platforms like Instagram, TikTok, Snapchat, and YouTube Shorts. At snap.<span id='col_red'>red</span>, my primary objective is to seamlessly integrate uniquely tailored AI-generated graphic designs, optimize business workflows  and I also look to serve as a consultant on the effective implementation of AI tools to enhance efficiency, both at an individual and organizational level.</p>";
    else if( container.innerText === "Aiden H." )
      about_popup.innerHTML = "<p>Good " + get_time_of_day() + ", I am the Lead Software Consultant for snap.<span id='col_red'>red</span>. Born and raised in Dallas, I became acclimated with technology from a young age, and started a slow entrance to my coding journey at 16. Nowadays, production has ramped up and I take on everything from scripts, to websites, to desktop applications, and everything in between.</p>";
    else if( container.innerText === "Rhesa T." )
      about_popup.innerHTML = "<p>My name is Rhesa Teesdale, I am the CEO/Founder of Prophet | Envoy, and the Lead Marketing Consultant here at snap.<span id='col_red'>red</span>. Born and raised in Boston, MA, I graduated from Babson College this past spring with a double concentration in Entrepreneurship & Consulting and I am currently a graduate student pursuing a Master of Science in Management in Entrepreneurial Leadership at Babson’s F.W Graduate School of Business. I have worked in marketing for four years and have accrued more than 75 million+ impressions across multiple social media platforms for clothing companies, TikTok personalities, technology companies, and other businesses. I specialize in creating viral content templates on TikTok & Instagram and user-generated content on TikTok to drive traffic to your websites.</p>";
    else if( container.innerText === "Isaiah W." )
      about_popup.innerHTML = "<p>Hello! I’m Isaiah Williams the Lead Cybersecurity Consultant for snap.<span id='col_red'>red</span>. I manage the cybersecurity for snap.<span id='col_red'>red</span> as well as analyzing client infrastructure and creating training material. I gained experience in cybersecurity and automation through hands on experience with web applications and internal networks. This background comes from experience with bug bounty hunting and working for leading corporations.</p>";
    else if( container.innerText === "Spencer K." )
      about_popup.innerHTML = "<p>Good day fellow thinkers. I am an active creator, collaborator, and efficiency specialist. I have worked and interned across the medical, machine learning, real estate development and engineering industries. My primary background is in the sciences and iterative engineering design, with my time at Babson leading me to apply many of these skills into small business entities. My most recent ventures have been in cryptocurrency, real estate, and AI. I also am the founder of a small business called QuikStik Shelving. My primary focus with AI is automation and integration.</p>";
    else if( container.innerText === "Jack F." )
      about_popup.innerHTML = "<p>My name is Jack Folkman, and I am the Lead business analyst, sales, and marketing strategist at snap.<span id='col_red'>red</span>. Hailing from St. Paul, MN, my intuition and foresight, vitalized through sport and military leadership, has allowed me to lead several independent endeavors of my own. My passion is helping companies unlock new potential that enables them to thrive in the age of many technological unknowns. Because your business is unique, our advanced services at snap.<span id='col_red'>red</span> will curate to your evolving needs in emerging applications as your company grows.</p>";
      
    about_popup.style.position = "absolute";
    
    if( container.parentElement === about_top )
      about_popup.style.top = "0px";
    else
      about_popup.style.top = about_top.offsetHeight + "px";

    about_popup.style.left = container.offsetLeft + "px";
    about_popup.style.width = container.offsetWidth + "px";
    about_popup.style.height = container.offsetHeight + "px";
    about_popup.style.overflowY = 'auto';
    about_popup.style.backgroundColor = "rgba( 24, 24, 24, .777 )";
    about_popup.style.color = 'rgba( 255, 255, 255, .777 )';
    about_popup.style.textAlign = "center";
    about_popup.style.display = "flex";
    about_popup.style.flexDirection = "column";
    about_popup.style.alignItems = "center";
    about_popup.style.justifyContent = "center";
    
    about_popup.style.fontSize = "calc( 0.5vw + 0.5vh )";

    about_popup.style.zIndex = "999";

    about_container.appendChild( about_popup );
  });

  container.addEventListener( "mouseleave", function() {
    timeout = setTimeout( () => {
      if( about_popup )
        about_popup.remove();
    }, 500 );
  });
});

// background highlight
var scroll_percent_mapped = 0;
var background = document.getElementById( "background" );
function move_highlight( ) {
  const top = -105;
  const bottom = 3100 - window.innerHeight;
  const scroll_percent = ( window.scrollY - top ) / ( bottom - top ) * 100;
  scroll_percent_mapped = scroll_percent * ( window.innerHeight / 100 ) + window.scrollY;
  background.style.backgroundImage = 'linear-gradient( to bottom, rgba( 255, 255, 255, 0 ) ' + ( scroll_percent_mapped - 100 ) + 'px, rgba( 255, 255, 255, .777 ) ' + scroll_percent_mapped + 'px, rgba( 255, 255, 255, 0 ) ' + ( scroll_percent_mapped + 100 ) + 'px ), url("./img/background.webp")';
}
window.addEventListener( "scroll", move_highlight );

const delay = ms => new Promise( res => setTimeout( res, ms ) );