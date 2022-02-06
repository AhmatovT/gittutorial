// "use strict";

// const personalNewsDB = {
//     caunt: 0,
//     news: {},
//     actors: {},
//     genners: [],
//     privat: false,
//     startproject: function () {
//       personalNewsDB.caunt =+prompt("Siz qancha yangilik ko`rdingiz");
//       while (
//       personalNewsDB.caunt == "" || 
//       personalNewsDB.caunt == null || 
//       isNaN(personalNewsDB.caunt)){
//       personalNewsDB.caunt =+prompt("Siz qancha yangilik ko`rdingiz");
//       };
//     },
//     rememberNews: function(){
//       for (let i = 0; i < 2; i++){
//         const a = prompt("Oxiri ko`rgan yangiliklaringizdan biri"),
//         b = prompt("Unga qancha baho bergan bo`lar edingiz");
//         if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//         personalNewsDB.news[a] = b;
//         console.log("tayyor");
//         }
//         else{
//         console.log("Error");
//         i--;
//         }  
//       }
//     },
//     showPersonalLevel: function(){
//       if (personalNewsDB.caunt < 10){
//       console.log ("juda oz sonli yangiliklar o`qilibdi");
//       }
//       else if (personalNewsDB.caunt >= 10 && personalNewsDB.caunt < 30){
//       console.log("Siz klassik tomashabinsiz");
//       }
//       else if (personalNewsDB.caunt >= 30){
//       console.log("Siz yangiliklar ishqibozisiz");
//       }
//       else{
//       console.log("Xato yuz berdi");
//       }
//     },
//     showMyDB: function(hidden){
//     if(!hidden){
//     console.log(personalNewsDB);
//     }
//     },
//     toggleVisibleMyDB: function(){
//       if (personalNewsDB.privat){
//       personalNewsDB.privat = false;
//       }
//       else{
//       personalNewsDB.privat = true;
//       }
//     },
//     writeYourGenners: function(){
//       const countGenre = prompt("Sizning sevimli janirlaringiz soni");
//       for(let i = 1; i <= countGenre; i++){
//         let genre= prompt(`Sizning sevimli janringiz nomeri ${i}`);
//         if (genre === "" || genre === null){
//         console.log("Siz noto`g`ri malumot kiritdingiz");
//         i--;
//         }
//         else {
//         personalNewsDB.genners[i - 1] = genre;
//         }
//       }
//       personalNewsDB.genners.forEach((item, i) => {
//         console.log(`Sizning sevimli janringiz nomer: ${i + 1} bu ${item}`);
//       })
//     },
// };






