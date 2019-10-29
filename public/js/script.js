const selectColor = document.getElementById("color");
const display = document.getElementById("color-display");
function changeColor() {
  console.log(selectColor.value);
  display.style.background = selectColor.value;
}

const selectShape = document.getElementById("shape");
function changeShape() {
  console.log(selectShape.value);
  switch (selectShape.value) {
    case "rectangle":
      display.style.width = "200px";
      display.style.borderRadius = "0px";
      display.style.height = "100px";
      display.style.borderTop = "0px";
      display.style.borderBottom = "0px";
      display.style.borderLeft = "0px";
      display.style.borderRight = "0px";
      break;
    case "circle":
      display.style.width = "100px";
      display.style.borderRadius = "50px";
      display.style.height = "100px";
      display.style.borderTop = "0px";
      display.style.borderBottom = "0px";
      display.style.borderLeft = "0px";
      display.style.borderRight = "0px";
      break;
    case "square":
      display.style.width = "100px";
      display.style.borderRadius = "0px";
      display.style.height = "100px";
      display.style.borderTop = "0px";
      display.style.borderBottom = "0px";
      display.style.borderLeft = "0px";
      display.style.borderRight = "0px";
      break;
    case "oval":
      display.style.width = "200px";
      display.style.borderRadius = "50px";
      display.style.height = "100px";
      display.style.borderTop = "0px";
      display.style.borderBottom = "0px";
      display.style.borderLeft = "0px";
      display.style.borderRight = "0px";
      break;
    case "triangleUp":
      display.style.width = "0px";
      display.style.height = "0px";
      display.style.borderRadius = "0px";
      display.style.borderTop = "0px";
      display.style.borderBottom = "100px solid #6BFFC6";
      display.style.borderLeft = "50px solid transparent";
      display.style.borderRight = "50px solid transparent";
      break;
    case "triangleDown":
      display.style.width = "0px";
      display.style.height = "0px";
      display.style.borderRadius = "0px";
      display.style.borderTop = "100px solid #6BFFC6";
      display.style.borderBottom = "0px";
      display.style.borderLeft = "50px solid transparent";
      display.style.borderRight = "50px solid transparent";
      break;
    case "triangleRight":
      display.style.width = "0px";
      display.style.height = "0px";
      display.style.borderRadius = "0px";
      display.style.borderTop = "50px solid transparent";
      display.style.borderBottom = "50px solid transparent";
      display.style.borderLeft = "100px solid #6BFFC6";
      display.style.borderRight = "0px";
      break;
    case "triangleLeft":
      display.style.width = "0px";
      display.style.height = "0px";
      display.style.borderRadius = "0px";
      display.style.borderTop = "50px solid transparent";
      display.style.borderBottom = "50px solid transparent";
      display.style.borderLeft = "0px";
      display.style.borderRight = "100px solid #6BFFC6";
      break;
  }
}
