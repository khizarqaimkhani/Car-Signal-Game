let car = document.getElementById("car");
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");
let music = document.getElementById("bgMusic");

let currentLeft = 50;
let moveCar;
let signalState = "red";

function startGame() {
  alert("🚦 Game started! Watch the signal carefully.");

  
  setTimeout(() => {
    green.style.background = "limegreen";
    signalState = "green";
    startCar();
  }, 1000);

  
  setTimeout(() => {
    green.style.background = "gray";
    yellow.style.background = "yellow";
    signalState = "yellow";
  }, 5000);

  
  setTimeout(() => {
    yellow.style.background = "gray";
    red.style.background = "red";
    signalState = "red";
  }, 8000);
}

function startCar() {
    music.play(); 
  moveCar = setInterval(() => {
    currentLeft += 5;
    car.style.left = currentLeft + "px";

    if (signalState === "red") {
        music.pause();
      clearInterval(moveCar);
      alert("🚨 You broke the red signal!");
    }

    if (currentLeft > window.innerWidth - 150) {
      clearInterval(moveCar);
      alert("🏁 You reached the end safely!");
    }
  }, 50);
}