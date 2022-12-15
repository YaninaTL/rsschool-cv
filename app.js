const toggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav_list");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav_link").forEach((n) =>
  n.addEventListener("click", () => {
    toggle.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
