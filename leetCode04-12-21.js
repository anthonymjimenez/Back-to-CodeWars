var judgeCircle = function (moves) {
  return [...moves]
    .reduce(
      (acc, curr) => {
        curr === "L" || curr === "R"
          ? (acc[0] = curr === "L" ? acc[0] - 1 : acc[0] + 1)
          : (acc[1] = curr === "U" ? acc[1] - 1 : acc[1] + 1);
        return acc;
      },
      [0, 0]
    )
    .every((el) => el === 0);
};
