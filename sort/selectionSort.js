/**
 * 选择排序
 * @param  {Array}  arr 需要进行选择排序的数组
 * @return {[type]}     [description]
 */
function selectionSort (arr) {
    var length = arr.length,
        min;

    for(var outer = 0; outer <= length - 2; ++outer) {
        min = outer;

        for(var inner = outer + 1; inner <= length - 1; ++inner) {
            if(arr[inner] < arr[min]) {
                min = inner;
            }
            swap(arr, outer, min);
        }
    }
}

/**
 * 交换数组中两个元素的位置
 * @param  {Array}  arr    数组
 * @param  {Number} index1 第一个位置
 * @param  {Number} index2 第二个位置
 * @return {[type]}        [description]
 */
function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
