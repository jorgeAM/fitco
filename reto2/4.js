function minimumCandies(array) {
  let min = 1;

  return array.reduce((ac, c, i, arr) => {
    if (i === 0) return ac;

    if (c > arr[i - 1]) {
      min++;
      return ac + min;
    }

    min = 1;
    return ac + 1;
  }, 1);
}

console.log(minimumCandies([4, 6, 4, 5, 6, 2]) === 10);
