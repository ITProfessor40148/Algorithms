/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let len = needle.length;
    if(len === 0){
        return 0;
    }
    for(let i = 0; i < haystack.length; i++){
        if(haystack.slice(i, len + i) == needle){
            return i;
        }
    }
    return -1;
};
/**
strStr("hello", "ll") => 2
strStr("aaaaa", "bba") => -1
*/