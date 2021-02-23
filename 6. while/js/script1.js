let userAge = +prompt("Введите ваш возраст");
// null, "", " ", "1", "1f"
while(userAge < 18) {
    userAge = +prompt("Вы уверены? А если подумать?");
}

if(userAge >= 21) {
    console.log("Добро пожаловать в ночной клуб Устрица! У нас широкий выбор коктейлей!");
} else if(userAge >= 18 && userAge < 21) {
    console.log("Добро пожаловать в ночной клуб Устрица!");
} else {
    console.log("Купи наконец поддельные права!");
}