/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    str = str.trim();
    let ans = "";
    let i = 0, MIN = (-2) ** 31, MAX = 2 ** 31 - 1;
    do {
        ans += str[i];
        i++;
    } while(/\d/.test(str[i]));
    i = parseInt(ans);
    if(i) {
        if(i > MAX) return MAX;
        if(i < MIN) return MIN;
        return i;
    }
    return 0;
};
/**
atoi("42") => 42
atoi("  311 ") => 311
atoi("abc 3") => 0
atoi("23abc") => 23
*/