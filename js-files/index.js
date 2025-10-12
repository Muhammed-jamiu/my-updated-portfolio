// Select all nav items
const navItems = document.querySelectorAll(
  "#my-home, #my-project, #my-teams, #my-about, #my-contact"
); // Default active (home)
document.querySelector("#my-home").classList.add("active");

// Attach click event to each nav item
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("item-section", item);
    // Remove active class from all
    navItems.forEach((nav) => {
      nav.classList.remove("active");
      console.log("Nav-section", nav);
    });
    // Add active class to clicked one
    item.classList.add("active");
  });
});

// Call to Action btn section
ctaBtn = document.querySelectorAll("#cta-btn");
modalBtn = document.querySelector(".modal-btn");
modalContainer = document.querySelector(".modal-container");

ctaBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalContainer.classList.add("show-modal");
  });
});

// closing modal Container
modalBtn.addEventListener("click", () => {
  // alert("yes");
  modalContainer.style.display = "none";
});
