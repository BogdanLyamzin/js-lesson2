/*
Спросите у пользователя:
- сумму;
- валюту, в которой он принес деньги (3 варианта - грн, доллар или евро);
- валюту, в которую он хочет конвертировать деньги (3 варианта - грн, доллар или евро);

Выведите в консоль сумму в желаемой валюте.
Курсы валют:
- 1 дол = 27,58 грн;
- 1 евро = 33,30 грн;
*/

const sum = +prompt("Введите сумму");
const currencyFrom = prompt("Введите валюту, в которой вы принесли сумму. Варианты: uah, usd, euro", "usd");
const currencyTo = prompt("Введите валюту, на которую вы хотите поменять деньги. Варианты: uah, usd, euro");

if(currencyFrom === "uah" && currencyTo === "usd") {
  console.log(`Вы получите ${sum / 27.58}`)
} else if(currencyFrom === "uah" && currencyTo === "euro") {
  console.log(`Вы получите ${sum /33.3}`)
} else if(currencyFrom === "usd" && currencyTo === "uah") {
  console.log(`Вы получите ${sum * 27.58}`)
} else if(currencyFrom === "usd" && currencyTo === "euro") {
  console.log(`Вы получите ${sum * (27.58 / 33.3)}`)
} 
else {
  console.log("Обмена таких валют нет в банке")
}

