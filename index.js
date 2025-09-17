// Select all nav items
const navItems = document.querySelectorAll(
  "#my-home, #my-project, #my-teams, #my-about, #my-contact"
); // Default active (home)
document.querySelector("#my-home").classList.add("active");

// Attach click event to each nav item
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove active class from all
    navItems.forEach((nav) => nav.classList.remove("active"));
    // Add active class to clicked one
    item.classList.add("active");
  });
});
