// Number of Islands
// Solved 
// Given a 2D grid grid where '1' represents land and '0' represents water, count and return the number of islands.

// An island is formed by connecting adjacent lands horizontally or vertically and is surrounded by water. You may assume water is surrounding the grid (i.e., all the edges are water).

// Example 1:

// Input: grid = [
//     ["0","1","1","1","0"],
//     ["0","1","0","1","0"],
//     ["1","1","0","0","0"],
//     ["0","0","0","0","0"]
//   ]
// Output: 1
// Example 2:

// Input: grid = [
//     ["1","1","0","0","1"],
//     ["1","1","0","0","1"],
//     ["0","0","1","0","0"],
//     ["0","0","0","1","1"]
//   ]
// Output: 4
// Constraints:

// 1 <= grid.length, grid[i].length <= 100
// grid[i][j] is '0' or '1'.

function numIslands(grid) {
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        let rows = grid.length;
        let columns = grid[0].length;
        let islands = 0;
       
       function dfs(i,j) {
            if (i < 0 || j < 0 || i >= rows || j >= columns || grid[i][j] === '0') {
                 return;
            }
        grid[i][j] = "0";

        for (const [dr, dc] of directions) {
                dfs(i + dr, j + dc);
            }

       }

        for(let i=0; i < rows; i++) {
            for(let j=0; j < columns; j++) {
                if(grid[i][j] === "1") {
                    dfs(i,j)
                    islands++;
                }
            }
        }
        return islands;
    }
