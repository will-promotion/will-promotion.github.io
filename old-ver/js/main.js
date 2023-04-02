"use strict";

window.addEventListener("DOMContentLoaded", function () {
  // burger-menu
  const burger = document.querySelector(".js-burger-menu");
  const nav = document.querySelector(".js-menu");
  const item = document.querySelectorAll(".js-menu-item");

  burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    nav.classList.toggle("panelactive");
  });

  for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", function () {
      burger.classList.remove("active");
      nav.classList.remove("panelactive");
    });
  }
});
