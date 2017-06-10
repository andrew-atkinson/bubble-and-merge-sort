function stepBubble(arr) {
  let returnArr = [];
  var changed = true;
  for (var i = 0; i < arr.length; i++) {
    if (!changed) {
      return returnArr;
    }
    [arr, changed] = stepBubbleInnerLoop(arr, returnArr, changed);
  }
  return returnArr;
}

function stepBubbleInnerLoop(arr, returnArr, changed = false) {
  for (var j = 0; j < arr.length; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      changed = true;
    }
  }
  returnArr[j] = arr;
  return [arr, changed]
}

function randomArr(len) {
  let arr = [];
  for (var i = 0; i < len; i++) {
    let digit = Math.floor(Math.random() * len);
    if (arr.indexOf(digit) === -1) {
      arr.push(digit)
    } else {
      i--
    }
  }
  return arr
}

stepBubble(randomArr(20));
