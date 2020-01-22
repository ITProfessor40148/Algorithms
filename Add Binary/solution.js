/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = 0, cur = 0, res = "";
    let m = new Map();
    m.set('1', 1);
    m.set('0', 0);
    m.set(undefined, 0);
    a = a.split("").reverse().join("");
    b = b.split("").reverse().join("");
    while(a[i] != null || b[i] != null){
        let tmp = m.get(a[i]) + m.get(b[i]) + cur;
        cur = (tmp & 2)>>1;
        res += String(tmp & 1);
        i++;
    }
    if(cur == 1) {
        res += "1";
    }
    return res.split("").reverse().join("");
};
/**
addBinary("11", "1") => "100"
addBinary("1010", "1011") => "10101"
addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101", "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011") => "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"
*/