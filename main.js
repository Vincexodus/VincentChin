//Toggle Menu
var navLinks = document.getElementById("navLinks");

function showMenu()
{
  document.getElementsByClassName("fa fa-times")[0].style.color = "#151515";
  // console.log (closeBtn)
  navLinks.style.right = "0";
  // closeBtn.style.color = "#151515";
}
function hideMenu()
{
  navLinks.style.right = "-175px"
}

// window.onscroll = function() {stickyNav()};
var navbar = document.getElementsByClassName("head")[0];
// Get the offset position of the navbar
var sticky = navbar.offsetTop;
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

