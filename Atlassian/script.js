const GRID_SIZE = 3;
const gameContainer = document.querySelector('.container');

const noOfCells = GRID_SIZE * GRID_SIZE;
let gameMode = 'X';

gameContainer.style.gridTemplateColumns = `repeat(${GRID_SIZE}, 100px)`;
gameContainer.style.gridTemplateRows = `repeat(${GRID_SIZE}, 100px)`;

function getWinningCombinations() {

}

function checkForWin() {
    const WINNING_COMBINATIONS = [
        [0, 1 , 2],
        [3, 4,  5],
        [6, 7,  8],
        [0, 3 , 6],
        [1, 4 , 7],
        [2, 5 , 8],
        [0, 4 , 8],
        [2, 4 , 6]
    ];

    return WINNING_COMBINATIONS.some((combination => {
        return combination.every((cell) => cellsOnBoard[cell].textContent === gameMode);
    }))
}

function checkForDraw() {
    console.log(cellsOnBoard)
    return Array.from(cellsOnBoard).every((cell) => cell.textContent)
}

function changeGameMode() {
    if(gameMode === 'X') {
        gameMode = 'O';
    } else {
        gameMode = 'X';
    }
}

function handleCellClick(e) {
    cellsOnBoard[this.dataset.id].textContent = gameMode;
    if(checkForWin()) {
        alert('You won!')
    }
    if(checkForDraw()) {
        alert('lets start over')
    }
    changeGameMode();
}

function formGameBoard(noOfCells) {

    for(let i=0; i < noOfCells; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.id = i;

        cell.addEventListener('click', handleCellClick, {
            once: true
        });
        gameContainer.append(cell);
    }
}
formGameBoard(noOfCells);
const cellsOnBoard = document.querySelectorAll('.cell');

