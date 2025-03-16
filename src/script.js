window.onload = function() { 
    document.getElementById("ano").innerHTML = new Date().getFullYear(); 
  }

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const blockSize = 10;
const gameSpeed = 100;

let snake = [
  {x: 200, y: 200},
  {x: 190, y: 200},
  {x: 180, y: 200},
];

let direction = "right";

let food = {
  x: Math.floor (Math.random() * (canvasWidth / blockSize)) * blockSize,
  y: Math.floor (Math.random() * (canvasHeight / blockSize)) * blockSize
}

let score = 0;

function drawSnake() {
  snake.forEach((block, index) => {
    ctx.fillStyle = "#44bd34";
    ctx.fillRect(block.x, block.y, blockSize, blockSize);    
  });  
}

function drawFood() {
  ctx.fillStyle = "#44bd34";
  ctx.fillRect(food.x, food.y, blockSize, blockSize);
}

function gameLoop() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  drawSnake();
  drawFood();
}

gameLoop();

