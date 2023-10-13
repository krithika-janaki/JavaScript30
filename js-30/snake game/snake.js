import {drawFood} from './food.js';

// let inputDirection = { x: 0, y: 0 }
// const snakeBody = [{ x: 11, y: 11 }]
// let newSegments = 2;

// export function update() {
//     addSegments();
//     const inputDir = getInputDirection();
//     for(let i=snakeBody.length - 2; i >= 0; i--) {
//         snakeBody[i+1] = { ...snakeBody[i]}
//     }
//     snakeBody[0].x += inputDir.x;
//     snakeBody[0].y += inputDir.y;
// }

// export function draw(gameBoard) {
//     gameBoard.innerHTML = '';
//     snakeBody.forEach(segment => {
//       const snakeElement = document.createElement('div')
//       snakeElement.style.gridRowStart = segment.y
//       snakeElement.style.gridColumnStart = segment.x
//       snakeElement.classList.add('snake')
//       gameBoard.appendChild(snakeElement)
//     })
//   }
let inputDirection = {x:0, y: 0}
window.addEventListener('keyup', e => {
    switch(e.key) {
        case 'ArrowUp':
      inputDirection = { x: 0, y: -1 };
      break;
    case 'ArrowDown':
      inputDirection = { x: 0, y: 1 }
      break
    case 'ArrowLeft':
      inputDirection = { x: -1, y: 0 }
      break
    case 'ArrowRight':
      inputDirection = { x: 1, y: 0 }
      break
  }
});

function getInputDirection() {
  drawFood(gameBoard);
    return inputDirection;
}

// function addSegments() {
//     for (let i = 0; i < newSegments; i++) {
//       snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
//       console.log(snakeBody);
//     }
  
//     newSegments = 0
//   }


// function draw() {

// }
let snakeBody = [{x: 5, y: 5}];
export function draw(gameBoard) {
  for(let i=0; i < snakeBody.length; i++) {
    gameBoard.innerHTML = '';
    const snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = snakeBody[i].y
    snakeElement.style.gridColumnStart = snakeBody[i].x
    snakeElement.classList.add('snake')
    gameBoard.append(snakeElement);
  }
}

export function update() {
  const inputDir = getInputDirection();

  for(let i= snakeBody.length - 2; i > 0; i--) {
      snakeBody[i+1].x = snakeBody[i].x;
      snakeBody[i+1].y = snakeBody[i].y;
  }
  snakeBody[0].x += inputDir.x;
  snakeBody[0].y += inputDir.y;
}