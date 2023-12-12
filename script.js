//element HTML
const board = document.getElementById('game-board');

//Def variables
let snake = [{ x:10, y:10 }];

//draw game, snake food
function draw() {
    board.innerHTML = '';
    drawSnake();
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
