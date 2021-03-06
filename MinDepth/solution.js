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
var minDepth = function(root) {
    if (!root) return 0;
    else if (root.left && root.right)
        return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
    else if (root.left)
        return minDepth(root.left) + 1;
    else if (root.right)
        return minDepth(root.right) + 1;
    else
        return 1;
};
/**
 * minDepth([3,9,20,null,null,15,7]) => 2
 * minDepth([1,2]) => 1
 */