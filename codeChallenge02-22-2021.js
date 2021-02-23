// function loop_size(node){
//     var turtle = node;
//     var rabbit = node;

//     // Find a point in the loop.  Any point will do!
//     // Since the rabbit moves faster than the turtle
//     // and the kata guarantees a loop, the rabbit will
//     // eventually catch up with the turtle.
//     do {
//       turtle = turtle.getNext();
//       rabbit = rabbit.getNext().getNext();
//     }
//     while (turtle != rabbit);

//     // The turtle and rabbit are now on the same node,
//     // but we know that node is in a loop.  So now we
//     // keep the turtle motionless and move the rabbit
//     // until it finds the turtle again, counting the
//     // nodes the rabbit visits in the mean time.
//     var count = 0;
//     do {
//       ++count;
//       rabbit = rabbit.getNext();
//     }
//     while (turtle != rabbit);

//     // voila
//     return count;
//   }

function firstNonRepeatingLetter(s) {
  let wordArray = s.split("");
  let nonRepeatingFound = false;

  if (s == "" || wordArray.length == 1) return s;

  while (!nonRepeatingFound && wordArray.length > 0) {
    let currentLetter = wordArray[0];
    if (
      wordArray.filter(
        (elm) => elm.toLowerCase() == currentLetter.toLowerCase()
      ).length == 1 ||
      wordArray.length == 1
    ) {
      nonRepeatingFound = true;
    } else {
      wordArray = wordArray.filter(
        (elm) => elm.toLowerCase() !== currentLetter.toLowerCase()
      );
      currentLetter = wordArray[0];
    }
  }
  return wordArray.length == 0 ? "" : wordArray[0];
}
console.log(firstNonRepeatingLetter("bbbb"));
