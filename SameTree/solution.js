/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(p == null && q == null) return true;
    if(p == null || q == null) return false;
    return (p.val == q.val)&&isSameTree(p.left, q.left)&&isSameTree(p.right, q.right);
};
/**
isSameTree([1,2,3], [1,2,3]) => true
isSameTree([1,2], [1,null,3]) => false
*/