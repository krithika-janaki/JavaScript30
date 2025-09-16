// Longest Substring Without Repeating Characters
// Solved 
// Given a string s, find the length of the longest substring without duplicate characters.

// A substring is a contiguous sequence of characters within a string.

// Example 1:

// Input: s = "zxyzxyz"

// Output: 3
// Explanation: The string "xyz" is the longest without duplicate characters.

// Example 2:

// Input: s = "xxxx"

// Output: 1
// Constraints:

// 0 <= s.length <= 1000
// s may consist of printable ASCII characters.

function lengthOfLongestSubstring(s) {
  let l=0;
  let max = 0;
  let obj = new Map();

  for(let r=0; r< s.length;r++) {
    if(obj.has(s[r])) {
        l = Math.max(obj.get(s[r]) + 1, l); // you missed this initially where in abba, for a in i=3, l should be 2 not 0, so get max l
    }
    obj.set(s[r], r);
    max = Math.max(r-l+1, max);
  }
  return max;
}
