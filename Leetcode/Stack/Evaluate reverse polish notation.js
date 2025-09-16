
// Evaluate Reverse Polish Notation
// Solved 
// You are given an array of strings tokens that represents a valid arithmetic expression in Reverse Polish Notation.

// Return the integer that represents the evaluation of the expression.

// The operands may be integers or the results of other operations.
// The operators include '+', '-', '*', and '/'.
// Assume that division between integers always truncates toward zero.
// Example 1:

// Input: tokens = ["1","2","+","3","*","4","-"]

// Output: 5

// Explanation: ((1 + 2) * 3) - 4 = 5
// Constraints:

// 1 <= tokens.length <= 1000.
// tokens[i] is "+", "-", "*", or "/", or a string representing an integer in the range [-100, 100].

function evalRPN(tokens) {
        let stack = [];

        for(let i=0; i < tokens.length; i++) {
            if(tokens[i] === "+") {
                let prev = stack.pop();
                let prev1 = stack.pop();
                let sum = prev + prev1;
                
                stack.push(sum);
            } else if(tokens[i] === "-") {
                let prev = stack.pop();
                let prev1 = stack.pop();
                let sub = prev1 - prev;


                stack.push(sub);
            }  else if (tokens[i] === '*') {
                let prev = stack.pop();
                let prev1 = stack.pop();
                let mul = prev1 * prev;


                stack.push(mul);
            }  else if (tokens[i] === '/') {
                let prev = stack.pop();
                let prev1 = stack.pop();

                let div = Math.trunc(prev1/prev);

                stack.push(div);
            } else {
                stack.push(parseInt(tokens[i]))
            }
            console.log(stack)
        }

        return stack.pop()
    }

    // you got the problem and the solution with stack but missed the test cases like [2,3,1,"/",+] where there can be 3 or more numbers before an operand
