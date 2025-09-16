// Search Insert Position
// Solved 
// You are given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [-1,0,2,4,6,8], target = 5

// Output: 4
// Example 2:

// Input: nums = [-1,0,2,4,6,8], target = 10

// Output: 6
// Constraints:

// 1 <= nums.length <= 10,000.
// -10,000 < nums[i], target < 10,000
// nums contains distinct values sorted in ascending order.

function searchInsert(nums, target) {
        let p1 = 0;
        let p2 = nums.length -1 ;
        let res = 0
        while (p1 <= p2) {
           const mid = Math.floor((p1+p2)/2);

            if(target < nums[mid]) {
                p2 = mid - 1;
            } else if(target > nums[mid]) {
                res = mid + 1;
                p1 = mid + 1;
            } else {
                return mid
            }
        }

        return res;
    }
