// Valid Palindrome
// Given a string s, return true if it is a palindrome, otherwise return false.

// A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

// Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).

// Example 1:

// Input: s = "Was it a car or a cat I saw?"

// Output: true
// Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.

// Example 2:

// Input: s = "tab a cat"

// Output: false
// Explanation: "tabacat" is not a palindrome.

// Constraints:

// 1 <= s.length <= 1000
// s is made up of only printable ASCII characters.

function isAlphanumeric(char) {
  return (char >= 'a' && char <= 'z') || 
               (char >= 'A' && char <= 'Z') || 
               (char >= '0' && char <= '9');
}

function validPalindrome(res) {

  let p1 = 0; 
  let p2 = res.length-1;

  while(p1 < p2) {
    if(!isAlphanumeric(res[p1])) {
        p1++;
    } else if(!isAlphanumeric(res[p2])) {
        p2--;
    } else if(res[p1].toLowerCase() === res[p2].toLowerCase()) {
      p1++;
      p2--;
    } else {
      return false;
    }
  }
  return true;
}
