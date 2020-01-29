/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(root==null) return true;
    if(Math.abs(deepchar(root.left) - deepchar(root.right)) > 1) return false;
    if(isBalanced(root.left) == false) return false;
    if(isBalanced(root.right) == false) return false;
    return true;
}
var deepchar = function(root) {
    let deep = 0, dl = 0, dr = 0;
    if(root == null) return 0;
    else deep = 1;
    dl = deepchar(root.left);
    dr = deepchar(root.right);
    deep += dl>dr? dl:dr;
    return deep;
}
/**
* isBalanced([3,9,20,null,null,15,7]) => true
* isBalanced([1,2,2,3,3,null,null,4,4]) => false
*/