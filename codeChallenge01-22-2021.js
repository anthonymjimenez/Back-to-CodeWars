// function queueTime(customers, n) {
//     //TODO
//     if (n == 1) {
//       return customers.reduce((acc, curr) => { return acc + curr;}
//       , 0);
//     } else if (customers.length < n) {
//       return Math.max(...customers);
//     }
//     while(customers.length > 0) {
//         for(let)
//     }
//   }

  // check out thread pool algos 

  function queueTime(customers, n) {
    let tills = Array(n).fill(0); // creates an array of n amount of 0s representing the amount of time on machines before customers
    customers.forEach((customer) => {
    let nextTill = tills.indexOf(Math.min(...tills)) // nextTill is the index of the till that has the least amount of time currently
    tills[nextTill] += customer; // add the customers time to the lowest till 
    }); // this process continues until the total time of each machine is determined
  
    return Math.max(...tills); // the maximum amount of time of an individual till is equal to the total queue time 
  }


queueTime([2,3,4,5,1,7,8,8,8,9,9,9,9], 5)