// 滑动窗口算法框架
var slideWindow = function (s, t) {
    let need = {};
    let window = {};
    let right = 0, left = 0;
    let valid = 0;
    for (let n of t) {
        need[n] = (need[n] || 0) + 1;
    }

    while (right < s.length) {
        // c是将移入窗口的字符
        let c = s[right];
        // 右移（增大）窗口
        right++;
        // 增加窗口内数据的一系列更新
        /* ... */

        // debug输出的位置
        // var printf = {"left": left, "right": right};
        // console.log(printf);

        // 判断左侧窗口是否要收缩
        while (right - left >= t.length) {
            // d是将移出窗口的字符
            let d = s[left];
            // 左移（缩小）窗口
            left++;
            // 进行窗口内数据的一系列更新
            /* ... */
        }
    }
}