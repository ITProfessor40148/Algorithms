/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    return (BigInt(digits.join("")) + 1n).toString().split("");
};

/**
plusOne([1,2,3]) => [1,2,4]
plusOne([4,3,2,1]) => [4,3,2,2]
plusOne([1,9,9,9,9]) => [2,0,0,0,0]
*/