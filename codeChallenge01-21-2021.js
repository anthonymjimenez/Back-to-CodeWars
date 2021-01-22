// Who likes this?
//https://www.codewars.com/kata/5266876b8f4bf2da9b000362
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

const likes = (names) => {
    if (names.length == 0 || names.length == 1)
      return `${names.length === 0 ? "no one" : names[0]} likes this`;
    else {
      return`${names.length > 3
        ? `${names[0]}, ${names[1]} and ${names.length - 2} others`
        : names.length == 2
        ? `${names[0]} and ${names[1]}`
        : `${names[0]}, ${names[1]} and ${names[2]}`} like this`
    }
  };

//Sum of Digits / Digital Root
//https://www.codewars.com/kata/541c8630095125aba6000c00/javascript
//Digital root is the recursive sum of all the digits in a number.
//Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function digital_root(n) {
  var finalSum = sum(n);
  while (finalSum >= 10) {
    finalSum = sum(finalSum);
  }
  return finalSum;
}
const sum = (n) =>
  n
    .toString()
    .split("")
    .map((num) => parseInt(num))
    .reduce((acc, current) => acc + current);

// Smith Case
// https://www.codewars.com/kata/5390bac347d09b7da40006f6

String.prototype.toJadenCase = function (arg) {
  return this.split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
