// Maximum Depth of Binary Tree
// Solved 
// Given the root of a binary tree, return its depth.

// The depth of a binary tree is defined as the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:



// Input: root = [1,2,3,null,null,4]

// Output: 3
// Example 2:

// Input: root = []

// Output: 0
// Constraints:

// 0 <= The number of nodes in the tree <= 100.
// -100 <= Node.val <= 100

function maxDepth(root) {
        if(!root) return 0;

        return Math.max(this.maxDepth(root.left) + 1, this.maxDepth(root.right) + 1)
    }
