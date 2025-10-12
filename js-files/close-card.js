// alert("Alhamdulillah, at last we have got the first phase right.!");

const closeCard = document.querySelector(".close-card");
const cardContainer = document.querySelector(".mobile-card");

closeCard.addEventListener("click", () => {
  console.log("Card is closed");
  cardContainer.style.display = "none";
});
