window.onload = function() { 
    document.getElementById("ano").innerHTML = new Date().getFullYear(); 
  }

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const blockSize = 20;

const gameSpeed = 100;