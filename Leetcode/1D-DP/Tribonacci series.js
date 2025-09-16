// N-th Tribonacci Number
// Solved 
// The Tribonacci sequence Tn is defined as follows:

// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

// Given n, return the value of Tn.

// Example 1:

// Input: n = 3

// Output: 2
// Explanation:
// T_3 = 0 + 1 + 1 = 2

// Example 2:

// Input: n = 21

// Output: 121415

function tribonacci(n) {
        if(n<= 0) {
            return 0;
        }
        let dp = new Array(n).fill(0);
        dp[1] = 1;
        dp[2] = 1;

        for(let i=3;i<=n;i++) {
            dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
        }

        return dp[n];
    }
