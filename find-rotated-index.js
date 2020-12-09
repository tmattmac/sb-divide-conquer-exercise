function findRotatedIndex(arr, target) {
  // edge cases
  if (arr[arr.length - 1] === target) return arr.length - 1;
  if (arr[0] === target) return 0;

  let last = arr[arr.length - 1];
  let first = arr[0];

  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] > target) {
      if (arr[mid] > last && target < last) l = mid + 1;
      else r = mid - 1;
    }
    else if (arr[mid] < target) {
      if (arr[mid] > first && target < last) r = mid - 1;
      else l = mid + 1;
    }
    else return mid;
  }
  return -1;
}

module.exports = findRotatedIndex