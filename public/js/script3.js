// The function getRandomIntInclusive(min, max) is taken from the mozilla developer network website at
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

window.onload = function() {
  $("#welcomeModal").modal();
  addText("Welcome to the explorer game");
};

let current = 0;
let future = 0;
const items = document.getElementsByClassName("square");
function moveCharacter(e) {
  switch (e.target.className) {
    case "triangleUp":
      if (current == 0 || current == 1 || current == 2) {
        break;
      }
      future -= 3;
      addText("You have moved up");
      action();
      break;
    case "triangleLeft":
      if (current == 0 || current == 3 || current == 6) {
        break;
      }
      future -= 1;
      addText("You have moved to the left");
      action();
      break;
    case "triangleRight":
      if (current == 2 || current == 5 || current == 8) {
        break;
      }
      future += 1;
      addText("You have moved to the right");
      action();
      break;
    case "triangleDown":
      if (current == 6 || current == 7 || current == 8) {
        break;
      }
      future += 3;
      addText("You have moved down");
      action();
      break;
  }
  items[current].classList.remove("guy");
  items[current].classList.add("grass");
  current = future;
  items[current].classList.remove("grass");
  items[current].classList.add("guy");
}

let gold = 0;
function action() {
  let random = getRandomIntInclusive(1, 5);
  if (random == 1) {
    gold += 20;
    addText(
      "You have found 20 gold coins! You now have " + gold + " gold coins."
    );
  } else if (random == 2) {
    fight();
  }
}

function fight() {
  addText("You are in a fight!");
}

//Returns a random integer between min (included) and max (included)
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addText(text) {
  const display = document.getElementById("theTextArea");
  display.value = display.value + text + "\n";
  display.scrollTop = display.scrollHeight;
}
