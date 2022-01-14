"use strict";

const numberOfNews = +prompt("Siz qancha yangilik ko`rdingiz");

const personalNewsDB = {
  caunt: numberOfNews,
  news: {},
  actors: {},
  genners: [],
  privat: false,
};
for (let i = 0; i < 2; i++){
  const a = prompt("Oxiri ko`rgan yangiliklaringizdan biri"),
  b = prompt("Unga qancha baho bergan bo`lar edingiz");
  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
  personalNewsDB.news[a] = b;
  console.log("tayyor");
  }
  else{
  console.log("Error");
  i--;
  }  
}
  
if (personalNewsDB.caunt < 10){
  console.log ("juda oz sonli yangiliklar o`qilibdi");
}
else if (personalNewsDB.caunt >= 10 && personalNewsDB.caunt < 30){
  console.log("Siz klassik tomashabinsiz");
}
else if (personalNewsDB.caunt >= 30){
  console.log("Siz yangiliklar ishqibozisiz");
}
else{
  console.log("Xato yuz berdi");
}
console.log(personalNewsDB);




