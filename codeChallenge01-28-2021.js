function incrementString(string) {
    let lastChar = string[string.length - 1];
    let restOfString = string.slice(0, string.length - 1);
    if (!isNaN(lastChar) && lastChar !== "9") {
      return `${restOfString}${parseInt(lastChar) + 1}`;
    } else if (isNaN(lastChar)) return `${string}${1}`;
    else {
      let numbers = string.replace(/[^0-9.]/g, "");
      let nonNumbers = `${string.replace(/[0-9]/g, "")}`;
      let newNum = parseInt(string.replace(/[^0-9.]/g, "")) + 1;
      return numbers.length > newNum.toString().length
        ? `${nonNumbers}0${newNum}`
        : `${nonNumbers}${newNum}`;
    }
  }

// return string.split('')[string.length - 1]

console.log(incrementString("foo")); //, "foobar001")
// console.log(incrementString("foo"))//, "foo1")
