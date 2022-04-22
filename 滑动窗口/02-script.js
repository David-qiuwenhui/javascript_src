var minWindow = function (s, t) {
    let need = {};
    let window = {};
    let left = 0, right = 0;
    let valid = 0;
    let start = 0, len = Number.MAX_VALUE;

    // 统计需要的字符
    for (let a of t) {
        need[a] = (need[a] || 0) + 1;
    }
    
    while (right < s.length) {
        // c是将移入窗口的字符
        let c = s[right];
        // 右移窗口
        right++;
        //进行窗口内数据的一些系列更新
        if (need[c]) {
            window[c] = (window[c] || 0) + 1;
            if (window[c] == need[c]) {
                valid++;
            }
        }

        // 判断左侧窗口是否要收缩
        while (valid == Object.keys(need).length) {
            // 在这里更新最小覆盖子串
            if (right - left < len) {
                start = left;
                len = right - left;
            }
            //d是将移出窗口的字符
            let d = s[left];
            // 左移窗口
            left++;
            //进行窗口内数据的一系列更新
            if (need[d]) {
                if (window[d] == need[d]) {
                    valid--;
                }
                window[d]--;
            }
        }
    }
    return len == Number.MAX_VALUE ? "" : s.substr(start, len);
};


var s = "ADOBECODEBANC";
var t = "ABC";
var target = minWindow(s, t);
console.log(target);








