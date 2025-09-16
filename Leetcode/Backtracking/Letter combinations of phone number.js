// Letter Combinations of a Phone Number
// Solved 
// You are given a string digits made up of digits from 2 through 9 inclusive.

// Each digit (not including 1) is mapped to a set of characters as shown below:

// A digit could represent any one of the characters it maps to.

// Return all possible letter combinations that digits could represent. You may return the answer in any order.



// Example 1:

// Input: digits = "34"

// Output: ["dg","dh","di","eg","eh","ei","fg","fh","fi"]
// Example 2:

// Input: digits = ""

// Output: []
// Constraints:

// 0 <= digits.length <= 4
// 2 <= digits[i] <= 9

function letterCombinations(digits) {
        let res = [];
        if(!digits.length) return [];
        const map = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz"
        }

        function helper(str, ind) {
            if(str.length === digits.length) {
                res.push(str);
                return;
            }

            for(let i=0; i < map[digits[ind]].length; i++) {
                helper(str+map[digits[ind]][i], ind+1)
            }

        }
        helper("", 0)
        return res;
    }
