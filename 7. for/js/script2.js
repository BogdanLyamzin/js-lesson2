const floor = +prompt("Введите ваш этаж");

for(let i = 1; i <= floor; i++) {
    if(i === 4) {
        continue;
    }
    console.log(`${i} этаж`);
}

console.log("Ваш этаж!");