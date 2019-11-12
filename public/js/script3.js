// The function getRandomIntInclusive(min, max) is taken from the mozilla developer network website at
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const AMOUNT_OF_SQUARES = 100;
const AMOUNT_PER_ROW = 10; //has to divide evenly into AMOUNT_OF_SQUARES
const AMOUNT_OF_ROWS = AMOUNT_OF_SQUARES / AMOUNT_PER_ROW;
const LOCATION_OF_START = 0;
const ARRAY_OF_LEFT = getLeftArray();
const ARRAY_OF_RIGHT = getRightArray();
const ARRAY_OF_DOWN = getDownArray();

function getDownArray() {
  let array = [];
  for (let i = 1; i <= AMOUNT_PER_ROW; i++) {
    array.push(AMOUNT_OF_SQUARES - i);
  }
  return array;
}

function getRightArray() {
  let array = [AMOUNT_PER_ROW - 1];
  let temp = AMOUNT_PER_ROW - 1;
  for (let i = temp; i < AMOUNT_OF_SQUARES; i++) {
    if (i == temp + AMOUNT_PER_ROW) {
      array.push(i);
      temp = i;
    }
  }
  console.log(array);

  return array;
}

function getLeftArray() {
  let array = [0];
  for (let i = 1; i < AMOUNT_OF_SQUARES; i++) {
    if (i % AMOUNT_PER_ROW == 0) array.push(i);
  }
  return array;
}

window.onload = function() {
  $("#welcomeModal").modal();
  addText("Welcome to the explorer game");
  document.getElementById("goldCoins").innerText = gold;
  document.getElementById("lifePoints").innerText = life;
  document.getElementById("attackPoints").innerText = attack;
  generateBoard();
};

function generateBoard() {
  const display = document.getElementById("exploreDisplay");
  for (let i = 0; i < AMOUNT_OF_SQUARES; i++) {
    if (i === LOCATION_OF_START) {
      const guySquare = document.createElement("div");
      guySquare.className = "square guy";
      guySquare.id = "square" + (i + 1);
      display.appendChild(guySquare);
      continue;
    }
    const grassSquare = document.createElement("div");
    grassSquare.className = "square grass";
    grassSquare.id = "square" + (i + 1);
    display.appendChild(grassSquare);
  }
}

const items = document.getElementsByClassName("square");
let current = LOCATION_OF_START;
let future = LOCATION_OF_START;
function moveCharacter(e) {
  switch (e.target.className) {
    case "triangleUp":
      if (current < AMOUNT_PER_ROW) {
        break;
      }
      future -= AMOUNT_PER_ROW;
      addText("You have moved up");
      action();
      break;
    case "triangleLeft":
      if (ARRAY_OF_LEFT.includes(current)) {
        break;
      }
      future -= 1;
      addText("You have moved to the left");
      action();
      break;
    case "triangleRight":
      if (ARRAY_OF_RIGHT.includes(current)) {
        break;
      }
      future += 1;
      addText("You have moved to the right");
      action();
      break;
    case "triangleDown":
      if (ARRAY_OF_DOWN.includes(current)) {
        break;
      }
      future += AMOUNT_PER_ROW;
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
let life = 100;
let attack = 10;
const monsterOne = {
  life: 30,
  attack: 10
};

function action() {
  let random = getRandomIntInclusive(1, 5);
  if (random == 1) {
    stuffStore();
  } else if (random == 2) {
    fight();
  }
}

let monster;
function fight() {
  document.getElementById("combat-display").classList.remove("d-none");
  addText("You are in a fight");
  monster = JSON.parse(JSON.stringify(monsterOne));
}

function continueFight() {
  addText("You attack");
  monster.life -= attack;
  if (monster.life <= 0) {
    addText("You defeat the monster");
    document.getElementById("combat-display").classList.add("d-none");
    gold += 20;
    addText(
      "You have gained 20 gold coins! You now have " + gold + " gold coins."
    );
    document.getElementById("goldCoins").innerText = gold;
    return;
  }
  addText("The monster attacks");
  life -= 10;
  document.getElementById("lifePoints").innerText = life;
  if (life <= 0) {
    addText("You are defeated");
  }
}

function stuffStore() {
  document.getElementById("store-display").classList.remove("d-none");
}

function purchase(e) {
  console.log(e.target.getAttribute("data-item-name"));
  
  switch (e.target.getAttribute("data-item-name")) {
    case "sword":
      break;
    case "shield":
      break;
    default:
      document.getElementById("store-display").classList.add("d-none");
  }
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
