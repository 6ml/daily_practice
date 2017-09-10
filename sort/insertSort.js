/**
 * 插入排序
 * @param  {Array}  arr 需要进行插入排序的数组
 * @return {[type]}     [description]
 */
function insertSort(arr) {
    var tmp;

    for (var i = 1; i < arr.length; i++) {
        tmp = arr[i];

        for (var j = i; j >= 0; j--) {

            if(arr[j - 1] > tmp) {
                arr[j] = arr[j - 1];
            } else {
                arr[j] = tmp;
                break;
            }
        }
    }
}