const userAge = +prompt("Введите ваш возраст");

if(userAge >= 21) {
  alert("Добро пожаловать в Secret Room");
  alert("У нас широкий выбор коктейлей!")
} else if(userAge >=18 && userAge < 21) {
  alert("Добро пожаловать в Secret Room");
}
else {
  alert("Купи уже поддельное удостоверение личности!")
}