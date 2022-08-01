module.exports = function check(str, bracketsConfig) {
    let stack = [];
    stack.push(str[0]);
    for (let i = 1; i < str.length; i++){
        if (bracketsConfig.some(e => e[0] == stack[stack.length - 1] && e[1] == str[i])){
            stack.pop();
        } else {
            stack.push(str[i]);
        };
    };
    return stack.length == 0;
}
