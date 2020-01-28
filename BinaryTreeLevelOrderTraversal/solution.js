/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root, traversal = [], level = 1) {
    if (!root) {
        return traversal;
    }
    
    if (level > traversal.length) {
        if (!traversal.length) {
            traversal.push([root.val]);
        } else {
            traversal.unshift([root.val]);
        }
    } else if (level <= traversal.length) {
        traversal[traversal.length - level].push(root.val);
    }
    
    levelOrderBottom(root.left, traversal, level + 1);
    levelOrderBottom(root.right, traversal, level + 1);
    
    return traversal;
};
/**
* levelOrderBottom([3,9,20,null,null,15,7]) => [[15,7],[9,20],[3]]
*/