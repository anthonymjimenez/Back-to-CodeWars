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
  var array = [];
  for (let x = arr.length - 1; x >= 0; x--) {
    array.push(maxNumber);
    maxNumber = Math.max(maxNumber, arr[x]);
  }
  return array.reverse();
};

console.log(replaceElements([17, 5, 18, 5, 4, 6, 1]));
