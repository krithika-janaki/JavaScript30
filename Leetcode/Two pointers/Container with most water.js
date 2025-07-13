
// Container With Most Water
// Solved 
// You are given an integer array heights where heights[i] represents the height of the 
// i
// t
// h
// i 
// th
//   bar.

// You may choose any two bars to form a container. Return the maximum amount of water a container can store.

// Example 1:



// Input: height = [1,7,2,5,4,7,3,6]

// Output: 36
// Example 2:

// Input: height = [2,2,2]

// Output: 4
// Constraints:

// 2 <= height.length <= 1000
// 0 <= height[i] <= 1000

function maxArea(height) {
        let p1 = 0;
        let p2 = height.length -1;
        let max = 0;

        while(p1 < p2) {
            let area = (p2-p1) * (height[p1] <= height[p2] ? height[p1] : height[p2]);
            max = Math.max(max, area);

            if(height[p1] <= height[p2]) {
                p1++
            } else {
                p2--;
            }
        }
        return max
    }
