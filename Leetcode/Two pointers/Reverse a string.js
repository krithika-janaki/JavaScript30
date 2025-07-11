// Reverse String
// You are given an array of characters which represents a string s. Write a function which reverses a string.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Input: s = ["n","e","e","t"]

// Output: ["t","e","e","n"]
// Example 2:

// Input: s = ["r","a","c","e","c","a","r"]

// Output: ["r","a","c","e","c","a","r"]
// Constraints:

// 0 <= s.length < 100,000
// s[i] is a printable ascii character.

function reverseString(str) {
  let p1=0;
  let p2 = str.length -1;

  while(p1 <= p2) {
   let temp = str[p2];
   str[p2] = str[p1];
    str[p1] = temp;
    p1++;
    p2--;
  }
  return str
}
