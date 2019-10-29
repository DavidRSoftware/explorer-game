const selectColor = document.getElementById("color");
const display = document.getElementById("color-display");
function changeColor() {
  console.log(selectColor.value);
  display.style.background = selectColor.value;
}

const selectShape = document.getElementById("shape");
function changeShape() {
  console.log(selectShape.value);
  const myDisplayClasses = display.classList;
  switch (selectShape.value) {
    case "rectangle":
        myDisplayClasses.add("rectangle");
        myDisplayClasses.remove("circle");
        myDisplayClasses.remove("square");
        myDisplayClasses.remove("oval");
      break;
    case "circle":
        myDisplayClasses.add("circle");
        myDisplayClasses.remove("rectangle");
        myDisplayClasses.remove("square");
        myDisplayClasses.remove("oval");
      break;
    case "square":
        myDisplayClasses.add("square");
        myDisplayClasses.remove("rectangle");
        myDisplayClasses.remove("circle");
        myDisplayClasses.remove("oval");
      break;
    case "oval":
        myDisplayClasses.add("oval");
        myDisplayClasses.remove("rectangle");
        myDisplayClasses.remove("circle");
        myDisplayClasses.remove("square");
      break;
  }
}
