const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const menuIcon = menuToggle.querySelector("i");

function openMobileMenu() {
  navLinks.classList.add("active");
  menuIcon.classList.remove("fa-bars");
  menuIcon.classList.add("fa-xmark");
  menuToggle.setAttribute("aria-label", "Close navigation menu");
  menuToggle.setAttribute("aria-expanded", "true");
}

function closeMobileMenu() {
  navLinks.classList.remove("active");
  menuIcon.classList.remove("fa-xmark");
  menuIcon.classList.add("fa-bars");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
  menuToggle.setAttribute("aria-expanded", "false");

  // collapse any open "About Us" submenu too
  document.querySelectorAll(".dropdown.open").forEach((dropdown) => {
    dropdown.classList.remove("open");
    const trigger = dropdown.querySelector(":scope > a");
    if (trigger) trigger.setAttribute("aria-expanded", "false");
  });
}

// OPEN / CLOSE MOBILE MENU
menuToggle.addEventListener("click", () => {
  if (navLinks.classList.contains("active")) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
});

// "ABOUT US" DROPDOWN — TAP TO OPEN ON MOBILE, HOVER STILL WORKS ON DESKTOP
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const trigger = dropdown.querySelector(":scope > a");
  if (!trigger) return;

  trigger.setAttribute("aria-expanded", "false");

  trigger.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const isOpen = dropdown.classList.toggle("open");
      trigger.setAttribute("aria-expanded", isOpen);
    }
  });
});

// CLOSE MOBILE MENU WHEN AN ACTUAL DESTINATION LINK IS CLICKED
// (the "About Us" trigger itself is excluded — it's handled above)
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {
  const isDropdownTrigger = item.parentElement.classList.contains("dropdown");
  if (isDropdownTrigger) return;

  item.addEventListener("click", () => {
    closeMobileMenu();
  });
});

// CURRENT YEAR UPDATE
const currentYear = document.getElementById("current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
