chosenSentence = prompt("Salut ça va ? ");

let reply = (sentence) => {
  let response = false;
  let arraySentence = sentence.split("");
  if (arraySentence[arraySentence.length - 1] === "?") {
    console.log("Ouais Ouais...");
    response = true;
  }
  if (sentence.toUpperCase() === sentence && sentence !== "") {
    console.log("Pwa, calme-toi...");
    response = true;
  }
  if (
    sentence.includes("Fortnite") ||
    sentence.includes("fortnite") ||
    sentence.includes("fortnite".toUpperCase())
  ) {
    console.log("on s'fait une partie soum-soum ?");
    response = true;
  }
  if (sentence === "") {
    console.log("t'es en PLS ?");
    response = true;
  }
  if (response === false) {
    console.log("balek.");
  }
};

reply(chosenSentence);
