/**
 * 数组去重
 * @param  {Array} arr 需要去重的数组
 * @return {Array}     去重后的数组
 */
function unique(arr) {
    var obj = {},
        resArr = [];

    arr.forEach(function(item) {
        if (!obj.hasOwnProperty(item)) {
            obj[item] = 1;
            resArr.push(item);
        }
    });

    return resArr;
}