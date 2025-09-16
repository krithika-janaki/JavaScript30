// Generate Parentheses
// Solved 
// You are given an integer n. Return all well-formed parentheses strings that you can generate with n pairs of parentheses.

// Example 1:

// Input: n = 1

// Output: ["()"]
// Example 2:

// Input: n = 3

// Output: ["((()))","(()())","(())()","()(())","()()()"]
// You may return the answer in any order.

// Constraints:

// 1 <= n <= 7

function generateParenthesis(n) {
        let res = [];
        function helper(openN, closeN, stack) {
            if(openN === closeN && stack.length === n*2) {
                res.push(stack);
                return;
            }

             if(closeN < openN) {
                helper(openN, closeN+1, stack + ")")
            }

             if(openN < n) {
                helper(openN +1, closeN, stack + "(")
            }
        }

        helper(0,0,"")
        return res;
    }
