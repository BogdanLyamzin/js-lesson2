let userName = prompt("Введите ваше имя");
// null или ""
if(!userName) {
  userName = prompt("Введите все-таки имя")
}
else {
  console.log("Добро пожаловать, Данте!")
}
