"use strict";
function fib(a) {
  if (typeof a !== "number" || !Number.isInteger(a)) {
    return "";
  } else {
    let arr = [0, 1];
    for (let i = 2; i < a; i++) {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
    arr = arr.slice(0, a);
    return arr.join(" ");
  }
}
