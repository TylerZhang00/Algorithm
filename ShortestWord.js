function findShort(s) {
  let shortestWord;
  let splitWord = s.split(" ");
  splitWord.forEach((word) => {
    if (!shortestWord) shortestWord = word.length;
    if (word.length < shortestWord) shortestWord = word.length;
  });
  return shortestWord;
}

findShort("hi hey hello");
