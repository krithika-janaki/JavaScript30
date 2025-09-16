// Combinations
// Solved 
// You are given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

// You may return the answer in any order.

// Example 1:

// Input: n = 3, k = 2

// Output: [
//     [1,2],
//     [1,3],
//     [2,3]
// ]
// Example 2:

// Input: n = 3, k = 3

// Output: [[1,2,3]]
// Constraints:

// 1 <= k <= n <= 20

function combine(n, k) {
        let res = [];

        function helper(ind, arr) {
            if(arr.length === k) {
                res.push(arr);
                return;
            }

            for(let i=ind; i <= n; i++) {
                helper(i+1, [...arr, i])
            }
        }
        helper(1, [])
        return res;
    }
