let name = ["ali", "ahmad", "Azeeem","Anas", "Asad", "Zaki"];
for (let a = 0; a < name.length; a++) {
  console.log(` Hello "${name[a]}"! \n I invite yuo in a dinner, Please! come.`);
}
// not in come in Dinner
let notCome = name.slice(3,5);

  console.log(notCome);

console.log("Note come");

//Again invitation
console.log(`\n`);

let newPersons = notCome;
for (let a = 0; a < notCome.length; a++) {
  console.log(` Hello "${notCome[a]}"! \n last Time you can not come please! come Know.`);
}
