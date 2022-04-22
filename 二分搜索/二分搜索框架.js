/* // 二分搜索框架（注意细节）
function binarySearch(nums, target) {
    let left = 0,
        right = ...;
    
    while (...) {
        const mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] == target) {
            ...
        } else if (nums[mid] < target) {
            left = ...
        } else if (nums[mid] > target) {
            right = ...
        }
    }
    return ...;
} */

// 二分搜索
function binarySearch(nums, target) {
    let left = 0,
        right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2); // 防溢出
        if (nums[mid] == target) {
            // 直接返回
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        }
    }
    // 直接返回
    return -1;
}

// 寻找左侧边界的二分搜索
function leftBoundSearch(nums, target) {
    if (nums.length == 0) return -1;
    // 搜索区间为[left, right]
    let left = 0;
    let right = nums.length - 1; // 注意

    while (left <= right) { // 注意
        const mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] === target) {
            // 收缩右侧边界
            right = mid - 1; // 注意
        } else if (nums[mid] < target) {
            // 搜索区间变为[mid+1, right]
            left = mid + 1;
        } else if (nums[mid] > target) {
            // 搜索区间变为[left, mid-1]
            right = mid - 1;
        }
    }
    // 检查越界情况
    if (left >= nums.length || nums[left] != target) return -1;
    // 类似之前算法的处理方式
    return left;
}

// 寻找右侧边界的二分搜索
function rightBoundSearch(nums, target) {
    if (nums.length == 0) return -1;
    let left = 0;
    let right = nums.length - 1; // 注意

    while (left <= right) { // 注意
        const mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] === target) {
            // 收缩左侧边界
            left = mid + 1; // 注意
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        }
    }
    // 检查越界情况
    if (right < 0 || nums[right] != target) return -1;
    // 类似之前算法的处理方式
    return right;
}

console.log(binarySearch([5, 8, 8, 8, 8, 10], 8));
console.log(leftBoundSearch([5, 8, 8, 8, 8, 10], 8));
console.log(rightBoundSearch([5, 8, 8, 8, 8, 10], 8));





