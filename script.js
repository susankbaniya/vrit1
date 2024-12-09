// Select all the cards
const cards = document.querySelectorAll(".card");
const containerHeight = document.querySelector(".card-container").clientHeight;

// Add click event to the card container
document.querySelector(".card-container").addEventListener("click", () => {
  // Loop through each card
  cards.forEach((card) => {
    // Get the current 'top' value
    const currentTop = parseInt(getComputedStyle(card).top, 10);
    
    // Check if the card is within the container
    if (currentTop + 110 < containerHeight) {
      // Move card down by 110px
      card.style.top = `${currentTop + 110}px`;
    } else {
      // Reset card to the top
      card.style.top = "0px";
    }
  });
});
