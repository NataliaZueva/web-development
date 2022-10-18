'use strict'
//2.1 start
console.log("№" + 2.1);
function text (text) {
    let one = text.split('-');
    for (let i = 1; i < one.length; i++) {
        one[i] = one[i].at(0).toUpperCase() + one[i].slice(1);
    }
    console.log(text, "=>", one.join(""))
}
text("background-color");
text("background-color-opacity");
//2.1 end

//2.2 start
console.log("\n" + "№" + 2.2);
function mac (mac) {
    let mac1 = mac.slice(); 
    let mac2 = Array.from(mac);  

    function sort1 (mac1){
        let m1 = []
        for (let i = mac1.length-1; i >= 0; i--){
            m1.push(mac1[i]); 
        }
        return m1;
    }


    mac1 = sort1(mac1)
    mac1, mac2 = sort1(mac1), mac2.reverse ();
    console.log("1 массив: " + mac + "\n" + "2 массив: " + mac1 + "\n" +"2 массив: " + mac2);
};
mac([9,8,7,6,5,4,3,2,1]);
//2.2 end

//2.3 start
console.log("\n" + "№" + 2.3);
(function () {
    let language = {
        ru: {0: "собака", 1: "кошка", 2: "кролик", 3: "рыбка"},
        en: {0: "dog", 1: "cat", 2: "rabbit", 3: "fish"},
        it: {0: "cane", 1: "gatto", 2: "coniglio", 3: "pesce"},
        ar: {0: "շուն", 1:" կատու", 2:" նապաստակ", 3:"ձուկ"}
    }
    let str = "2"
    console.log(language["en"][str])
})()
//2.3 end

//2.4 start
console.log("\n" + "№" + 2.4);
function week(days) {
    let day = new Date()
    let n = day.getDay();
    console.log(days[n]);
}
let days = {
    0: "Восересенье", 
    1: "Понедельник", 
    2: "Вторник", 
    3: "Среда", 
    4: "Четверг", 
    5: "Пятница", 
    6: "Суббота"
}
week(days)
//2.4 end

//2.5 start
console.log("\n" + "№" + 2.5);
(function () {
    let staff1 = {
        "Диктор": "Ева", 
        "Тележурналист": "Милана",
        "Геолог": "Любовь",
        "Ботаник": "Анна",
        "Монтажник": "Дарья",
    };
    let staff2 = Object.assign({}, staff1); 
    var count = 0;
    for (let key in staff2) {
        let name = ["Андрей", "Коля", "Миша", "Сергей", "Никодим"];
        staff2[key] = name[count];
        count++;
    }
    for (let key in staff1) {
        console.log(key + " " + staff1[key])
    }
    console.log("")
    for (let key in staff2) {
        console.log(key + " " + staff2[key])
    }
})()
//2.5 end

//2.6 start
console.log("\n" + "№" + 2.6);
let briefWeek = ( "вс, пн, вт, ср, чт, пт, сб");
briefWeek = briefWeek.split(",")
week(briefWeek)
//2.6 end

//2.7 start
console.log("\n" + "№" + 2.7);
(function () {
    let subjects = {first_course: "Вычислительные системы и компьютерные сети,Операционные системы, Мультимедиа"};
    let add = function (second_course) {
        subjects.first_course = subjects.first_course.split(",");
        if (subjects.first_course.indexOf(second_course) !== -1) {
            subjects.first_course.splice(subjects.first_course.indexOf(second_course), 1);
        }
        else { subjects.first_course.push(second_course) };
        subjects.first_course = subjects.first_course.join(",");
    };
    add("Философия");
    add("Операционные системы");
    console.log(subjects.first_course);
})();
//2.7 end

