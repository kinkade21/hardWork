let lang = "en";

let weekdayru = ["Понедельник", "Вторник", "Среда", "Четверг" , "Пятница" , "Суббота", "Воскресенье"];
let weekdayen = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

if (lang == "ru") {
  console.log(weekdayru);
} else {
  console.log(weekdayen);
}

switch (lang) {
  case "ru":
    console.log(weekdayru);
    break;
  case "en":
    console.log(weekdayen);
    break;
}

let lang_array = [];
lang_array["ru"] = ["Понедельник", "Вторник", "Среда", "Четверг" , "Пятница" , "Суббота", "Воскресенье"];
lang_array["en"] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
lang = "ru";
console.log(lang_array[lang]);

let namePerson = "Артем";
namePerson === "Артем" ? console.log("директор") : (namePerson === "Александр") ? console.log("преподаватель") : console.log("студент");




