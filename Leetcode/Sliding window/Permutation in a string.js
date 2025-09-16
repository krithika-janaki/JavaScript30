// Permutation in String
// You are given two strings s1 and s2.

// Return true if s2 contains a permutation of s1, or false otherwise. That means if a permutation of s1 exists as a substring of s2, then return true.

// Both strings only contain lowercase letters.

// Example 1:

// Input: s1 = "abc", s2 = "lecabee"

// Output: true
// Explanation: The substring "cab" is a permutation of "abc" and is present in "lecabee".

// Example 2:

// Input: s1 = "abc", s2 = "lecaabcee"

// Output: false
// Constraints:

// 1 <= s1.length, s2.length <= 1000

function checkPermutaion(i, s2, obj) {
  let l = i;
  let dupObj = obj;
  while (l < (l + s1.length)) {
    if(dupObj[s2[l]]) {
      delete dupObj[s2[l]]
      l++;
    } else {
      return false
    }
  }
  return true
}

function permutation(s1, s2) {
  let obj = {};

  for(let char of s1) {
    obj[char] = (obj[char] || 0) + 1;
  }

  for(let i=0; i < s2.length; i++) {
    if(obj[s2[i]]) {
     const permutationExists  = checkPermutaion(i, s2, obj);
     if(permutationExists) {
      return true
     }
    }
  }

}
