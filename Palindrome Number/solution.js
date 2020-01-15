/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return String(x)===String(x).split("").reverse().join("")?true:false;
};

/**
isPalindrome(121)===true
isPalindrome(-121)===false
isPalindrome(10)===false
isPalindrome(12321)===true
*/