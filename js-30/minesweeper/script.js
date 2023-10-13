// const BOARD_SIZE = 5;
// const MINE_NUMBER = 2;
// let board = [];
// const boardContainer = document.querySelector('.board');

// function createBoard(boardSize) {
//     let mines = createMines(MINE_NUMBER);
//     for(let i=0;i < boardSize;i++) {
//         board.push([]);
//         for(let j=0;j < boardSize; j++) {
//             const element = document.createElement('div');
//             element.classList.add("item");
//                 element.setAttribute("data-val", "hidden");
            
//             boardContainer.append(element);
//             board[i][j] = {
//                 x: i,
//                 y: j,
//                 mine: mines.some((mine) => mine.x === i && mine.y === j),
//                 element
//             }

//             board[i][j].element.addEventListener('click', () => { handleCellClick(board[i][j]) });
//         }
//     }
//     return board;
// }
// createBoard(5);


// function createMines(MINE_NUMBER) {
//     let result = [];

//     while(result.length < MINE_NUMBER) {
//         let x = Math.floor(Math.random() * BOARD_SIZE);
//         let y = Math.floor(Math.random() * BOARD_SIZE);

//         if(result.some((ele) => {
//             ele.x === x && ele.y === y
//         })) {
//             return;
//         }
//         result.push({x,y});
//     }
//     return result;
// }

// //  function revealTile(tile) {
// //     if (tile.element.dataset.val !== "hidden") {
// //       return
// //     }
  
// //     if (tile.mine) {
// //       console.log('does it go to check mine if it is a mine')
// //       tile.element.dataset.val = "mine";
// //       return
// //     }
  
// //     tile.element.dataset.val = "empty"
// //     const adjacentTiles = nearbyTiles(tile)
// //     const mines = adjacentTiles.filter(t => t.mine)
// //     if (mines.length) {
// //       tile.element.textContent = mines.length
// //     } else {
// //       adjacentTiles.forEach((t) => { revealTile(t) })
// //     }
// //   }

// function handleCellClick(tile) {
//        if (tile.element.dataset.val !== "hidden") {
//       return
//     }
  
//     if (tile.mine) {
//       console.log('does it go to check mine if it is a mine')
//       tile.element.dataset.val = "mine";
//       return
//     }

 
  
// //       tile.element.dataset.val = "empty"
// //       const adjacentTiles = nearbyTiles(tile)
// // //     const mines = adjacentTiles.filter(t => t.mine)
// // const mines = adjacentTiles.filter(t => t.mine)

//   tile.element.dataset.val = "empty"
//     const adjacentTiles = nearbyTiles(tile)
//     const mines = adjacentTiles.filter(t => t.mine)
//       if (mines.length) {
//         tile.element.textContent = mines.length
//       } else {
//         adjacentTiles.forEach((t) => { handleCellClick(t) })
//       }
//     }






//     // console.log('fdgjdfhgfdj', tile.element)
//     // if(tile.element.dataset.val !== "hidden") {
//     //     return;
//     // }
  

//     // if(tile.mine) {
//     //     tile.element.setAttribute("data-val", "mine");
//     //     console.log("game overr");
//     //     return;
//     // }
   

//     // tile.element.dataset === "empty"

//     // const adjacentTiles = nearbyTiles(tile);
//     // const noOfMines = adjacentTiles.filter((tile) => {
//     //     tile.mine
//     // });
//     // if(noOfMines.length) {
//     //     tile.element.textContent = noOfMines.length
//     // } else {
//     //     adjacentTiles.forEach((t) => { handleCellClick(t)})
//     // }

// // }

// function nearbyTiles({ x, y }) {
//     const tiles = []
//     console.log('in adjacent tile func', {x, y});
//     for (let xOffset = -1; xOffset <= 1; xOffset++) {
//       for (let yOffset = -1; yOffset <= 1; yOffset++) {
//         const tile = board[x + xOffset]?.[y + yOffset]
//         if (tile) tiles.push(tile)
//       }
//     }
  
//     return tiles
//   }

const BOARD_SIZE = 4;
const MINES = 2;
const board = [];

const gameBoardDOM = document.querySelector('.board'); 
gameBoardDOM.style.setProperty('--size', BOARD_SIZE);


for(let i=0; i < BOARD_SIZE; i++) {
  board.push([]);
  for(let j=0; j < BOARD_SIZE; j++) {
    const element = document.createElement('div');
    element.classList.add('item');
    element.setAttribute('data-val', "hidden");
    gameBoardDOM.append(element);
    board[i][j] = {
      x: i,
      y: j,
      element
    };
    element.addEventListener('click', () => { handleCellClick(board[i][j]) });
  }
}

function createMines() {
  let res = [];
  while(res.length < MINES) {
    let randomPos = Math.floor(Math.random() * (BOARD_SIZE* BOARD_SIZE));
    if(res.some(ele => ele === randomPos)) {
      continue;
    }
    res.push(randomPos);    
  }

  const gridItems = document.querySelectorAll('.item');
  for(let i=0; i < res.length;i++) {
    gridItems[res[i]].setAttribute('data-mine', "true");
  }
}
createMines();

function handleCellClick(tile) {
  if(tile.element.dataset.val !== "hidden") {
    return;
  }

  if(tile.element.dataset.mine === "true") {
    console.log('does it go to check mine if it is a mine');
    tile.element.dataset.val = "mine";
    tile.element.dataset.mine = "false";
    return;
  }

  tile.element.dataset.val = "number";
  const adjacentTiles = nearbyTiles(tile)
  const mines = adjacentTiles.filter(t => t.element.dataset.mine);

  if (mines.length === 0) {
    adjacentTiles.forEach((tile) => { handleCellClick(tile) })
  } else {
    tile.element.textContent = mines.length
  }

//   let surroundingNodes = nearbyTiles(tile);
//   console.log('surroundingNodes', surroundingNodes);
//  let surroundingMines = surroundingNodes.filter((ele) => {
//   ele.element.dataset.mine === "true"
//  });
//  console.log('surroundingMines', surroundingMines)
//  if(surroundingMines.length) {
//   tile.element.textContent = `${surroundingMines.length}`
//  } else {
//   surroundingNodes.forEach((ele) => { handleCellClick(ele)})
//  }
}

// function getSurroundingNodes(i, j) {
//   let res = [];
//   for(let x= -1; x <= 1; x++) {
//     for(let y= -1; y <= 1; y++) {
//       if(board[i + x]?.[j + y]) {
//         res.push(board[i + x][j + y])
//       }
        
//     }
//   }
//   return res;
// }

function nearbyTiles(til) {
  console.log(til);
    const tiles = []
    for (let xOffset = -1; xOffset <= 1; xOffset++) {
      for (let yOffset = -1; yOffset <= 1; yOffset++) {
        const tile = board[til.x + xOffset]?.[til.y + yOffset]
        if (tile) tiles.push(tile)
      }
    }
  
    return tiles
  }