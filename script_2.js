const x = prompt(
  "De quel nombre veut tu calculer la factorielle ?",
  "écris un chiffre"
);

let fact = 1;
for (let i = 1; i <= x; i++) {
  fact = fact * i;
}

console.log("Le résultat est:" + fact);
