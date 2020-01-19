/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for(let i = 0; nums[i] != null; i++){
        if(nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};
/**
removeElement([3,2,2,3], 3)=>2 : nums => [2, 2]
removeElement([0,1,2,2,3,0,4,2], 2)=>5 : nums => [0,1,3,0,4]
*/