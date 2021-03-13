window.onload = function() {
  var pageTitle = document.title;
};
window.onload = function() {
  var pageTitle = document.title;
  var attentionMessage = "Hey, come back!";
};
window.onload = function() {
  var pageTitle = document.title;
  var attentionMessage = "Hey, come Back!";

  document.addEventListener("visibilitychange", function(e) {
    console.log(document.hidden);
  });
};
window.onload = function() {
  var pageTitle = document.title;
  var attentionMessage = "Hey, come back!";
  document.addEventListener("visibilitychange", function(e) {
    var isPageActive = !document.hidden;

    if (!isPageActive) {
      document.title = attentionMessage;
    } else {
      document.title = pageTitle;
    }
  });
};

// Get the container element
var btnContainer = document.getElementById("myDIV");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
