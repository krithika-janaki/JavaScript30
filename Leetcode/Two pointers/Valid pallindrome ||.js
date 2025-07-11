// Valid Palindrome II
// You are given a string s, return true if the s can be a palindrome after deleting at most one character from it.

// A palindrome is a string that reads the same forward and backward.

// Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).

// Example 1:

// Input: s = "aca"

// Output: true
// Explanation: "acad" is already a palindrome.

// Example 2:

// Input: s = "abbadc"

// Output: false
// Explanation: "abbadc" is not a palindrome and can't be made a palindrome after deleting at most one character.

// Example 3:

// Input: s = "abbbda"

// Output: true
// Explanation: "We can delete the character 'd'.

// Constraints:

// 1 <= s.length <= 100,000
// s is made up of only lowercase English letters.


//Explanation below - this approach wont work if cupttcu -> since c + 1 = u && u -1 = c, so better to check if both are palindrome

// function pallindrome2(str) {
//     let isOneCharDeleted = false;
//   let p1 = 0;
//   let p2 = str.length - 1;
//   while(p1 < p2) {
//     if(str[p1] === str[p2]) {
//       p1++;
//       p2--;


//     } else if(str[p1] !== str[p2] && !isOneCharDeleted) {
//         console.log("str[p1]", str[p1])
//         console.log("str[p2]", str[p2])
//         if(str[p1+1] === str[p2]) {
//             console.log("str[p1+1]", str[p1+1])
//           p1++;
//           isOneCharDeleted = true;
//         } else {
//           isOneCharDeleted = true;
//           p2--;
//         }
//     } else {
//         console.log("** str[p1]", str[p1])
//         console.log("** str[p2]", str[p2])
//       return false
//     }
//   }
//   return true;
// }


// coorect approach

 function isPalindrome(s, l, r) {
        while (l < r) {
            if (s[l] !== s[r]) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
    
    function validPalindrome(str) {
  let p1 = 0;
  let p2 = str.length - 1;
  while(p1 < p2) {
    if(str[p1] === str[p2]) {
      p1++;
      p2--;


    } else if(str[p1] !== str[p2]) {
       return this.isPalindrome(str,p1+1,p2) || this.isPalindrome(str,p1,p2-1);
    }
  }
  return true;
    }

