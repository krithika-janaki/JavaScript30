// Climbing Stairs
// Solved 
// You are given an integer n representing the number of steps to reach the top of a staircase. You can climb with either 1 or 2 steps at a time.

// Return the number of distinct ways to climb to the top of the staircase.

// Example 1:

// Input: n = 2

// Output: 2
// Explanation:

// 1 + 1 = 2
// 2 = 2
// Example 2:

// Input: n = 3

// Output: 3

function climbStairs(n) {
        if(n <= 2) {
            return n
        }
        const dp = new Array(n+1).fill(0);
        dp[1] = 1;
        dp[2] = 2;

        for(let i=3;i<= n;i++) {
            dp[i] = dp[i-1] + dp[i-2]
        }
        return dp[n]
    }
