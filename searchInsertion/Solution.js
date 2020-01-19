/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var i = 0;
    while(nums[i]<target){
        i++;
    }
    return i;
};
/**
searchInsert([1,3,5,6], 5) => 2
searchInsert([1,3,5,6], 2) => 1
searchInsert([1,3,5,6], 7) => 4
searchInsert([1,3,5,6], 0) => 0
*/