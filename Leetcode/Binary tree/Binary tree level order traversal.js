// Binary Tree Level Order Traversal
// Solved 
// Given a binary tree root, return the level order traversal of it as a nested list, where each sublist contains the values of nodes at a particular level in the tree, from left to right.

// Example 1:



// Input: root = [1,2,3,4,5,6,7]

// Output: [[1],[2,3],[4,5,6,7]]
// Example 2:

// Input: root = [1]

// Output: [[1]]
// Example 3:

// Input: root = []

// Output: []
// Constraints:

// 0 <= The number of nodes in the tree <= 1000.
// -1000 <= Node.val <= 1000

function levelOrder(root) {
        let queue = new Queue();// [[1]]
        if(!root) return [];
        let res = [];
        queue.push(root);
        while(!queue.isEmpty()) {
            // let current = queue.pop(); // [2,3]

            let i = 0;
            let arr = [];
            let size = queue.size();
            while(i < size) {
                let curr = queue.pop()
                if(curr !== null) {
                  arr.push(curr.val);

                  queue.push(curr.left);
                  queue.push(curr.right);
                }
                i++;
            }
            console.log("arr", arr);
            if(arr.length) {
             res.push(arr); // [[2,3]]
            }
        }

        return res;
    }
