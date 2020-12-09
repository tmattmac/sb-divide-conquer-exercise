function findRotationCount(arr) {
  // edge case
  if (arr[0] <= arr[arr.length - 1]) return 0;
  let last = arr[arr.length - 1];

  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] < arr[mid - 1]) return mid;

    if (arr[mid] < last) r = mid - 1;
    else l = mid + 1;
  }
}

module.exports = findRotationCount