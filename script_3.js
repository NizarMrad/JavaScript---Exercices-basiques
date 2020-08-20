const x = prompt(
  "Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?",
  "écris un chiffre"
);

for (let i = 1; i <= x; i++) {
  let fact = "";

  for (let j = 1; j <= x - i; j++) {
    fact += " ";
  }

  for (let k = 1; k <= i; k++) {
    fact += "#";
  }

  console.log(fact);
}
