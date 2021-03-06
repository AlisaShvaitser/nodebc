const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

function start() {window.location.reload()	};

function stopMusic () {
	bgMusic.volume = 0;
 };

function stopSounds () {
	eatSound.volume = 0;
	endSound.volume = 0;
 };


const ground = new Image();
ground.src = "img/ground.png";

const foodImg = new Image();
foodImg.src = "img/food.png";

const gameOver = new Image();
gameOver.src = "img/game over.png";

const bgMusic = new Audio();
bgMusic.src = "audio/bgMusic.mp3";

const eatSound = new Audio();
eatSound.src = "audio/eatSound.wav";

const endSound = new Audio();
endSound.src = "audio/endSound.wav";



let box = 32; //размер квадратика на поле

 let score = 0; //хранит счет

let food = {
	x: Math.floor((Math.random() * 17 + 1)) * box,
	y: Math.floor((Math.random() * 15 + 2)) * box,
};

let snake = []; //массив. Начальное положение.
snake[0] = {
	x: 12 * box,
	y: 9 * box
};

document.addEventListener("keydown", direction);

let dir;

function direction(event) {
	if(event.keyCode == 37 && dir != "right")
		dir = "left";
	else if(event.keyCode == 38 && dir != "down")
		dir = "up";
	else if(event.keyCode == 39 && dir != "left")
		dir = "right";
	else if(event.keyCode == 40 && dir != "up")
		dir = "down";
}

function eatTail(head, arr) {
	for(let i = 0; i < arr.length; i++) {
		if(head.x == arr[i].x && head.y == arr[i].y)
		{
			clearInterval(game);
			ctx.drawImage(gameOver, 0, 0);
			bgMusic.pause(); 
			endSound.play();}
		
	}
}



function drawGame() {
	ctx.drawImage(ground, 0, 0);

	ctx.drawImage(foodImg, food.x, food.y);

	bgMusic.play();

	for(let i = 0; i < snake.length; i++) {
		ctx.fillStyle = i == 0 ? "green" : "red";
		ctx.fillRect(snake[i].x, snake[i].y, box, box);
	}

	ctx.fillStyle = "green";
	ctx.font = "50px Arial";
	ctx.fillText(score, box * 2.5, box * 1.7);

	let snakeX = snake[0].x;
	let snakeY = snake[0].y;

	if(snakeX == food.x && snakeY == food.y) {
		score++;
		eatSound.play();
		food = {
			x: Math.floor((Math.random() * 17 + 1)) * box,
			y: Math.floor((Math.random() * 15 + 2)) * box,
		};
	} else
		snake.pop();
	
	

	if(snakeX < box || snakeX > box * 23
		|| snakeY < box || snakeY > box * 17) {
		clearInterval(game);
		ctx.drawImage(gameOver, 0, 0);
		bgMusic.pause(); 
	    endSound.play();}
		
	

	if(dir == "left") snakeX -= box;
	if(dir == "right") snakeX += box;
	if(dir == "up") snakeY -= box;
	if(dir == "down") snakeY += box;

	let newHead = {
		x: snakeX,
		y: snakeY
	};

	eatTail(newHead, snake);
	
snake.unshift(newHead);
}

 let game = setInterval(drawGame, 100);

 

 

 

