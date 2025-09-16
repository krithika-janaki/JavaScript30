// Sqrt(x)
// Solved 
// You are given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
// Example 1:

// Input: x = 9

// Output: 3
// Example 2:

// Input: x = 13

// Output: 3
// Constraints:

// 0 <= x <= ((2^31)-1)

function mySqrt(x) {
        let p1 = 1;
        let p2 = Math.floor(x/2);
        let res = 1;
        if(x < 1) {
            return 0;
        }

        while(p1 <= p2) {
            const mid = Math.floor((p1+p2)/2); // (4+4)/2 => 4
    

            if((mid*mid) > x) {
                p2 = mid - 1;// 3
            } else if ((mid*mid) < x) {
                res = mid;// 3
                p1 = mid+1;// 4
            } else {
                return mid;
            }
        }
        return res;
    }
