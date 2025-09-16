// Permutations II
// Solved 
// You are given an array nums, that might contain duplicates , return all possible unique permutations in any order.

// Example 1:

// Input: nums = [1,1,2]

// Output: [
//     [1,1,2],
//     [1,2,1],
//     [2,1,1]
// ]
// Example 2:

// Input: nums= [2,2]

// Output: [[2,2]]
// Constraints:

// 1 <= nums.length <= 8
// -10 <= nums[i] <= 10

function permuteUnique(nums) {
        let res = [];
        nums.sort((a,b) => a - b);

        function helper(arr, rem) {
            console.log({arr, rem})
            if(arr.length === nums.length) {
                res.push(arr);
                return;
            }

            for(let i=0; i < rem.length; i++) {
                if(i > 0 && rem[i] === rem[i-1]) {
                    continue;
                }
                helper([...arr, rem[i]], [...rem.slice(0,i), ...rem.slice(i+1, rem.length)])
            }
        }
        helper([], nums);
        return res;
    }
