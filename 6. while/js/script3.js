let userName = prompt("Введите имя");

while(!userName) {
    userName = prompt("Ведите не пустое имя");
    if(userName === null) {
        break;
    }
}

if(userName) {
    console.log(`Добро пожаловать, ${userName}`);
}
else {
    console.log("Не очень то и хотелось")
}
