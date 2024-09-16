let header = document.querySelector(".header");
let chefs = document.querySelector(".chefs");
let gallery = document.querySelector(".gallery");
let contact = document.querySelector(".contact");

let navItems = document.querySelectorAll(".navbar-nav .nav-item .nav-link");

let sections = [header, chefs, gallery, contact];

// Function to set the active link based on scroll position
function setActiveLink() {
  let scrollPos = window.scrollY + window.innerHeight / 2;

  sections.forEach((section, index) => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navItems.forEach((item) => item.classList.remove("active"));
      navItems[index].classList.add("active");
    }
  });
}

setActiveLink();

// Smoothly scroll to the target section, accounting for a fixed offset
document.querySelectorAll(".navbar a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    const offset = 90;
    const targetPosition =
      targetElement.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});

document.addEventListener("scroll", function () {
  setActiveLink();
});
