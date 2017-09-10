/**
 * 判断括号是否为合法括号，利用栈的思想
 * @param   {String}  str  括号字符串
 * @return  {Boolean}
 */
function matchBracket(str) {
    var arr = str.split(''),
        stack = [];

    if (str.length === 0) {
        return false;
    } else if (str.length % 2 !== 0) {
        return false;
    }

    arr.forEach(function(item) {

        if (item === '(') {
            stack.push(1);
        } else {
            stack.pop(1);
        }
    });

    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
}