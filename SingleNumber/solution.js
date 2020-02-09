/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var r = 0;
    for(var i = 0; i < nums.length;i++){
        r=r^nums[i]
    }
    return r;
};

/**
 * singleNumber([2,2,1]) => 1
 * singleNumber([4,1,2,1,2]) => 4
 */