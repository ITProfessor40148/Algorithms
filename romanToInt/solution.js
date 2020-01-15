/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var num = 0;
    let i = 0;
    while(s[i] != null){
        switch(s[i]) {
            case 'M':
                num += 1000;break;
            case 'D':
                num += 500;break;
            case 'C':
                if(s[i-1]==='X'){
                    num += 100;
                    break;
                }
                switch(s[i+1]){
                    case 'M':
                        num -= 100;break;
                    case 'D':
                        num -= 100;break;
                    default: num += 100;break;
                    }
                break;
            case 'L':
                num += 50;break;
            case 'X':
                if(s[i-1]==='I'){
                    num += 10;
                    break;
                }
                switch (s[i+1]) {
                    case 'C':
                        num -= 10;break;
                    case 'L':
                        num -= 10;break;
                    default: num += 10;break;
                }
                break;
            case 'V':
                num += 5;break;
            case 'I':
                switch(s[i+1]) {
                    case 'X':
                        num -= 1;break;
                    case 'V':
                        num -= 1;break;
                    case 'I':
                        num += 1;break;
                    default: num += 1;break;
                }
                break;
        }
        i++;
    }
    return num;
};
/*
romanToInt("MC")===1100
romanToInt("III")===3
romanToInt("IV")===4
romanToInt("LVIII")===58
romanToInt("MCMXCIV")===1994
*/