import {draw as drawSnake, update as updateSnake} from './snake.js';

const gameBoard = document.querySelector('.grid');
let board = [];

// for(let i=0; i < 10; i++) {
//     board.push([]);
//     for(let j=0; j < 10;j++) {
//         const item = document.createElement('div');
//         item.classList.add('item');
//         gameBoard.append(item);
//         board[i][j] = {
//             x: i,
//             y: j,
//             element: item
//         };
//     }
// }
// console.log('board', board);

function main() {
    update();
    draw();

setTimeout(() => {
    requestAnimationFrame(main);
}, 1000);
}

function update() {
    updateSnake();
    updateFood();
}

function draw() {
    drawSnake();
    drawFood();
}

requestAnimationFrame(main);