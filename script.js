const sayHello = () => alert('Hellow World');
sayHello();

//---------Zadanie 1-------------//

const a = "Hello";
const b = "World";
console.log('${a} , ${b}');

//---------Zadanie 2 ------------//

console.log('Zadanie 2');

const multiply = (x =1, y =1) => console.log('Wynik mnożenia: ${x} x ${y} = ${x*y}');

multipy(2, 5) //10
multiply(6, 6) // 36
multipy(5) //5

console.log('ZADANIE 3');

const average = (...args) => console.log(args.reduce((a, b) => a + b)/args.length);

average(1) // 1
average(1, 3) // 2
average(1, 3, 6, 6) // 4

// --------------- Zadanie 4 --------------- //

console.log('ZADANIE 4');

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));

// --------------- Zadanie 5 --------------- //

console.log('ZADANIE 5');

const data = [1, 4, 'Iwona', false, 'Nowak'];

const [ , , firstName, , lastName] = data;
// const lastName = [fourth];

console.log(`${firstName} ${lastName}`)


