const canvas = document.getElementById ("game");
const ctx = canvas.getContext("2d");

const ground = new Image();
ground.src = "img/ground.png";

// https://www.iconfinder.com/

const foodImg = new Image();
foodImg.src = "img/food.png"; 

let box = 32;
let score = 0;

let food = {
	x: Math.floor((Math.random() * 17 + 1)) * box,
	y: Math.floor((Math.random() * 15 + 3)) * box,
};

function drawGame() {
    ctx.drawImage (field, 0, 0);
}

let game = setInterval(dawGame, 100);
