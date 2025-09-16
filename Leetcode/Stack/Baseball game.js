// Baseball Game
// Solved 
// You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

// Given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

// An integer x: Record a new score of x.
// '+': Record a new score that is the sum of the previous two scores.
// 'D': Record a new score that is the double of the previous score.
// 'C': Invalidate the previous score, removing it from the record.
// Return the sum of all the scores on the record after applying all the operations.

// Note: The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.

// Example 1:

// Input: ops = ["1","2","+","C","5","D"]

// Output: 18

function calPoints(operations) {
        let stack = [];
        let result = 0;

        for(let i=0; i < operations.length; i++) {
            if(operations[i] === "+") {
                let prev = stack.pop();
                let sum = prev + stack[stack.length - 1];
                stack.push(prev);
                stack.push(sum);
            } else if (operations[i] === "D") {
                let prev = stack.pop();
                let newD = 2 * prev;

                stack.push(prev);
                stack.push(newD);
            } else if (operations[i] === "C") {
                stack.pop();
            } else {
                stack.push(parseInt(operations[i]));
            }
        }
        
        while(stack.length > 0) {
            let num = stack.pop();
            result = result + num;
        }

        return result;
    }
