function longest(s1, s2) {
  let newString = "";

  for (let i = 0; i <= s1.length; i++) {
    if (!newString.includes(s1.charAt(i))) newString += s1.charAt(i);
  }

  for (let i = 0; i <= s2.length; i++) {
    if (!newString.includes(s2.charAt(i))) newString += s2.charAt(i);
  }

  return newString.split("").sort().join("");
}

longest("hi", "hey");
