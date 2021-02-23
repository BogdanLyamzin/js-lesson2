const userName = prompt("Кто из дома Ланнистеров?")
const user = userName || null;
console.log(user);
const word = prompt("Введите официальный девиз дома Ланнистеров")

const status = userName && word === "Услышь мой рёв!" && userName === "Тайвин";
console.log(status);
if(status) {
  console.log("Добро пожаловать домой, владыка Утеса Кастерли!")
}
else {
  console.log("Пошел прочь, самозванец!")
}