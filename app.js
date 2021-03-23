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
