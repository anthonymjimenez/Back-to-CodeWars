// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 
const merge = function (intervals) {
    intervals = intervals.sort(function (a, b) {    return a[0] - b[0];  });
    var newArray = [];
    for(let x = 0; x < intervals.length; x++) {
        if (newArray.length == 0)  {
        newArray.push(intervals[x])
        } else if(newArray[newArray.length -1][1] < intervals[x][0]) {
            newArray.push(intervals[x])
        } else { 
            newArray[newArray.length -1][1] = Math.max(newArray[newArray.length -1][1], intervals[x][1])
        }
    } 
    return newArray

}

  
  //console.log(merge([[1,3],[2,6],[8,10],[15,18]] ))

  // Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
var twoSum = function(nums, target) {
    let newArray = [];
    
    nums.forEach((num, index, srcArray) => {
        let counter = 0; 
        while(counter <= srcArray.length) {
            if(counter === index) return; 
            if(num + srcArray[counter] == target) {
                newArray.push(index, counter);
                break;
            } else { counter++; }
        }
    })
return newArray
}

var twoSum = function(nums, target) {
    let lookUp = {}
    for(let x = 0; x < nums.length; x++) {
        lookUp[x] = nums[x]
    }

    for(let x = 0; x < nums.length; x++) {
        let desired = target - nums[x]
        if(Object.values(lookUp).includes(desired) && Object.keys(lookUp).find(key => lookUp[key] === desired) != x) {
            return [x,  Object.keys(lookUp).find(key => lookUp[key] === desired)]
        }
    }
}
 console.log(twoSum([3,2,4],6))