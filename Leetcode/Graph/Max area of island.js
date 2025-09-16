// Max Area of Island
// Solved 
// You are given a matrix grid where grid[i] is either a 0 (representing water) or 1 (representing land).

// An island is defined as a group of 1's connected horizontally or vertically. You may assume all four edges of the grid are surrounded by water.

// The area of an island is defined as the number of cells within the island.

// Return the maximum area of an island in grid. If no island exists, return 0.

// Example 1:



// Input: grid = [
//   [0,1,1,0,1],
//   [1,0,1,0,1],
//   [0,1,1,0,1],
//   [0,1,0,0,1]
// ]

// Output: 6
// Explanation: 1's cannot be connected diagonally, so the maximum area of the island is 6.

// Constraints:

// 1 <= grid.length, grid[i].length <= 50

function maxAreaOfIsland(grid) {
        let rows = grid.length;
        let columns = grid[0].length;
        let max = 0;

        let directions = [
            [1,0],
            [-1,0],
            [0,-1],
            [0,1]
        ]

        function dfs(i,j, area) {

            if(i < 0 || i >= rows || j < 0 || j >= columns || grid[i][j] === 0) {
                console.log({max})
                return;
            }
             grid[i][j] = 0;
            area.count++;

            for(let [dr,dc] of directions) {
                dfs(i +dr, j+dc, area);
            }
        }

        for(let i=0; i < rows; i++) {
            for(let j=0; j < columns; j++) {
                if(grid[i][j] === 1) {
                    let counter = {count: 0}
                    dfs(i,j,counter)
                    max = Math.max(max, counter.count)
                }
            }
        }

        return max;
    }
