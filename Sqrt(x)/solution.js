/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let m = 0;
    while(m*m <= x){
        m++;
    }
    return m - 1;
};
/**
mySqrt(4) => 2
mySqrt(8) => 2
mySqrt(976) => 31
*/