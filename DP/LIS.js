/**
 * 获取最长升序子序列
 * @param  {Array}  arr 元素为数字的数组
 * @return {Number}     最长升序子序列长度
 */
function getLIS (arr) {

    var length = arr.length,
        dp = arr.map(function(){
            return 1;
        });

    for(var i = length - 2; i >= 0; i--) {
        for(var j = i + 1; j < length; j++) {
            if(arr[i] < arr[j] && dp[i] <= dp[j]){
                dp[i] = dp[j] + 1;
            }
        }
    }

    longest = Math.max.apply(null, dp);
    return longest;
}