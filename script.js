//element HTML
const board = document.getElementById('game-board');

//Def  game variables
const gridSize =20;
let snake = [{ x:10, y:10 }];
let food = generateFood();
let direction = 'right';
let gameInterval ;
let gameSpeedDelay = 200;

//draw game, snake food
function draw() {
    board.innerHTML ='';
    drawSnake();
    drawFood();
}

// draw snake    
function drawSnake() {
    snake.forEach(segment => {
        const snakeElement = createGameElement('div','snake');
        setPosition(snakeElement,segment);
        board.appendChild(snakeElement);
    });
}    

//create game element (food / snake)
function createGameElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

// set position snake/food

function setPosition(element, position){
    element.style.gridRow = position.y;
    element.style.gridColumn = position.x;
}


//test 
draw();

// draw food function
function drawFood() {
    const foodElement = createGameElement('div','food');
    setPosition(foodElement, food);
    board.appendChild(foodElement);
}

// generate random food
function generateFood() {
     const x =Math.floor(Math.random() * gridSize) + 1;
     const y =Math.floor(Math.random() * gridSize) + 1; 
     return {x , y};
}   

// move snake
function move() { 
    const head ={...snake[0] };
    switch(direction) {
        case 'up':
            head.y--;
            break;
        case 'down':
            head.y++;
            break;
        case 'left':
            head.x--;
            break;
        case 'right':
            head.x++;
            break;
    }

    snake.unshift(head);

    //snake.pop();

    if (head.x=== food.x && head.y ===food.y){
        food = generateFood();
        clearInterval(); // past interval
        gameInterval = setInterval(() => {
            move();
            draw();        
        },gameSpeedDelay);
    }else {snake.pop();
    }
}
// test move
//setInterval (() =>{
//    move(); //first move
//   draw(); //then draw new position
//}, 200);
