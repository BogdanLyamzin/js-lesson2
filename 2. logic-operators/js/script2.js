let userName = prompt("Введите имя");

if(userName && userName.length > 1) {
  alert(`Добро пожаловать на сайт, ${userName}`);
}
else {
  userName = prompt("Введите все-таки свое имя")
}