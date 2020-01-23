var climbStairs = function(n) {
    let i = 0, a = 0, b = 1, ans = 0;
    while(i <= n - 1){
        ans = a + b;
        a = b;
        b = ans;
        i++;
    }
    return ans;
};
/**
climbStairs(2) => 2
climbStairs(3) => 3
climbStairs(4) => 5
climbStairs(44) => 1134903170
*/
//Recursion method but time limit exceeded.
var climbStairs = function(n) {
    if(n == 1 || n === 0) {
        return 1;
    }
    let count = 0;
    count = climbStairs(n - 1) + climbStairs(n - 2);
    return count;
}
/**
climbStairs(2) => 2
climbStairs(3) => 3
climbStairs(4) => 5
climbStairs(44) => 1134903170
*/