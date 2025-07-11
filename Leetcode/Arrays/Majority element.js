// Majority Element
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times in the array. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [5,5,1,1,1,5,5]

// Output: 5
// Example 2:

// Input: nums = [2,2,2]

// Output: 2
// Constraints:

// 1 <= nums.length <= 50,000
// -1,000,000,000 <= nums[i] <= 1,000,000,000
// Follow-up: Could you solve the problem in linear time and in O(1) space?


function majorityElement(nums) {
        const count = new Map();
        let res = 0, maxCount = 0;

         for (let num of nums) {
            count.set(num, (count.get(num) || 0) + 1);
            if (count.get(num) > maxCount) {
                res = num;
                maxCount = count.get(num);
            }
        }
        return res;
    }

    // Learn boyer moore algorithm for majority element in an array -- by voting system
