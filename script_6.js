function getAcids(ARN) {
  let theArn = ARN;
  let l = theArn.length;
  let multiple = 3;
  let cut = l / multiple;
  arnArray = [];
  for (let i = 0; i < cut; i++) {
    arnArray.push(theArn.slice(multiple * i, multiple * (i + 1)));
  }
  let formatedArn = arnArray.join("-");
  let acids = [];

  console.log("L'ARN " + formatedArn + " correspond à :");

  for (let index in arnArray) {
    switch (arnArray[index]) {
      case "UCU":
      case "UCC":
      case "UCA":
      case "UCG":
      case "AGU":
      case "AGC":
        acids.push("Sérine");
        break;
      case "CCU":
      case "CCC":
      case "CCA":
      case "CCG":
        acids.push("Proline");
        break;
      case "UUA":
      case "UUG":
        acids.push("Leucine");
        break;
      case "UUU":
      case "UUC":
        acids.push("Phénylalanine");
        break;
      case "CGU":
      case "CGC":
      case "CGA":
      case "CGG":
      case "AGA":
      case "AGG":
        acids.push("Arginine");
        break;
      case "UAU":
      case "UAC":
        acids.push("Tyrosine");
        break;
    }
  }
  let formatedAcids = acids.join("-");
  console.log(formatedAcids);
}

getAcids("CCGUCGUUGCGCUACAGC");
getAcids("CCUCGCCGGUACUUCUCG");
