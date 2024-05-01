// ### Задача 3.

// Да се напишат 3 функции од кои што:

// - првата функција потребно е да има три параметри(numbers) и да го враќа збирот од тие три броеви
// - втората функција потребно е да има еден параметар(string) и да го враќа истиот тој string
// - третата функција потребно е да има два параметри(numbers) и да ги споредува истите. 
// Ако броевите се исти, да ја испечати пораката "These numbers are equal" 
// во спротивно да испечати "These numbers are not equal"
const sumAll = (a, b, c) => {
    return a + b + c;
}
const funcStr = (str) => {
    return str;
}
const twoNumbers = (num1, num2) => {
    if(num1 === num2){
        console.log("These numbers are equal");
    }
    else{
        console.log("These numbers are not equal");
    }
}
console.log(sumAll(10, 10, 30));
console.log(funcStr("Hello World"));
twoNumbers(20, 20);