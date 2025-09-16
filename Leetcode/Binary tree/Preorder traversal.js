// Binary Tree Preorder Traversal
// Solved 
// You are given the root of a binary tree, return the preorder traversal of its nodes' values.

// Example 1:



// Input: root = [1,2,3,4,5,6,7]

// Output: [1,2,4,5,3,6,7]
// Example 2:



// Input: root = [1,2,3,null,4,5,null]

// Output: [1,2,4,3,5]
// Example 3:

// Input: root = []

// Output: []
// Constraints:

// 0 <= number of nodes in the tree <= 100
// -100 <= Node.val <= 100
// Follow up: Recursive solution is trivial, could you do it iteratively?

function preorderTraversal(root) {
        let res = [];

        function helper(node) {
            if(node === null) return;

            res.push(node.val);
            helper(node.left);
            helper(node.right);
        }
        helper(root);
        return res;
    }
