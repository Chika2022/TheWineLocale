var navlinks = document.getElementById("navlinks")

function showmenu() {
  navlinks.style.display = "block"

  setTimeout(() => {
    navlinks.style.right = "0px"
  }, 500)
}

function hidemenu() {
  navlinks.style.right = "-200px"

  setTimeout(() => {
    navlinks.style.display = "none"
  }, 500)
}
