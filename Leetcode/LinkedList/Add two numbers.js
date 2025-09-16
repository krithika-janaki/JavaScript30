// Add Two Numbers
// Solved 
// You are given two non-empty linked lists, l1 and l2, where each represents a non-negative integer.

// The digits are stored in reverse order, e.g. the number 123 is represented as 3 -> 2 -> 1 -> in the linked list.

// Each of the nodes contains a single digit. You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Return the sum of the two numbers as a linked list.

// Example 1:



// Input: l1 = [1,2,3], l2 = [4,5,6]

// Output: [5,7,9]

// Explanation: 321 + 654 = 975.
// Example 2:

// Input: l1 = [9], l2 = [9]

// Output: [8,1]
// Constraints:

// 1 <= l1.length, l2.length <= 100.
// 0 <= Node.val <= 9


function addTwoNumbers(l1, l2) {
        let carry = 0;

        let dummy = new ListNode(0, null)
        let curr = dummy;

        while(l1 || l2 || carry) {
            const v1 = l1 ? l1.val : 0;
            const v2 = l2 ? l2.val : 0;
            let sum = carry + v1 + v2;
            if(sum >= 10) {
                carry = 1;
                sum = sum - 10;
            } else {
                carry = 0;
            }

            let node = new ListNode();
            node.val = sum;
            node.next = null
            curr.next = node;
            curr = curr.next;

            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;
        } 

        return dummy.next;
    }
