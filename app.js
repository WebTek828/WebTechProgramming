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

const hamburgerIcon = document.querySelector(".hamburger");
const mobileNav = document.getElementById("mobile-nav");
const mobileNavListItems = document.querySelector(".mobile-nav__list-items");

hamburgerIcon.addEventListener("click", (e) => {
  mobileNav.classList.toggle("show-nav-items");
  mobileNavListItems.classList.toggle("mobile-nav__items-show");
});

const nav = document.querySelector(".nav");

const home = document.querySelector(".home");
let timer;
const callBack = (entries, observer) => {
  const [entry] = entries;
  if (entry.isIntersecting) {
    nav.classList.remove("sticky-nav");
    timer = setInterval(() => {
      changeText();
    }, 3000);
  } else {
    nav.classList.add("sticky-nav");
    clearInterval(timer);
  }
};
const observer = new IntersectionObserver(callBack, {
  root: null,
  threshold: 0.2,
});

observer.observe(home, observer);

//navigate with nav items

const projectSection = document.querySelector(".projects-section");
const aboutSection = document.querySelector(".about-section");
const formSection = document.querySelector(".form-section");

const sections = [
  home,
  projectSection,
  aboutSection,
  formSection,
  home,
  projectSection,
  aboutSection,
  formSection,
];

const navItems = document.querySelectorAll(".nav__list-item");

navItems.forEach((navItem, i) => {
  navItem.addEventListener("click", () => {
    mobileNav.classList.remove("show-nav-items");
    mobileNavListItems.classList.remove("mobile-nav__items-show");
    sections[i].scrollIntoView({ behavior: "smooth" });
  });
});
