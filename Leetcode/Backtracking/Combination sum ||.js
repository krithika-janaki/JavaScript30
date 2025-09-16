// Combination Sum II
// You are given an array of integers candidates, which may contain duplicates, and a target integer target. Your task is to return a list of all unique combinations of candidates where the chosen numbers sum to target.

// Each element from candidates may be chosen at most once within a combination. The solution set must not contain duplicate combinations.

// You may return the combinations in any order and the order of the numbers in each combination can be in any order.

// Example 1:

// Input: candidates = [9,2,2,4,6,1,5], target = 8

// Output: [
//   [1,2,5],
//   [2,2,4],
//   [2,6]
// ]
// Example 2:

// Input: candidates = [1,2,3,4,5], target = 7

// Output: [
//   [1,2,4],
//   [2,5],
//   [3,4]
// ]
// Constraints:

// 1 <= candidates.length <= 100
// 1 <= candidates[i] <= 50
// 1 <= target <= 30

function combinationSum2(candidates, target) {
        let result = [];
        candidates.sort((a,b) => a - b);

        function helper(sum, start, arr) {
            if(sum === target) {
                result.push(arr);
                return;
            }

            for(let i=start; i < candidates.length; i++) {
                if(i > start && candidates[i] === candidates[i-1]) continue;
                if(sum + candidates[i] > target) {
                    return;
                }
                helper(sum + candidates[i], i+1, [...arr, candidates[i]])
            }
        }
        helper(0, 0, [])
        return result;
    }
