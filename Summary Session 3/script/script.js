// String - "" '' `` 
// Number - 12, 3.6, Infinity, -Infinity, NaN
// Boolean - true, false
// Object - Array, Object

// STRING
// let str1 = 'Hello world';
// let str2 = "Hello JavaScript";
// let str3 = ``;


// let first_name = 'John';
// let last_name = 'Smith';
// let age = 30;

// Hello, my name is <first_name> <last_name>. I'm <age>.

// console.log(`Hello, my name is ${first_name} ${last_name}. I'm ${age}.`);


// NUMBER
// let num1 = 23;
// let num2 = 23.5;
// console.log(20/0); //Infinity
// console.log(-20/0); //-Infinity
// console.log('Hello' / 2); //NaN
// console.log('Hello' * 2); //NaN
// console.log('Hello' - 2); //NaN
// console.log('Hello' + 2); //'Hello2'
// console.log('22' * 2); //44


// Условные операторы
// if(Условие1){
//     // действие 1
// }
// else if(Условие 2){
//     // действие 2
// }
// else{
//     // альтернативное действие
// }

// let user_age = 12;
// if(user_age>=18){
//     console.log('Доступ открыт');
// }
// else{
//     console.log('Доступ закрыт');
// }

// Составьте программу, которая принимает с клавиатуры целое число и, если оно
// положительное, увеличивает его вдвое.
// Вывести значение в консоль

// let number = +prompt('enter the number');
// if(number>0){
//     number = number * 2;
// }
// console.log(number);

// Составьте программу, которая принимает с клавиатуры два числа: первое – количество учеников в классе, второе – количество стульев в кабинете.  Программа проверит соответствие между этими двумя значениями и выведет на console соответствующую информацию.
// ввод: 24, 28 ⇒ вывод: стульев хватает; ввод: 24, 22 ⇒ вывод: стульев не хватает

// let number1 = +prompt('Кол/во учеников');
// let number2 = +prompt('Кол/во стульев');
// if(number1<=number2){
//     console.log('стульев хватает');
// }
// else{
//     console.log('стульев не хватает');
// }

// Массивы

// let array = [];//пустой массив

// let fruits = ['Apple', 'Orange', 'Kiwi'];

// console.log(fruits.length); //длина массива
// fruits.push('Pineapple'); //добавить эл. в конец
// fruits.unshift('Pear', 'Avocado');//добавить эл. в начало
// fruits.pop();// удалить последний
// fruits.shift();//удалить первый
// console.log(fruits);

// splice(start, deleteCount, elem1, elem2)
// start- индеск элемента с которого начинам внести изменения
// deleteCount - кол/во элементов которое нужно удалить
// elem1, elem2 - элементы, которые нужно добавить(необ.) с индекса start


// fruits.splice(2, 0, 'Mandarin'); //Добавить новый эл. с индексом 2
// console.log(fruits);

// fruits.splice(1, 2); //Удалить элементы с индексом 1 и 2
// console.log(fruits);

// fruits.splice(2, 1); //Удалить элемент с индексом 2
// console.log(fruits);

// fruits.splice(0, 0, 'Banana', 'Strawberry', 'Melon');// Добавить 3 элемента начиная с индекса 0
// console.log(fruits);

// fruits.splice(1, 2, 'Apple', 'Grapes');// Начиная с индекса 1 удалить 2 элемента и добавили еще 2 элемента
// console.log(fruits);


// let fruits2 = ['apple', 'banana', 'летний фрукт'];

// fruits2[2] = 'Strawberry';

// let products = [['apple', 'banana'],['carrot', 'tomato']];

// console.log(products[1]); //['carrot', 'tomato']
// console.log(products[1][0]);//carrot
// products[1][0] = 'Broccoli';
// console.log(products);

// //Заменить banana на pineapple
// products[0][1] = 'pineapple';
// console.log(products);


// let users = [['John', 'Bob', 'Lily', 'Tom'],
//             ['Smith', 'Brown', 'Hardy', 'Wans'],
//             [30, 18, 27, 34]];

// Изменить имя Bob на James
// users[0][1] = 'James';

//Изменить возраст Lily Hardy на 25
// users[2][2] = 25;


// старт, условие, шаг
// for(let i=0; i<20; i++){
//  console.log(i); //0-19(вкл.)   
// }


// Составьте программу, которая выводит на консоль все однозначные положительные числа в возрастающем порядке. 
// for(let num=0; num<=9; num++){
//     console.log(num);
// }

// 1. num = 0; true; num++
//     0
// 2. num = 1; true; num++
//     1
// ... 
// 9. num = 8; true; num++
//     8
// 10. num = 9; true; num++
//     9
// 11. итерация выхода
// num = 10; false


// for(let num=-10; num<=9; num++){
//     if(num>=0){
//         console.log(num);
//     }
// }

// 1. num = -10; true; num++
//     false
// 2. num = -9; true; num++
//     false


// Все однозначине и четные числа
// 0, 2, 4, 6, 8
// for(let num=0; num<=9; num+=2){
//     console.log(num);
// }

// 1. num = 0
// 2. num = 2
// 3. num = 4

// num++
// num = num + 1


// num+=2
// num = num + 2

// num-=2
// num = num - 2

// Однозначние положительные числа от большего к меньшему 
// 9,8,7,6,5,4,3,2,1,0

// for(let num = 9; num>=0; num--){
//     console.log(num);
// }

// Все двузначние и четные положительные числа от большего к меньшему 
// 98, 96, 94....10

// for(let num = 98; num>=10; num-=2){
//     console.log(num);
// }

// let numbers = [1, 0, -34, 27, 255, 8, 0, -12, 34, 2, 7, 9, -23];

// for(let i = 0; i<numbers.length; i++){
//     console.log(numbers[i]);
// }

// 1. i=0; true; i++
//     numbers[0] -> 1
// 2. i=1
//     numbers[1] -> 0

// Написать цикл, который выводит те числа из массива, которые больше или равны 15.
// for(let i=0; i<numbers.length; i++){
//     if(numbers[i]>=15){
//         console.log(numbers[i]);
//     }
// }

// Найти сумму элементов массива, которые больше 5.
// let sum = 0;
// for(let i=0; i<numbers.length; i++){
//     if(numbers[i]>5){
//         sum = sum + numbers[i];
//     }
// }

// console.log(sum);


// ОБЪЕКТЫ 

let obj = {}; //пустой объект

let user = {
    first_name: 'John',
    last_name: 'Smith',
    age: 30
}

console.log(user.age); //30

user.age = 40;
user.gender = 'Male';

let users = {
    firstnames: ['John', 'Bob', 'Tom'],
    lastnames: ['Smith', 'Brown', 'Wans'],
    ages: [20, 37, 19]
}

console.log(users.firstnames);//['John', 'Bob', 'Tom']
console.log(users.firstnames[1]); //Bob

// Вывести сторку 
// Hello, my name is <Tom> <Wans>. I'm <19>.
console.log(`Hello, my name is ${users.firstnames[2]} ${users.lastnames[2]}. I'm ${users.ages[2]}.`);

let users1 = {
    firstnames: ['John', 'Bob', 'Tom'],
    lastnames: ['Smith', 'Brown', 'Wans'],
    date_of_birth: [{day: 5, month: 'July', year: 2000}, 
                    {day: 10, month: 'January', year: 1995}, 
                    {day: 15, month: 'March', year: 1998}]
    }

// День, месяц и год рождения John Smith
console.log(users1.date_of_birth[0].day);//5
console.log(users1.date_of_birth[0].month);//July
console.log(users1.date_of_birth[0].year);//2000
console.log(users1.date_of_birth[0]);//{day: 5, month: 'July', year: 2000}
