// Обьявление массива
// 1. new Array();
// 2. let arr = [];
let a = 1;
let b = 2;
let c = 3;

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr);


// Длина массива
console.log(arr.length);

// Обращение к элементам по индексу
// 1. 0...- элементы с начала
// 2. length - n - элементы с конца
let index = 2;
console.log(arr[index]);
console.log(`В массиве лежат числа: ${arr[0]}, ${arr[1]}, ${arr[index]}.`);

console.log(arr[arr.length - 1]); // - обращение к последний элементу массива в данном примере - 7.

// Добавлене элемента в массив
// 1. Добавление в конец push ()
// 2. Добавление в конец unshift ()

console.log(arr); 
arr.push(8); // - добавление элемента в конец массива
console.log(arr);

arr.unshift(0); // - добавление элемента в начало массива
console.log(arr);

// Удаление элемента из массива 
// 1. удаление с конца массива pop()
// 2. удаление с нчала массива  shift()

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

// Хранение разных типов данных в массиве


// Перебор массива
// 1. Стандарный цикл for
// 2. for of

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (const element of arr) {
    console.log(element);
}

arr.forEach(function(i, el) {
    console.log(i, el);
});

console.log('----------------------')

// Задание 1
//  Создать массив из чисел от 1 до 10 и вывести числа в консоль.

let ARR_NUMBER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(ARR_NUMBER);

//  Задание 2
//  Создать массив из чисел от 1 до 10, 
//  посчитать сумму чисел в массив и вывести в консоль.

ARR_NUMBER = [1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10];
console.log(ARR_NUMBER);


//  Задание 3
//  Сформировать массив из чисел от 1 до 200, 
//  посчитайте среднее арифметическое и выведите в консоль.
let ARR_NUMBER_1 = [1, 2, 3];

for (let i = 0; i < ARR_NUMBER_1.length; i++) {
    console.log(ARR_NUMBER_1);
}

//  Задание 4
//  Создайте массив из 7 произвольных чисел. 
//  Найдите максимальный элемент в массиве и его индекс.


//  Задание 5
//  Создайте массив из 10 произвольных чисел. 
//  Найдите количество четных элементов в массиве.


//  Задание 6
//  Напишите программу, которая вычисляет максимальную, 
//  минимальную и среднюю температуру за неделю. 
//  Данные вводятся за каждый день недели с клавиатуры пользователем в массив temperatures.


//  Задание 7
//  Задайте массив из 9 произвольных имен. 
//  Выполните перестановку элементов. 
//  Первый меняется с последним, втором - с предпоследним; и так далее. 
//  Выполняется ли логика для массива из 10 произвольных имен. Если нет, исправьте.