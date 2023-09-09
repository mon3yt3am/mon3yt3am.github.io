// set <html> tag style height to window size on load and resize
document.documentElement.style.height = window.innerHeight + "px";
window.addEventListener( "resize", function() {
  document.documentElement.style.height = window.innerHeight + "px";
} );