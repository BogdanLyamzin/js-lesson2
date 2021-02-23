const answer = confirm("Готовы заполнять анкету?");

if(answer) {
    for(let i = 1; i < 4; i += 1) {
        alert(i);
    }
    const name = prompt("Введите ваше имя")
    const lastName = prompt("Введите вашу фамилию");
    const middleName = prompt("Введите ваше отчество");
}