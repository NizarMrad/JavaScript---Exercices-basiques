const entrepreneurs = [
  { first: "Steve", last: "Jobs", year: 1955 },
  { first: "Bill", last: "Gates", year: 1955 },
  { first: "Mark", last: "Zuckerberg", year: 1984 },
  { first: "Jeff", last: "Bezos", year: 1964 },
  { first: "Elon", last: "Musk", year: 1971 },
  { first: "Larry", last: "Page", year: 1973 },
  { first: "Jack", last: "Dorsey", year: 1976 },
  { first: "Evan", last: "Spiegel", year: 1990 },
  { first: "Brian", last: "Chesky", year: 1981 },
  { first: "Travis", last: "Kalanick", year: 1976 },
  { first: "Marc", last: "Andreessen", year: 1971 },
  { first: "Peter", last: "Thiel", year: 1967 },
];

console.log(
  "Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70"
);
let bornInThe70s = [];
entrepreneurs.forEach((x) => {
  if (1970 <= x.year && x.year < 1980) {
    bornInThe70s.push(x);
  }
});
console.log(bornInThe70s);

console.log(
  "Sors une array qui contient le prénom et le nom des entrepreneurs"
);
let namesArray = [];
entrepreneurs.forEach((x) => {
  namesArray.push(`${x.first} ${x.last}`);
});
console.log(namesArray);

console.log("Quel âge aurait chaque inventeur aujourd'hui ?");
let age = 0;
let d = new Date();
let currentYear = d.getFullYear();
entrepreneurs.forEach((x) => {
  age = currentYear - x.year;
  x.age = age;
});
console.log(entrepreneurs);

console.log("Trie les inventeurs par ordre alphabétique du nom de famille");
entrepreneurs.sort(function (a, b) {
  let nameA = a.last;
  let nameB = b.last;
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});
console.log(entrepreneurs);
