function sortedFrequency(arr, target) {
  let l = 0;
  let r = arr.length - 1;
  let leftBound, rightBound;

  // find first occurence
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] === target) {
      if (mid === 0 || arr[mid - 1] < target) {
        leftBound = mid;
        break;
      }
      r = mid - 1;
    }
    else if (arr[mid] < target) {
      l = mid + 1;
    }
    else {
      r = mid - 1;
    }
  }
  if (leftBound === undefined) return -1;
  
  l = leftBound;
  r = arr.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] === target) {
      if (mid === arr.length - 1 || arr[mid + 1] > target) {
        rightBound = mid;
        break;
      }
      l = mid + 1;
    }
    else if (arr[mid] < target) {
      l = mid + 1;
    }
    else {
      r = mid - 1;
    }
  }

  return rightBound - leftBound + 1;
}

module.exports = sortedFrequency