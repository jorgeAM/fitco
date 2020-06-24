const maxChar = (str) => {
  const counter = {};

  for (let i = 0; i < str.length; i++) {
    counter[str[i]] = (counter[str[i]] || 0) + 1;
  }

  let max = 0;
  let k = "";

  for (const key in counter) {
    if (counter[key] > max) {
      max = counter[key];
      k = key;
    }
  }

  return k;
};

console.log(maxChar("abcccccccd") === "c");
