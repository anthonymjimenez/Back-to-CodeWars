// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

const likes = (names) => {
  if (names.length == 0 || names.length == 1)
    return `${
      names.length != 0 ? names.map((name) => name) : "no one"
    } likes this`;
  else {
    return `${names.length == 2 && `${names[0]} and ${names[1]}` } ${
      names.length == 3 && `${names[0]}, ${names[1]} and ${names[2]}`
    } ${
      names.length > 3 &&
      `${names[0]}, ${names[1]} and ${names.length - 2} others`
    } like this`.split(" ").filter(el => el != 'false').join(' ')
  }
};


console.log(likes(['a', 'b', 'c', ])
)