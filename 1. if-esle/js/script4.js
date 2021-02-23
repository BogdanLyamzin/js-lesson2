let userName = prompt("Введите ваше имя");
// null, "", " ", "fhs"

if(userName) {
  alert(`Добро пожаловать, ${userName}!`) 
} else {
  userName = prompt("Введите ваше имя")
}