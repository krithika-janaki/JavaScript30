// Coin Change II
// You are given an integer array coins representing coins of different denominations (e.g. 1 dollar, 5 dollars, etc) and an integer amount representing a target amount of money.

// Return the number of distinct combinations that total up to amount. If it's impossible to make up the amount, return 0.

// You may assume that you have an unlimited number of each coin and that each value in coins is unique.

// Example 1:

// Input: amount = 4, coins = [1,2,3]

// Output: 4
// Explanation:

// 1+1+1+1 = 4
// 1+1+2 = 4
// 2+2 = 4
// 1+3 = 4
// Example 2:

// Input: amount = 7, coins = [2,4]

// Output: 0
// Constraints:

// 1 <= coins.length <= 100
// 1 <= coins[i] <= 5000
// 0 <= amount <= 5000

function change(amount, coins) {
        let cache = {};

        function dfs(amt, start) {
            if(amt === 0) return 1;
            if(amt < 0) return 0;

            const key = `${amt},${start}`;
            if(key in cache) return cache[key];

            let ways = 0;
            for(let i=start; i < coins.length;i++) {
                ways += dfs(amt-coins[i], i);
            }
            cache[key] = ways;
            return ways;
        }

        return dfs(amount, 0);
    }
