const navBar = document.getElementById("nav-bar");
const hamburgerMenu = document.getElementById("hamburger-menu");

window.addEventListener("click", e => {
  if (e.target.className === "hamburger-menu") {
    hamburgerMenu.style.display = "none";
    navBar.style.display = "flex";
  } else {
    hamburgerMenu.style.display = "flex";
    navBar.style.display = "none";
  }
});

window.addEventListener("keydown", e => {
  const backButton = e.keyCode;
  if (backButton == 27) {
    if (
      (hamburgerMenu.style.display = "none" && (navBar.style.display = "flex"))
    ) {
      hamburgerMenu.style.display = "flex";
      navBar.style.display = "none";
    }
  }
});
