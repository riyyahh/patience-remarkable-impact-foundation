const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const menuIcon = menuToggle.querySelector("i");

// OPEN / CLOSE MOBILE MENU
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");

    menuToggle.setAttribute("aria-label", "Close navigation menu");
  } else {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");

    menuToggle.setAttribute("aria-label", "Open navigation menu");
  }
});

// CLOSE MENU WHEN A NAV LINK IS CLICKED
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("active");

    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");

    menuToggle.setAttribute("aria-label", "Open navigation menu");
  });
});

//ABOUT US DROP DOWN MENU ON MOBILE
const dropdown = document.querySelector(".dropdown");
const dropdownLink = dropdown?.querySelector(":scope > a");

dropdownLink?.addEventListener("click", function (e) {
  if (window.innerWidth <= 768) {
    e.preventDefault();
    dropdown.classList.toggle("open");
  }
});

//CURRENT YEAR UPDATE
const currentYear = document.getElementById("current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
