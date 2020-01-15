/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let res = 0;
    if (x < 0) {
        x = Math.abs(x);
        res = -Number(String(x).split('').reverse().join(''));
    } else {
        res = Number(String(x).split('').reverse().join(''));
    }
    if (res < (Math.pow(2, 31) * -1) || res > Math.pow(2, 31) - 1) {
        return 0;
    }
    return res;
};
