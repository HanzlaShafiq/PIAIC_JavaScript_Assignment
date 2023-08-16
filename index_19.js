let name = ["ali", "ahmad", "Azeeem","Anas", "Asad", "Zaki"];
for (let a = 0; a < name.length; a++) {
  console.log(` Hello "${name[a]}"! \n I invite yuo in a dinner, Please come.`);
}
// not in come in Dinner
console.log(`\n`);
let notCome = name.slice(3,5);

  console.log(notCome);

console.log("Note come");

//Again invitation
console.log(`\n`);

let newPersons = notCome;
for (let a = 0; a < notCome.length; a++) {
  console.log(` Hello "${notCome[a]}"! \n last Time you can not come please come Know.`);
}


//question 16
console.log(`\n`);

newPersons.unshift("Shafiq");
newPersons.splice(2, 0, "Haseeb");
newPersons.push("Razzaq");

for (let a = 0; a < newPersons.length; a++) {
  console.log(newPersons[a]);
}
console.log('"Every one come. Please. I am Wating you "');

//question 17
console.log(`\n`);

console.log("Sorry! I can invite only two people for dinner.");
a = newPersons.pop();
console.log(`Sorry ${a} I can not invite you due to some ression \npleas come next time`);
b = newPersons.pop();
console.log(`Sorry ${b} I can not invite you due to some ression \npleas come next time`);
c = newPersons.pop();
console.log(`Sorry ${c} I can not invite you due to some ression \npleas come next time`);
console.log(`\n`);
for (let a = 0; a < newPersons.length; a++) {
    console.log(` Hello "${newPersons[a]}"! \n You are still invited.`);
  }
  newPersons.splice(0,2);
  console.log(newPersons);

  //question 19
  console.log(`\n`);
  var total = name.length + notCome.length + newPersons.length;
  
console.log(`Total numbers of people that are invited = "${total}"`);
 