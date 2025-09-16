// Kth Smallest Integer in BST
// Solved 
// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) in the tree.

// A binary search tree satisfies the following constraints:

// The left subtree of every node contains only nodes with keys less than the node's key.
// The right subtree of every node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees are also binary search trees.
// Example 1:



// Input: root = [2,1,3], k = 1

// Output: 1
// Example 2:



// Input: root = [4,3,5,2,null], k = 4

// Output: 5
// Constraints:

// 1 <= k <= The number of nodes in the tree <= 1000.
// 0 <= Node.val <= 1000

function kthSmallest(root, k) {
        let count = 0;
        let res;

        function helper(node) {
            if(!node) {
                return;
            }
            helper(node.left);
            count = count + 1;
            if(count === k) {
                res = node.val;
            }
            helper(node.right);

        }
        helper(root, 0);
        return res
    }
