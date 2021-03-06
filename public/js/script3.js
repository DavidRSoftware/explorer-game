const AMOUNT_OF_SQUARES = 100;
const AMOUNT_PER_ROW = 10; //has to divide evenly into AMOUNT_OF_SQUARES
const AMOUNT_OF_ROWS = AMOUNT_OF_SQUARES / AMOUNT_PER_ROW;
const LOCATION_OF_START = 0;
const ARRAY_OF_LEFT = getLeftArray();
const ARRAY_OF_RIGHT = getRightArray();
const ARRAY_OF_DOWN = getDownArray();

const getDownArray = () => {
  const array = [];
  for (let i = 1; i <= AMOUNT_PER_ROW; i++) {
    array.push(AMOUNT_OF_SQUARES - i);
  }
  return array;
}

const getRightArray = () => {
  const array = [AMOUNT_PER_ROW - 1];
  let temp = AMOUNT_PER_ROW - 1;
  for (let i = temp; i < AMOUNT_OF_SQUARES; i++) {
    if (i === temp + AMOUNT_PER_ROW) {
      array.push(i);
      temp = i;
    }
  }
  return array;
}

const getLeftArray = () => {
  const array = [0];
  for (let i = 1; i < AMOUNT_OF_SQUARES; i++) {
    if (i % AMOUNT_PER_ROW === 0) array.push(i);
  }
  return array;
}

window.addEventListener('load', () => {
  $("#welcomeModal").modal();
  addText("Welcome to the explorer game");
  document.getElementById("goldCoins").innerText = gold;
  document.getElementById("lifePoints").innerText = life;
  document.getElementById("attackPoints").innerText = attack;
  document.getElementById("defensePoints").innerText = defense;
  generateBoard();
});

const generateBoard = () => {
  const display = document.getElementById("exploreDisplay");
  for (let i = 0; i < AMOUNT_OF_SQUARES; i++) {
    if (i === LOCATION_OF_START) {
      let guySquare = document.createElement("div");
      guySquare.className = "square guy";
      guySquare.id = `square${i + 1}`;
      display.appendChild(guySquare);
      continue;
    }
    let grassSquare = document.createElement("div");
    grassSquare.className = "square grass";
    grassSquare.id = `square${i + 1}`;
    display.appendChild(grassSquare);
  }
}

const items = document.getElementsByClassName("square");
let current = LOCATION_OF_START;
let future = LOCATION_OF_START;
const moveCharacter = (e) => {
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
let defense = 0;
let haveSword = false;
let haveShield = false;
const monsterOne = {
  life: 30,
  attack: 20,
  gold: 20
};

const action = () => {
  let random = Math.floor(Math.random() * 5);//generates a random value between 0 and 4
  if (random === 0) {
    stuffStore();
  } else if (random === 1) {
    fight();
  }
}

let monster;
const fight = () => {
  document.getElementById("combat-display").classList.remove("d-none");
  addText("You are in a fight");
  monster = JSON.parse(JSON.stringify(monsterOne));
}

const continueFight = () => {
  addText("You attack");
  monster.life -= attack;
  if (monster.life <= 0) {
    addText("You defeat the monster");
    document.getElementById("combat-display").classList.add("d-none");
    gold += monster.gold;
    addText(`You have gained ${monster.gold} gold coins!`);
    document.getElementById("goldCoins").innerText = gold;
    return;
  }
  addText("The monster attacks");
  life -= monster.attack - defense;
  document.getElementById("lifePoints").innerText = life;
  if (life <= 0) {
    addText("You are defeated");
  }
}

const stuffStore = () => {
  document.getElementById("store-display").classList.remove("d-none");
  addText("You have entered the store");
}

const purchase = (e) => {
  console.log(e.target.getAttribute("data-item-name"));
  switch (e.target.getAttribute("data-item-name")) {
    case "sword":
      if (haveSword) {
        addText("You cannot purchase more than one sword");
      } else if (gold - 10 < 0) {
        addText("You do not have enough money to purchase this item");
      } else {
        addText("You have purchased a sword for 10 gold coins");
        gold -= 10;
        document.getElementById("goldCoins").innerText = gold;
        attack += 10;
        document.getElementById("attackPoints").innerText = attack;
        haveSword = true;
      }
      break;
    case "shield":
      if (haveShield) {
        addText("You cannot purchase more than one shield");
      } else if (gold - 10 < 0) {
        addText("You do not have enough money to purchase this item");
      } else {
        addText("You have purchased a shield for 10 gold coins");
        gold -= 10;
        document.getElementById("goldCoins").innerText = gold;
        defense += 10;
        document.getElementById("defensePoints").innerText = defense;
        haveShield = true;
      }
      break;
    default:
      document.getElementById("store-display").classList.add("d-none");
      addText("You have left the store");
  }
}

const addText = (text) => {
  const display = document.getElementById("theTextArea");
  display.value = display.value + text + "\n";
  display.scrollTop = display.scrollHeight;
}
