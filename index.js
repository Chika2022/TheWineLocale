const loading = document.getElementById("loading")
const page = document.getElementById("page")

setTimeout(() => {
  loading.classList.remove("show-flex")
  loading.classList.add("hidden")

  page.classList.remove("hidden")
  page.classList.add("show-block")
}, 3000)

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
