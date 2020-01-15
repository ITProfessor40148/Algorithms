/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var n = x;
    var m = 0;
    while(n > 0){
        m = n % 10 + m * 10;
        n /= 10;
        n = parseInt(n)
    }
    if(n % 10 === 0 && n !== 0){
        return false;
    }
    return x === m;
};

/**
isPalindrome(121)===true
isPalindrome(-121)===false
isPalindrome(10)===false
isPalindrome(12321)===true
*/