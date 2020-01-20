/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let tmp = "";
    let i = 0, ans = 0;
    while(s[i] != null){
        if(tmp.includes(s[i]) == true){
            tmp = "";
            s = s.substring(1, s.length);
            i = -1;
        }else{
            tmp += s[i];
        }
        if(ans<tmp.length){
            ans = tmp.length;
        }
        i++;
    }
    return ans;
};
/**
lengthOfLongestSubstring("abcabcbb") => 3
lengthOfLongestSubstring("bbbbb") => 1
lengthOfLongestSubstring("pwwkew") => 3
*/