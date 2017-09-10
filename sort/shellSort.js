/**
 * 希尔排序
 * @param  {Array}  arr 需要进行希尔排序的数组
 * @return {[type]}     [description]
 */
function shallSort(arr) {
    var increment = arr.length,
        i,
        temp, //暂存
        count = 0;

    do {
        //设置增量
        increment = Math.floor(increment / 3) + 1;

        for (i = increment; i < arr.length; i++) {

            if (arr[i] < arr[i - increment]) {
                temp = arr[i];

                for (var j = i - increment; j >= 0 && temp < arr[j]; j -= increment) {
                    arr[j + increment] = arr[j];
                }

                arr[j + increment] = temp;
            }
        }
    } while (increment > 1);
}