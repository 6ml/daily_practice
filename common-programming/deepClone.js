/**
 * 对象深拷贝
 * @param  {Object} obj 需要深拷贝的对象
 * @return {Object}     拷贝得到的新对象
 */
function deepClone(obj) {
    if (typeof obj !== 'object') {
        return obj;
    }

    if (obj instanceof Array) {
        var newobj = [];
    } else {
        var newobj = {};
    }

    for (var key in obj) {
        if (typeof obj[key] !== 'object') {
            newobj[key] = obj[key];
        } else {
            newobj[key] = deepClone(obj[key]);
        }
    }

    return newobj;
}
/**
 * JSON 方法
 * newObj = JSON.parse(JSON.stringify(obj));
 */

/**
 * 数组拷贝
 * -    for 循环
 * -    newArr = arr.slice(0);
 * -    newArr = arr.concat();
 */
