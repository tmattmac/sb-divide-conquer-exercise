function countZeroes(arr) {
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] === 0) {
      if (mid === 0 || arr[mid - 1] === 1) {
        return arr.length - mid;
      }
      r = mid - 1;
    }
    else {
      if (mid === arr.length - 1 || arr[mid + 1] === 0) {
        return arr.length - mid - 1;
      }
      l = mid + 1;
    }
  }
  return 0;
}

module.exports = countZeroes