/**
 * 归并排序
 * @param  {Array}  arr 需要进行归并排序的数组
 * @return {[type]}     [description]
 */
function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    var mid = Math.floor(arr.length / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

/**
 * [merge description]
 * @param  {[type]} left  [description]
 * @param  {[type]} right [description]
 * @return {[type]}       [description]
 */
function merge(left, right) {
    var tmp = [];

    while (left.length && right.length) {

        if (left[0] < right[0]) {
            tmp.push(left.shift());
        } else {
            tmp.push(right.shift());
        }
    }

    return tmp.concat(left, right);
}