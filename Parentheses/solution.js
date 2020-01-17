/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let m = new Map([
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ]);
    let tmp = [];
    let i = 0;
    while(s[i] != null){
        if(s[i] === '{' || s[i] === '[' || s[i] === '('){
            tmp.push(s[i]);
        }else{
            if(s[i] !== m.get(tmp.pop())){
                return false;
            }
        }
        i++;
    }
    if(tmp.length !== 0){
        return false;
    }
    return true;
};
/**
 * isValid("()") => true
 * isValid("({}[])") => true
 * isValid("({[]})") => true
 * isValid("") => true
 * isValid("([)") => true
 * isValid("(})") => true
 */
 /**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let tmp = [];
    let i = 0;
    while(s[i] != null){
        switch(s[i]){
            case '{': tmp.push('}'); break;
            case '[': tmp.push(']'); break;
            case '(': tmp.push(')'); break;
            default: 
                if(s[i] !== tmp.pop()){
                    return false;
                }
        }
        i++;
    }
    return tmp.length === 0;
};
/**
 * isValid("()") => true
 * isValid("({}[])") => true
 * isValid("({[]})") => true
 * isValid("") => true
 * isValid("([)") => true
 * isValid("(})") => true
 */