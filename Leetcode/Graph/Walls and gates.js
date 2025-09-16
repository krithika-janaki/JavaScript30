// Islands and Treasure
// You are given a 
// m
// ×
// n
// m×n 2D grid initialized with these three possible values:

// -1 - A water cell that can not be traversed.
// 0 - A treasure chest.
// INF - A land cell that can be traversed. We use the integer 2^31 - 1 = 2147483647 to represent INF.
// Fill each land cell with the distance to its nearest treasure chest. If a land cell cannot reach a treasure chest then the value should remain INF.

// Assume the grid can only be traversed up, down, left, or right.

// Modify the grid in-place.

// Example 1:

// Input: [
//   [2147483647,-1,0,2147483647],
//   [2147483647,2147483647,2147483647,-1],
//   [2147483647,-1,2147483647,-1],
//   [0,-1,2147483647,2147483647]
// ]

// Output: [
//   [3,-1,0,1],
//   [2,2,1,-1],
//   [1,-1,2,-1],
//   [0,-1,3,4]
// ]
// Example 2:

// Input: [
//   [0,-1],
//   [2147483647,2147483647]
// ]

// Output: [
//   [0,-1],
//   [1,2]
// ]
// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 100
// grid[i][j] is one of {-1, 0, 2147483647}

function wallsandgates(grid) {

  let rows = grid.length;
  let columns = grid[0].length;
  let visited = new Set();
  let queue = new Queue();

  function addDist(r,c) {
    if(r<0 || c<0 || r >= rows || c >= columns || grid[r][c] === "-1" || visited.has(`${r},${c}`)) {
      return;
    }
    visited.add(`${r},${c}`);
    queue.push([r,c])
  }

  for(let i=0; i < rows; i++) {
    for(let j=0; j < columns; j++) {
      if(grid[i][j] === "0") {
        queue.enqueue([i,j])
        visited.add(`${i},${j}`)
      }
    }
  }
  let dist = 0;
  while(queue.size()) {
    let s = queue.size();
    for(let i=0; i< s;i++) {
    const [cr,cc] = queue.dequeue();
    grid[cr,cc] = dist;

    addDist(cr+1, cc);
    addDist(cr-1,cc);
    addDist(cr, cc+1);
    addDist(cr,cc-1);
    }
    dist++;
  }
  
}
