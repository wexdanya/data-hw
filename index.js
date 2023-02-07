"use strict";
const buttons = document.querySelectorAll("#btns>button");
const content = document.getElementById("content");

function setDirection({target}) {
  for (const btn of buttons) {
      btn.removeAttribute("class","active")
    if (btn === target) {
      btn.setAttribute("class","active")
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

