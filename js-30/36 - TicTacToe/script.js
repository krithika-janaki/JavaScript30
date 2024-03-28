const board = document.querySelector('.board');
const grid = document.querySelectorAll(".board div");

console.log('hello', grid);
let boardClass = "x";xconst winning = [[0,1,2],[3,4,5],[6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

function onClickGridItem() {
    console.log('dkjfgkdjsgfkdsjfghk');
    
    this.classList.add(boardClass);
    console.log("checkforWin", checkForWin());
   
    if(checkForWin(boardClass)) {
        console.log("YAYYYYYY");
    }
    checkForDraw();
    changeBoardClass(boardClass);
}

function changeBoardClass() {
    console.log("result", "x" ? "o" : "x");
    boardClass = boardClass === "x" ? "o" : "x";
    console.log({boardClass});
}

function checkForWin(boardClasss) {
    return winning.some((combo) => {
        // console.log({combo});
        return combo.every(item => {
            // console.log('item', item);
            // console.log(grid[item])
            // console.log(grid[item].classList.contains(boardClass));
            return grid[item].classList.contains(boardClasss);
        });
    })
}

function checkForDraw() {
    return Array.from(grid).every(item => item.classList.value === "x" || item.classList.value === "o")
}



grid.forEach((square) => square.addEventListener('click', onClickGridItem))