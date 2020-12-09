function findFloor(arr, target) {
  // edge cases
  if (arr[0] > target) return -1;
  if (arr[arr.length - 1] < target) return arr[arr.length - 1];

  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] === target) return target;

    if (arr[mid] > target) {
      if (arr[mid - 1] <= target) return arr[mid - 1];
      r = mid - 1;
    }
    else {
      l = mid + 1;
    }
  }
  return -1;
}

module.exports = findFloor