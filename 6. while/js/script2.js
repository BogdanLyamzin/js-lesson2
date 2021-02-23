let userName = prompt("Введите имя");
// null или ""
while(!userName) {
    userName = prompt("Ведите не пустое имя");
}

console.log(`Добро пожаловать, ${userName}`);