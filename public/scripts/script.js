document.addEventListener("DOMContentLoaded", function () {
  let businessCard = document.querySelector(".business-card");
  let flipButtons = document.querySelectorAll(".flip-button");

  flipButtons.forEach(button => {
      button.addEventListener("click", function () {
          businessCard.classList.toggle("flipped");
      });
  });
});
