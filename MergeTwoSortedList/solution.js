/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let rs = new ListNode(-1);
    let head = rs;
    while(l1 !== null && l2 !== null){
        if(l1.val < l2.val){
            rs.next = l1;
            l1 = l1.next;
        }else{
            rs.next = l2;
            l2 = l2.next;
        }
        rs = rs.next;
    }
    rs.next = l1 != null?l1:l2;
    return head.next;
};
/**
 mergeTwoLists([1,2,4],[1,3,4])=>[1,1,2,3,4,4]
 mergeTwoLists([1,4,7,8],[1,6,9])=>[1,1,4,6,7,8,9]
 */