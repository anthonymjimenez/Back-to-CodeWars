//17
// 18 5 4
// O(n^2)

// 17
// 18 5 4 currentLargest = 18, 1

// 18 , (index: 1)
// 5 4 currentLargest = max: 5, index: 2

// 5, (index: 2)
// 4

var replaceElements = function (arr) {
  var maxNumber = -1;
  var lastNumber = arr[arr.length - 1];
  var array = [];
  for (let x = arr.length - 1; x >= 0; x--) {
    // O(n)
    let tempNumber = maxNumber;
    maxNumber = Math.max(maxNumber, arr[x]);
    lastNumber == arr[x] && arr.length == x + 1
      ? array.push(-1)
      : array.push(tempNumber);
  }
  return array;
};

replaceElements([17, 18, 5, 4, 6, 1]);
