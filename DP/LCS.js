/**
 * 获取最长公共子串(连续)
 * @param  {String} str1 字符串1
 * @param  {String} str2 字符串2
 * @return {String}      提取出的公共子串
 */
function getLCS (str1, str2) {
    var maxLen = 0,
        index = 0,
        arr = [];

    for(var i = 0; i <= str1.length; i++) {
        arr[i] = [];

        for(var j = 0; j < str2.length; j++) {
            if(i === 0 || j === 0) {
                arr[i][j] = 0;
            }
            else if(str1[i-1] === str2[j-1]) {
                arr[i][j] = str1[i-1] === str2[j-1] ? arr[i-1][j-1] + 1 : 1;
            }
            else {
                arr[i][j] = 0;
            }
            if(arr[i][j] > maxLen) {
                maxLen = arr[i][j];
                index = i;
            }
        }
    }

    return str1.slice(index - maxLen, index);
}