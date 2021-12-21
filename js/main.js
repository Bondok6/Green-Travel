"use strict";

function mobileMenu() {
  const menuIcon = document.querySelector(".menu");
  const exitIcon = document.querySelector(".nav-exit");
  const navList = document.querySelector(".nav-list");
  const navLinks = document.querySelectorAll(".nav-item");
  const nav = document.querySelector(".nav-bottom");

  const openMenu = () => {
    nav.classList.add("nav-active");
    navList.classList.add("nav-active");
    menuIcon.style.visibility = "hidden";
  };

  const closeMenu = () => {
    nav.classList.remove("nav-active");
    navList.classList.remove("nav-active");
    menuIcon.style.visibility = "unset";
  };

  menuIcon.addEventListener("click", openMenu);
  exitIcon.addEventListener("click", closeMenu);

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

mobileMenu();
