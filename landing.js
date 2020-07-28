"use strict";

const gate = document.querySelector(".gate");
const header = document.querySelector("header");

gate.addEventListener("click", enterWork);

function enterWork(e) {
  if (e.target.tagName !== "IMG") {
    return;
  } else {
    gate.classList.add("on");
    header.classList.add("on");
    setTimeout(() => (location.href = "./main.html"), 200);
  }
}
