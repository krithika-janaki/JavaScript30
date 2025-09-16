// Island Perimeter
// Solved 
// You are given a row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

// The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1.

// Return the perimeter of the island.

// Example 1:



// Input: grid = [
//     [1,1,0,0],
//     [1,0,0,0],
//     [1,1,1,0],
//     [0,0,1,1]
// ]

// Output: 18
// Explanation: The perimeter is the 18 red stripes shown in the image above.

// Example 2:

// Input: grid = [[1,0]]

// Output: 4
// Constraints:

// row == grid.length
// col == grid[i].length
// 1 <= row, col <= 100
// grid[i][j] is 0 or 1.
// There is exactly one island in grid.

function islandPerimeter(grid) {
        let perimeter = 0;
        let row = grid.length;
        let column = grid[0].length;
         const visited = Array.from({ length: row }, () =>
            Array(column).fill(false),
        );

        function dfs(i,j) {
            console.log({i, j})
            if(i < 0 || i >= row || j < 0 || j >= column || grid[i][j] === 0) {
                perimeter += 1;
                return;
            }
            if(visited[i][j]) {
                return;
            }
            visited[i][j] = true;
            dfs(i+1, j)
            dfs(i-1, j)
            dfs(i, j+1)
            dfs(i, j-1)
        }
        for(let i=0; i < row; i++) {
            for(let j=0; j < column; j++) {
                if(grid[i][j] === 1) {
                    console.log("before--->", {i, j})
                    dfs(i,j);
                }
            }
        }
        return perimeter;
    }
