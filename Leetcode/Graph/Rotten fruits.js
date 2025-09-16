// Rotting Fruit
// You are given a 2-D matrix grid. Each cell can have one of three possible values:

// 0 representing an empty cell
// 1 representing a fresh fruit
// 2 representing a rotten fruit
// Every minute, if a fresh fruit is horizontally or vertically adjacent to a rotten fruit, then the fresh fruit also becomes rotten.

// Return the minimum number of minutes that must elapse until there are zero fresh fruits remaining. If this state is impossible within the grid, return -1.

// Example 1:



// Input: grid = [[1,1,0],[0,1,1],[0,1,2]]

// Output: 4
// Example 2:

// Input: grid = [[1,0,1],[0,2,0],[1,0,1]]

// Output: -1
// Constraints:

// 1 <= grid.length, grid[i].length <= 10

function rottenFruit(grid) {
  let rows = grid.length;
  let columns = grid[0].length;
  let freshFruits = 0;
  let q = new Queue()
  let time = 0;
  let directions = [
    [0,1],
    [0,-1],
    [1,0],
    [-1,0]
  ]

  for(let i=0; i < rows; i++) {
    for(let j=0; j < columns; j++) {
      if(grid[i][j] === 1) {
        freshFruits++;
      }

      if(grid[i][j] === 2) {
        q.enqueue([i,j])
      }
    }
  }

  while(q.size()) {
    let s = q.size();
      for(let i=0; i < s;i++) {
        const [cr,cc] = q.dequeue();

        for(let [dr,dc] of directions) {
          const newr = cr+dr;
          const newc = cc+dc;

          if(newr > 0 && newr < rows && newc >0 && newc < columns && grid[newr][newc] === 1) {
            grid[newr][newc] = 2
            q.push([newr,newc])
            fresh--;
          }
        }
      }
      time--;
  }

}
