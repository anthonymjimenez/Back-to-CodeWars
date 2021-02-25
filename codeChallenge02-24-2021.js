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

  
  console.log(merge([[1,3],[2,6],[8,10],[15,18]] ))