/**
 * 冒泡排序
 * @param  {Array}  arr 需要进行冒泡排序的数组
 * @return {[type]}     [description]
 */
function bubbleSort(arr) {
    var length = arr.length;

    for (var outer = length; outer >= 2; --outer) {
        for (var inner = 0; inner <= outer - 1; ++inner) {
            if (arr[inner] > arr[inner + 1]) {
                swap(arr, inner, inner + 1);
            }
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
