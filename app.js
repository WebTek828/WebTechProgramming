const design = document.querySelector(".design");
const development = document.querySelector(".development");

let active = "design";

function changeText() {
  if (active === "design") {
    design.classList.remove("show-text");
    design.classList.add("inactive");
    development.classList.add("show-text");
    setTimeout(() => {
      design.classList.remove("inactive");
    }, 800);
    active = "development";
  } else {
    development.classList.remove("show-text");
    development.classList.add("inactive");
    design.classList.add("show-text");
    setTimeout(() => {
      development.classList.remove("inactive");
    }, 800);
    active = "design";
  }
}

setInterval(() => {
  changeText();
}, 3000);

const hamburgerIcon = document.querySelector(".hamburger");
const mobileNav = document.getElementById("mobile-nav");
const mobileNavListItems = document.querySelector(".mobile-nav__list-items");

hamburgerIcon.addEventListener("click", (e) => {
  mobileNav.classList.toggle("show-nav-items");
  mobileNavListItems.classList.toggle("mobile-nav__items-show");
});
