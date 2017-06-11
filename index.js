'use strict'

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
    } // in order to create a new string and avoid create by reference.
    returnArr.push(arr.concat());
  }
  return returnArr;
}


function mergeSort(arr) {
  // halve arr
  if (arr.length < 2) return arr;

  let l = arr.slice(0, Math.floor(arr.length / 2));
  let r = arr.slice(Math.floor(arr.length / 2), arr.length);
  // then merge pairs (once pair base is met)
  return merge(mergeSort(l), mergeSort(r));
}

function merge(l, r) {
  let result = [];

  // where's still left or right left
  while (l.length && r.length) {
    // if the left is lower than right, push it on the RESULT.
    if (l[0] < r[0]) {
      result.push(l.shift());
    } else {
      result.push(r.shift());
    }
  }
  return result.concat(l).concat(r);
}

let arr = randomArr(100);
console.log('original: ' + arr);
console.log('logged: ' + mergeSort(arr));
console.log(stepBubble(randomArr(20)));


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
