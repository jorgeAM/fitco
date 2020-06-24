const chunk = (array, size) => {
  if (array.length <= 0) {
    return [];
  }

  return array.reduce(
    (c, v, i, a) =>
      i + size <= a.length ? c.concat([a.slice(i, i + size)]) : c,
    []
  );
};

console.log(chunk([1, 2, 4, 5, 6, 7, 8], 5));
