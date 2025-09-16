// Min Cost Climbing Stairs
// You are given an array of integers cost where cost[i] is the cost of taking a step from the ith floor of a staircase. After paying the cost, you can step to either the (i + 1)th floor or the (i + 2)th floor.

// You may choose to start at the index 0 or the index 1 floor.

// Return the minimum cost to reach the top of the staircase, i.e. just past the last index in cost.

// Example 1:

// Input: cost = [1,2,3]

// Output: 2
// Explanation: We can start at index = 1 and pay the cost of cost[1] = 2 and take two steps to reach the top. The total cost is 2.

// Example 2:

// Input: cost = [1,2,1,2,1,1,1]

// Output: 4

function minCostClimbingStairs(cost) {
       for(let i=cost.length-1;i>=0;i--) {
        cost[i] = cost[i] + Math.min(cost[i+1], cost[i+2])
       }
    return Math.min(cost[0], cost[1])
    }
