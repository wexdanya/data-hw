"use strict";
const buttons = document.querySelectorAll("#btns>button");
const content = document.getElementById("content");

function setDirection({target}) {
  for (const btn of buttons) {
    btn.removeAttribute("style")
    if (btn === target) {
      btn.style.background = "#4fc2f7"
      btn.style.color = "white"
      btn.style.transition = ".2s ease-in-out"
    }
  }
  if (target.dataset.direction === "column" || target.dataset.direction === "column-reverse") {
    for (const div of content.children) {
      div.style.width = "100%"
    }
  }else{
    for (const div of content.children) {
      div.style.width = "10%"
    }
  }
  content.style.flexDirection = target.dataset.direction
}

for (const btn of buttons) {
  btn.addEventListener('click',setDirection)
}

