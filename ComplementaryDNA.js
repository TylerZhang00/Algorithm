const DNAStrand = (DNA) => {
  let answer = "";
  for (let i = 0; i < DNA.length; i++) {
    if (DNA.charAt(i) === "A") answer += "T";
    if (DNA.charAt(i) === "T") answer += "A";
    if (DNA.charAt(i) === "G") answer += "C";
    if (DNA.charAt(i) === "C") answer += "G";
  }
  return answer;
};
DNAStrand("ATTGC"); // return "TAACG"

DNAStrand("GTAT"); // return "CATA"
