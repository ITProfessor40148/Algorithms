/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let curr = nums[0];
    let i = 1;
    let n = [];
    while(nums[i] != null){
        if(nums[i] == curr){
            nums.splice(i-1, 1);
            i--;
        }else{
            curr = nums[i];
        }
        i++;
    }
};
/**
removeDuplicates([0,0,1,1,1,2,2,3,3,4])=>[0,1,2,3,4]
removeDuplicates([1,1,2])=>[1,2]
*/