const chunk = (array, size) => {
  const result = [];
  const copy = [...array];
  const numOfResultLength = Math.ceil(copy.length / size);

  for (let i = 0; i < numOfResultLength; i++) {
    result.push(copy.splice(0, size));
  }

  return result;
};

console.log(chunk([1, 2, 4, 5, 6, 7, 8], 5));
