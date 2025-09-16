// Minimum Size Subarray Sum
// You are given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:

// Input: target = 10, nums = [2,1,5,1,5,3]

// Output: 3
// Explanation: The subarray [5,1,5] has the minimal length under the problem constraint.

// Example 2:

// Input: target = 5, nums = [1,2,1]

// Output: 0
// Constraints:

// 1 <= nums.length <= 100,000
// 1 <= nums[i] <= 10,000
// 1 <= target <= 1,000,000,000
// Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)).


function minSubArrayLen(target, nums) {
        let p1 = 0;
        let p2 = 0;
        let min = Infinity;
        let sum = 0;

        while (p1 <= p2 && p2 < nums.length) {
            sum += nums[p2]; 
            while (sum >= target) {
                min = Math.min(min, p2-p1+1);
                sum = sum - nums[p1];
                p1++;
            }
            p2++;
        }

        return min === Infinity ? 0 : min;
    }
