// String matchup : https://www.codewars.com/kata/59ca8e8e1a68b7de740001f4

function solve(a, b) {
  var counter = 0;
  return b.map((secondArrayArg) => {
    a.forEach((firstArrayArg) => {
      if (secondArrayArg == firstArrayArg) {
        counter = counter + 1;
      }
    });
    var tempVal = counter;
    counter = 0;
    return tempVal;
  });
}

// revised
const _solve = (a, b) => b.map((elm) => a.filter((e) => e === element).length);


// Loose Change: https://www.codewars.com/kata/5571f712ddf00b54420000ee

function looseChange(cents) {
  cents = Math.floor(cents);
  var coinHash = { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 };
  cents > 0 &&
    [25, 10, 5, 1].forEach((coinAmount) => {
      let counter = 0;
      while (cents >= coinAmount) {
        cents = cents - coinAmount;
        counter += 1;
      }
      if (coinAmount == 25) {
        coinHash["Quarters"] = counter;
      } else if (coinAmount == 10) {
        coinHash["Dimes"] = counter;
      } else if (coinAmount == 5) {
        coinHash["Nickels"] = counter;
      } else {
        coinHash["Pennies"] = counter;
      }
    });
  return coinHash;
}

// revised
function _looseChange(cents) {
  var a = { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 };
  if (cents <= 0) return a;
  a.Quarters = Math.floor(cents / 25);
  a.Dimes = Math.floor((cents % 25) / 10);
  a.Nickels = Math.floor(((cents % 25) % 10) / 5);
  a.Pennies = Math.floor(((cents % 25) % 10) % 5);
  return a;
}

// Common array elements 
// https://www.codewars.com/kata/5a6225e5d8e145b540000127

const common = (a, b, c) =>
  a
    .filter((elm) => {
      let indexes = [b, c].map((e) => e.indexOf(elm));

      return (
        indexes.every((e) => e > -1) &&
        (function () {
          b.splice(indexes[0], 1);
          c.splice(indexes[1], 1);
          return true;
        })()
      );
    })
    .reduce((acc, curr) => acc + curr, 0);


