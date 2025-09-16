// House Robber II
// Solved 
// You are given an integer array nums where nums[i] represents the amount of money the ith house has. The houses are arranged in a circle, i.e. the first house and the last house are neighbors.

// You are planning to rob money from the houses, but you cannot rob two adjacent houses because the security system will automatically alert the police if two adjacent houses were both broken into.

// Return the maximum amount of money you can rob without alerting the police.

// Example 1:

// Input: nums = [3,4,3]

// Output: 4
// Explanation: You cannot rob nums[0] + nums[2] = 6 because nums[0] and nums[2] are adjacent houses. The maximum you can rob is nums[1] = 4.

// Example 2:

// Input: nums = [2,9,8,3,6]

// Output: 15
// Explanation: You cannot rob nums[0] + nums[2] + nums[4] = 16 because nums[0] and nums[4] are adjacent houses. The maximum you can rob is nums[1] + nums[4] = 15.

// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 100

function robr(arr) {
        let dp = new Array(arr.length);
        dp[0] = arr[0];
        dp[1] = Math.max(arr[0], arr[1])

        for(let i=2;i<arr.length;i++) {
            dp[i] = Math.max(arr[i] + dp[i-2], dp[i-1])
        }

        return dp[arr.length-1];
    }

    function rob(nums) {
        if(nums.length <= 0) return 0;
        if(nums.length === 1) return nums[0];

        return Math.max(this.robr(nums.slice(1)), this.robr(nums.slice(0,-1)));
    }
