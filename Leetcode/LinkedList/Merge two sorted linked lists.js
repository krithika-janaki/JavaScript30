// Merge Two Sorted Linked Lists
// Solved 
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted linked list and return the head of the new sorted linked list.

// The new list should be made up of nodes from list1 and list2.

// Example 1:



// Input: list1 = [1,2,4], list2 = [1,3,5]

// Output: [1,1,2,3,4,5]
// Example 2:

// Input: list1 = [], list2 = [1,2]

// Output: [1,2]
// Example 3:

// Input: list1 = [], list2 = []

// Output: []
// Constraints:

// 0 <= The length of the each list <= 100.
// -100 <= Node.val <= 100


function mergeTwoLists(list1, list2) {
        let p1 = list1;
        let p2 = list2;
        let newhead = {val: 0, next: null};
        let p3 = newhead;

        while(p1 && p2) {
            if(p1.val <= p2.val) {
                  p3.next = p1;
                  p1 = p1.next;
            } else {
                p3.next = p2;
                p2 = p2.next;
            }
            p3 = p3.next;
        }

        if(p1) {
            p3.next = p1;
        } else {
            p3.next = p2;
        }
        
        return newhead.next;
    }
