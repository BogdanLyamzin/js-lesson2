const year = prompt("Введите год");

if(year % 4) {
  console.log(`${year} не высокосный год`);
} else if(year % 100) {
  console.log(`${year} высокосный год`)
} else if(!(year % 400)) {
  console.log(`${year} высокосный год`)
} else {
    console.log(`${year} не высокосный год`);
}