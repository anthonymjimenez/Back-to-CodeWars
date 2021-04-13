var shuffle = function (nums, n) {
  const cordArray = [];
  for (let x = 0; x < n; x++) {
    cordArray.push(nums[x], nums[x + n]);
  }
  return cordArray;
};

console.log(shuffle([1, 2, 3, 4, 5, 6], 3));
