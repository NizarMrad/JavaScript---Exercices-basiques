const books = [
  { title: "Gatsby le magnifique", id: 133712, rented: 9 },
  { title: "A la recherche du temps,perdu", id: 237634, rented: 2 },
  { title: "Orgueil & Préjugés", id: 873495, rented: 6 },
  { title: "Les frères Karamazov", id: 450911, rented: 5 },
  { title: "Guerre et Paix", id: 748147, rented: 19 },
];

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
let i = 0;
books.forEach((x) => {
  x.rented > 0 ? i++ : i;
});
i = books.length
  ? console.log("Tous les livres ont été empruntés au moins un fois")
  : console.log("Certains livres n'ont pas été empruntés");

console.log("Quel est livre le plus emprunté ?");
let maxRent = 0;
let bookMaxRent = [];
books.forEach((x) => {
  x.rented > maxRent ? (maxRent = x.rented) && (bookMaxRent = x) : maxRent;
});
console.log(bookMaxRent.title);

console.log("Quel est le livre le moins emprunté ?");
let bookMinRent = [];
books.forEach((x) => {
  x.rented < maxRent ? (bookMinRent = x) : bookMinRent;
});
console.log(bookMinRent.title);

console.log(`Trouve le livre avec l'ID: 873495`);
books.forEach((x) => {
  x.id === 873495 ? console.log(x.title) : "";
});

console.log("Supprime le livre avec l'ID: 133712");
books.forEach((x) => {
  x.id === 133712 ? books.splice(books.indexOf(x), 1) : "";
});
console.log("livre supprimé");
console.log(books);

console.log("Trie les livres par ordre alphabétique");
books.sort(function (a, b) {
  let titleA = a.title;
  let titleB = b.title;
  if (titleA < titleB) {
    return -1;
  }
  if (titleA > titleB) {
    return 1;
  }

  return 0;
});
console.log(books);
