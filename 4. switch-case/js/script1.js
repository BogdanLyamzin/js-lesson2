const currency = +prompt("Введите вашу зарплату");
const sallaryCurrency = prompt("Введите валюту вашей зарплаты");

if (sallaryCurrency === "uah") {
    console.log(`Ваша зарплата ${currency} грн`);
} else if (sallaryCurrency === "usd") {
    console.log(`Ваша зарплата ${currency * 27.58} грн`);
} else if (sallaryCurrency === "euro") {
    console.log(`Ваша зарплата ${currency * 33.3} грн`);
} else {
    console.log(`Для валюты ${sallaryCurrency} курс не указан`);
}