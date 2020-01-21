/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let words = s.split("").reverse().join("").split(" ");
    let i = 0;
    while (words[i] === "") {
        i++;
    }
    return words[i] ? words[i].length : 0;
};
/**
lengthOfLastWord("hello world") => 5
lengthOfLastWord("a ") => 1
lengthOfLastWord(" ") => 0
lengthOfLastWord("     ") => 0
*/