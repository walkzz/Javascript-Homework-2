// ### Задача 1.

// а. Дефинирајте една променлива globalNum која што ќе ја има вредноста 10. 
// Креирајте функција која што ќе се вика checkScope и пробајте да ја испринтате вредноста на globalNum.

// б. Во функцијата checkScope, декларирајте нова променлива localNum која што ќе ја има истата вредност како и 
// променливата globalNum. Надвор од функцијата, со помош на console.log, споредете ги двете променливи со операторот “===”. Што добивте како резултат во конзолата?

// в. Да се декларира еден if услов како овој подолу:

// ```
// if(true){
// let blockNum = 10;
// }
// ```

// Надвор од овој услов, со помош на typeof операторот пробајте да го испечатите типот на променливата blockNum. Што добивте како резултат во конзолата?

let globalNum = 10;
function checkScope(){
    let localNum = globalNum; // local variable
    console.log(globalNum) // output: 10
}
// console.log(globalNum === localNum); --> Reference error.

if(true){
    let blockNum = 10;
}
// console.log(blockNum); --> Reference error.