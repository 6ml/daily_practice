/**
 * 判断字符串是否是回文
 * @param  {String} str 字符串
 * @return {Boolean}    
 */
function palin(str) {
    return str === str.split('').reverse().join('') ? true : false;
}