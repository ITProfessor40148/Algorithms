/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;
    var lenA = countLength(headA);
    var lenB = countLength(headB);
    if (lenA > lenB) headA = increasePointer((lenA - lenB), headA);
    if (lenB > lenA) headB = increasePointer((lenB - lenA), headB);
    while (headA) {
        if (headA == headB) return headA;
        if (headA.next == headB.next) return headA.next;
        headA = headA.next;
        headB = headB.next;
    }   
    return null;
};

var countLength = function (head) {
    var len = 0;
    while (head) {
        len++;
        head = head.next;
    }
    return len;
};

var increasePointer = function (times, head) {
    var count = 0;
    while (count != times) {
        head = head.next;
        count++;
    }
    return head;
}