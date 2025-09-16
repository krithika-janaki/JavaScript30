// Contains Duplicate II
// Solved 
// You are given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k, otherwise return false.

// Example 1:

// Input: nums = [1,2,3,1], k = 3

// Output: true
// Example 2:

// Input: nums = [2,1,2], k = 1

// Output: false
// Constraints:

// 1 <= nums.length <= 100,000
// -1,000,000,000 <= nums[i] <= 1,000,000,000
// 0 <= k <= 100,000


function containsNearbyDuplicate(nums, k) {
        const obj = new Map();

        for(let i=0; i< nums.length; i++) {
            if(!obj.has(nums[i])) {
                obj.set(nums[i], i);
            } else {
                if(Math.abs(i - obj.get(nums[i])) <= k) {
                    return true
                } else {
                   obj.set(nums[i], i); 
                }
            }
        }

        return false;
    }

    // you got the rught solution but try this out with a set intead to see if you can achive the same resikt
