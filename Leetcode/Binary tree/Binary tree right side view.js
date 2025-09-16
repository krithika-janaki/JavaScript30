// Binary Tree Right Side View
// Solved 
// You are given the root of a binary tree. Return only the values of the nodes that are visible from the right side of the tree, ordered from top to bottom.

// Example 1:



// Input: root = [1,2,3]

// Output: [1,3]
// Example 2:



// Input: root = [1,2,3,4,5,6,7]

// Output: [1,3,7]
// Constraints:

// 0 <= number of nodes in the tree <= 100
// -100 <= Node.val <= 100

function rightSideView(root) {
        let queue = new Queue();
        if(!root) return [];
        queue.push(root); 

        let res = [];

        while(!queue.isEmpty()) {
            let size = queue.size(); 
            let i = 0;
            console.log("queue", queue)
            while(i < size) { 
                let curr = queue.pop(); 
                if(curr !== null) {
                if(i === size-1) res.push(curr.val); 

                if(curr.left) {
                     queue.push(curr.left);
                } 
                if(curr.right) {
                     queue.push(curr.right);
                } 
                }
                i++;
            }

        }
        return res;
    }
