/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    return root == null?0:1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
/**
* maxDepth([3,9,20,null,null,15,7]) => 3
*/