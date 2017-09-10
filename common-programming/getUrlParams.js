/**
 * 获取 Url 参数，存入对象中。若属性只出现一次及以上存为数组
 * @param  {String}   url  url 字符串
 * @return {Object}        参数对象
 */
function getUrlParams(url) {
    var obj = {},
        reg = /\w+\={1}\w+/gi;

    url.split('?')[1].split('#')[0].match(reg).forEach(function(item, index) {
        var arr = item.split('=');

        if(!obj.hasOwnProperty(arr[0])) {
            obj[arr[0]] = arr[1];
        } else {
            if(Object.prototype.toString.call(obj[arr[0]]) === '[object Array]') {
                obj[arr[0]].push(arr[1]);
            } else {
                obj[arr[0]] = [obj[arr[0]]].concat(arr[1]);
            }
        }
    });

    return obj;
}