// Two Integer Sum II
// Solved 
// Given an array of integers numbers that is sorted in non-decreasing order.

// Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.

// There will always be exactly one valid solution.

// Your solution must use 
// O
// (
// 1
// )
// O(1) additional space.

// Example 1:

// Input: numbers = [1,2,3,4], target = 3

// Output: [1,2]
// Explanation:
// The sum of 1 and 2 is 3. Since we are assuming a 1-indexed array, index1 = 1, index2 = 2. We return [1, 2].

// Constraints:

// 2 <= numbers.length <= 1000
// -1000 <= numbers[i] <= 1000
// -1000 <= target <= 1000

function twoIntegerSum(arr, target) {
  let p1 = 0;
  let p2 = arr.length - 1;

  while(p1 < p2) {
    if( arr[p1] + arr[p2] > target) {
      p2--;
    } else if ( arr[p1] + arr[p2] < target) {
      p1++;
    } else {
      return [p1, p2]
    }
  }
  return [];
}
