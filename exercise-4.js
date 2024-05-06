// ### Задача 4.

// а. Направете променлива age и доделете ѝ број што ја претставува вашата возраст.
// Користете if-else за да проверите дали можете легално да купите алкохол, да гласате, 
// двете или ниту едно од нив. Да се претпостави дека со наполнети 18 години може да гласате 
// но не и да купите алкохол додека пак со наполнети 21 година имате право на двете. 
// Користете console.log за да печатите соодветна порака во конзола.

// б. Да се декларира функција која што ќе има еден параметар month. Внатре во функцијата да се искористи 
// switch услов кој што за даден месец како аргумент, ќе го враќа бројот на денови од тој месец. 
// За Февруари да се претпостави дека секогаш ќе има 28 дена. 
// Доколку се внесе вредност која што не е месец, да се испринта “Invalid input” во конзолата.
// Пр. Input: “June”, Output: 30

// в. Направете променлива temperature и доделете ѝ број што ја претставува температурата во Целзиусови.
// Користете if-else за да одредите дали надвор е жешко, топло или ладно. За жешко сме смета температура над 30 степени, 
// за топло над 20 додека пак за ладно се смета температура под 15 степени. Степените помеѓу 15 и 20 се сметаат за умерено време. 
// Користете console.log за да печатите соодветна порака во конзола.
// a) --------------------------------------------------->
let age = 23;
if (typeof age === "number") {
    if (age >= 21) {
        console.log("You can vote and buy a liquor");
    }
    else if (age < 21 && age >= 18) {
        console.log("You can vote but not buy liquor");
    }
    else if (age < 18) {
        console.log("You're underage");
    }
} else {
    console.log("Please enter a valid number");
}
// b) --------------------------------------------------->
const checkMonth = (month) => {
    switch (month) {
        case "January":
        case "March":
        case "May":
        case "July":
        case "August":
        case "October":
        case "December":
            console.log("31");
            break;
        case "February":
        case "April":
        case "June":
        case "September":
        case "November":
            console.log("30");
            break;
        default:
            console.log("Invalid input");
    }
}
checkMonth("June");
// v) --------------------------------------------------->
let temperature = Math.floor(Math.random() * 35);
if (typeof temperature === "number") {
    if (temperature > 30) {
        console.log(`Extremely hot: ${temperature}`);
    } else if (temperature <= 30 && temperature >= 20) {
        console.log(`Warm: ${temperature}`);
    } else if (temperature < 20 && temperature > 15) {
        console.log(`Мoderately warm: ${temperature}`);
    } else if (temperature < 15){
        console.log(`Cold: ${temperature}`);
    }
}
else {
    console.log("Enter a temperature/number");
}