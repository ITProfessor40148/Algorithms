/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
        return strs.reduce((prefix, word) => {
            while(!word.startsWith(prefix)) {
                prefix = prefix.slice(0, -1);
            }
            return prefix;
        }, strs[0]);
};

/**
longestCommonPrefix(["flower","flow","flight"]) => "fl"
longestCommonPrefix(["dog","racecar","car"]) => ""
longestCommonPrefix(["c","fcc","fccc"]) => ""
longestCommonPrefix([]) => ""
*/