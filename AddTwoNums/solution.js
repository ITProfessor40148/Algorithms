/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let top = { val: 0, next: null }
    let head = top; 
    let carry = 0;
    while(l1 || l2){ 
        l1 = l1 || { val: 0, next: null }
        l2 = l2 || { val: 0, next: null }
        let sum = l1.val + l2.val + carry
 
        if(sum > 9){ 
            carry = 1; 
            sum = sum - 10; 
        } else {
            carry = 0; 
        }
       
         head.next = { val: sum, next: null }; 
         head = head.next; 

        l1 = l1.next; 
        l2 = l2.next; 
    }
  
    if(carry !== 0){ 
        head.next = { val: carry , next: null }
    }
    return top.next; 
};
/**
addTwoNumbers((2 -> 4 -> 3), (5 -> 6 -> 4)) => (7 -> 0 -> 8)
addTwoNumbers((2 -> 4 -> 3 -> 6), (5 -> 6 -> 4)) => (7 -> 0 -> 8 -> 6)
*/