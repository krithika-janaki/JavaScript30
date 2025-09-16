// Reorder Linked List
// You are given the head of a singly linked-list.

// The positions of a linked list of length = 7 for example, can intially be represented as:

// [0, 1, 2, 3, 4, 5, 6]

// Reorder the nodes of the linked list to be in the following order:

// [0, 6, 1, 5, 2, 4, 3]

// Notice that in the general case for a list of length = n the nodes are reordered to be in the following order:

// [0, n-1, 1, n-2, 2, n-3, ...]

// You may not modify the values in the list's nodes, but instead you must reorder the nodes themselves.

// Example 1:

// Input: head = [2,4,6,8]

// Output: [2,8,4,6]
// Example 2:

// Input: head = [2,4,6,8,10]

// Output: [2,10,4,8,6]
// Constraints:

// 1 <= Length of the list <= 1000.
// 1 <= Node.val <= 1000

function reorderList(head) {
        let p1 = head;
        let p2 = head.next;

        while(p2 && p2.next) {
            p1 = p1.next;
            p2 = p2.next.next;
        }

        let prev = null;
        let curr = p1.next;
            console.log(p1.val)
        while(curr) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        // [0,1,2,3,6,5,4]

        //merge p1 and head

        let curr1 = head;
        let curr2 = p1;

        while(curr1 && curr2) {
            const temp1 = curr1.next;// 2 
            curr1.next = curr2; // 5
            const temp2 = curr2.next;// 6
            curr2.next = temp1;// 1  0 -> 4 -> 1 -> 5 -> 2
            curr2 = temp2;
            curr1 = temp1;
        }
    }

    // NOTE -- not fast and slow pointer approach 
