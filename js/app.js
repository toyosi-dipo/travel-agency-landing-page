const leftBtn = document.querySelector("#left-btn"),
  rightBtn = document.querySelector("#right-btn"),
  cards = document.querySelectorAll(".card");
const menuBtn = document.querySelector("#menu-btn"),
  menuBar = document.querySelector("#menu-bar");

let clickCount = 0;

// menu bar handler
menuBtn.addEventListener("click", handleMenu);

// translation event listeners
rightBtn.addEventListener("click", scrollRight);
leftBtn.addEventListener("click", scrollLeft);
window.addEventListener("resize", resetScroll);

// FUNCTIONS

function handleMenu() {
  this.classList.toggle("open");
  menuBar.classList.toggle("open");
}

function scrollRight() {
  // if clickCount > 0, that means cards have been translated already
  if (clickCount > 0) return;

  // translate all cards
  cards.forEach((card) => {
    // check screen width
    if (window.innerWidth < 1350) {
      card.style.transform = "translateX(-200%)";
    } else {
      card.style.transform = "translateX(-100%)";
    }
  });

  // increase clickCount
  clickCount = 1;
}

function scrollLeft() {
  // if clickCount > 0, that means cards have been translated already
  if (clickCount === 0) return;

  // translate all cards
  cards.forEach((card) => {
    // check screen width
    if (window.innerWidth < 1350) {
      card.style.transform = "translateX(0)";
    } else {
      card.style.transform = "translateX(0)";
    }
  });

  // set clickCount back to 0
  clickCount = 0;
}

function resetScroll() {
  cards.forEach((card) => {
    // if screen is less than lg screen as defined, reset cards position
    if (window.innerWidth < 1021) {
      card.style.transform = "translateX(0)";

      // set clickCount back to 0
      clickCount = 0;
    }
  });
}
