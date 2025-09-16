// Delete Leaves With a Given Value
// You are given a binary tree root and an integer target, delete all the leaf nodes with value target.

// Note that once you delete a leaf node with value target, if its parent node becomes a leaf node and has the value target, it should also be deleted (you need to continue doing that until you cannot).

// Example 1:





// Input: root = [1,2,3,5,2,2,5], target = 2

// Output: [1,2,3,5,null,null,5]
// Example 2:



// Input: root = [3,null,3,3], target = 3

// Output: []
// Explanation: The output is an empty tree after removing all the nodes with value 3.

// Constraints:

// 1 <= number of nodes in the tree <= 3000
// 1 <= Node.val, target <= 1000

function deleteLeaves(root, target) {
    if(!root) return;

    root.left = deleteLeaves(root.left, target);
    root.right = deleteLeaves(root.right, target);

    if(root.left === null && root.right === null && root.val === target) {
        return null;
    }

    return root;

}
