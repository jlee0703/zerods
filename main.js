"use strict";

const hamButton = document.querySelector(".hamButton");
const nav = document.querySelector("nav");

hamButton.addEventListener("click", hamWork);

function hamWork(e) {
  if (!nav.classList.contains("on")) {
    nav.classList.add("on");
    hamButton.classList.add("active");
  } else {
    nav.classList.remove("on");
    hamButton.classList.remove("active");
  }
}
