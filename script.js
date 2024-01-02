var homeLink = document.querySelector("nav ul li a[href='#home']");
var featuresLink = document.querySelector("nav ul li a[href='#features']");
var sourcesLink = document.querySelector("nav ul li a[href='#sources']");

// Get the sections
var homeSection = document.getElementById("home");
var featuresSection = document.getElementById("features");
var sourcesSection = document.getElementById("sources");

// Add a click event listener to the home link
homeLink.addEventListener("click", function(event) {
  // Prevent the default behavior of the link
  event.preventDefault();
  // Scroll to the home section
  homeSection.scrollIntoView({behavior: "smooth"});
});

// Add a click event listener to the features link
featuresLink.addEventListener("click", function(event) {
  // Prevent the default behavior of the link
  event.preventDefault();
  // Scroll to the features section
  featuresSection.scrollIntoView({behavior: "smooth"});
});

// Add a click event listener to the sources link
sourcesLink.addEventListener("click", function(event) {
  // Prevent the default behavior of the link
  event.preventDefault();
  // Scroll to the sources section
  sourcesSection.scrollIntoView({behavior: "smooth"});
});