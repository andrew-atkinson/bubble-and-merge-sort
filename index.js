function stepBubble(arr) {
  let returnArr = [];
  var changed = false;
  for (var i = 0; i < arr.length; i++) {
    if (changed) {
      return returnArr;
    }
    changed = true;
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        changed = false;
      }
    }
    // in order to create a new string and avoid create by reference.
    returnArr.push(arr.concat());
  }
  return returnArr;
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

let what = stepBubble(randomArr(20));

console.log(what);
