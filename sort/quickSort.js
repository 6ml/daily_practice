/**
 * 快速排序
 * @param  {Array}  arr 需要进行快速排序的数组
 * @return {[type]}     [description]
 */
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    var partitionIndex = Math.floor(arr.length / 2),
        temp,
        left = [],
        right = [];
    
    tmp = arr[partitionIndex];

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] < tmp) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return quickSort(left).concat([tmp], quickSort(right));
}