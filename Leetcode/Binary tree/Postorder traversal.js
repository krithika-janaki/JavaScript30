// Binary Tree Postorder Traversal
// Solved 
// You are given the root of a binary tree, return the postorder traversal of its nodes' values.

// Example 1:



// Input: root = [1,2,3,4,5,6,7]

// Output: [4,5,2,6,7,3,1]
// Example 2:



// Input: root = [1,2,3,null,4,5,null]

// Output: [4,2,5,3,1]
// Example 3:

// Input: root = []

// Output: []
// Constraints:

// 0 <= number of nodes in the tree <= 100
// -100 <= Node.val <= 100
// Follow up: Recursive solution is trivial, could you do it iteratively?

function postorderTraversal(root) {
        let res = [];

        function helper(node) {
            if(node === null) return;

            helper(node.left);
            helper(node.right);
            res.push(node.val);
        }
        helper(root);
        return res;
    }
