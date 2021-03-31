const design = document.querySelector(".design");
const development = document.querySelector(".development");
const backToHomeBtn = document.querySelector(".back-home");

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
    backToHomeBtn.classList.remove("back-home-show");
    nav.classList.remove("sticky-nav");
    timer = setInterval(() => {
      changeText();
    }, 3000);
  } else {
    backToHomeBtn.classList.add("back-home-show");
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

//back to home page

backToHomeBtn.addEventListener("click", () => {
  home.scrollIntoView({
    behavior: "smooth",
  });
});

const formBtn = document.querySelector(".form__btn");
const formInputs = document.querySelectorAll(".form__input");
const formMsg = document.querySelector(".form__message");

const firebaseConfig = {
  apiKey: "AIzaSyDe1m_at0OAtT-61-91pC2fi5UBm2nLmyI",
  authDomain: "portfolio-form-48ba2.firebaseapp.com",
  projectId: "portfolio-form-48ba2",
  storageBucket: "portfolio-form-48ba2.appspot.com",
  messagingSenderId: "432855738729",
  appId: "1:432855738729:web:a14031910233b325dff5f8",
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

let respMsg;

formBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    const name = formInputs[0].value;
    const email = formInputs[1].value;
    const msg = formMsg.value;

    const resp = await db.collection("form-message").add({
      name,
      email,
      msg,
    });
    formInputs[0].value = "";
    formInputs[1].value = "";
    formMsg.value = "";
    respMsg =
      "Your message has been submitted successfully.We will get back to you as soon as possible.";
  } catch (err) {
    respMsg = err;
  }
  displayMsg();
});

const displayMsgContainer = document.querySelector(
  ".display-message-container"
);

function displayMsg() {
  displayMsgContainer.classList.add("display-message-show");
}

displayMsgContainer.addEventListener("click", (e) => {
  displayMsgContainer.classList.remove("display-message-show");
});
