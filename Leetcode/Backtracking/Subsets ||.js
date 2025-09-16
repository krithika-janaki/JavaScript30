// Subsets II
// Solved 
// You are given an array nums of integers, which may contain duplicates. Return all possible subsets.

// The solution must not contain duplicate subsets. You may return the solution in any order.

// Example 1:

// Input: nums = [1,2,1]

// Output: [[],[1],[1,2],[1,1],[1,2,1],[2]]
// Example 2:

// Input: nums = [7,7]

// Output: [[],[7], [7,7]]
// Constraints:

// 1 <= nums.length <= 11
// -20 <= nums[i] <= 20

function subsetsWithDup(nums) {
        let res = [];
        nums.sort((a,b) => a - b);

        function helper(ind, arr) {
            res.push(arr);

            for(let i=ind; i < nums.length; i++) {
                if(i > ind && nums[i] === nums[i-1]) continue;
                helper(i+1, [...arr, nums[i]])
            }

        }
        helper(0, [])
        return res;
    }
