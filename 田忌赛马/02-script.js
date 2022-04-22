 /**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function(nums1, nums2) {
    // nums1升序排列
    nums1.sort(function(a, b) {return a - b});
    let lenA = nums1.length;
    var ans = new Array(lenA).fill(0);

    // nums2的index按降序排列
    let indexB = new Array(lenA).fill(0).map((val, index) => (index));
    indexB.sort(function(a, b) {
        if (nums2[a] > nums2[b]) return -1;
        return 1;
    })
    
    // 左右双指针
    // nums1[left]是最小值，nums[right]是最大值
    var left = 0;
    var right = lenA - 1;
    var i = 0;
    while(i < lenA) {
        // 如果nums1能赢，自己上
        if (nums2[indexB[i]] < nums1[right]) {
            ans[indexB[i]] = nums1[right];
            right--;
        } else { //nums1不能赢，最小值上
            ans[indexB[i]] = nums1[left];
            left++;
        }
        i++;
    }
    return ans;

};


let nums1 = [2, 0, 4, 1, 2];
let nums2 = [1, 3, 0, 0, 2];
let target = advantageCount(nums1, nums2);
console.log(target);

