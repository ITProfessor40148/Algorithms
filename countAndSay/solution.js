/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n==1)
        return "1";
    let str = countAndSay(n-1);
    let tmp = str[0], ans = 0, i = 0, res="";
    while(str[i] != null) {
        if(str[i] == tmp) {
            ans++;
        }else{
            res += ans + tmp;
            tmp = str[i];
            ans = 1;
        }
        i++;
    }
    res += ans + tmp;
    return res;
};
/**
countAndSay(1) => "1"
countAndSay(2) => "11"
countAndSay(3) => "21"
countAndSay(4) => "1211"
countAndSay(5) => "111221"
countAndSay(6) => "312211"
*/