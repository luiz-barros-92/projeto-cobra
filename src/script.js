window.onload = function() { 
    document.getElementById("ano").innerHTML = new Date().getFullYear(); 
  }

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const blockSize = 20;
const gameSpeed = 100;

let snake = [
  {x: 200, y: 200},
  {x: 180, y: 200},
  {x: 160, y: 200},
];

let direction = "right";

let food = {
  x: Math.floor (Math.random() * (canvasWidth / blockSize)) * blockSize,
  y: Math.floor (Math.random() * (canvasHeight / blockSize)) * blockSize,
}

let score = 0;