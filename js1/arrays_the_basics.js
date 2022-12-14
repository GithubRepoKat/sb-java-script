/* Массивы: основы

9.1 В программе объявлена переменная list, представляющая массив значений. 
    Используя методы массивов, выполните следующие действия:
        - добавьте в начало массива новый элемент со значением Яблоко;
        - удалите последний элемент массива;
        - добавьте в конец массива новый элемент со значением Клубника.
    После выполнения всех перечисленных действий выведите значение переменной list в консоль.

9.2 В программе объявлена переменная list, в которую записан массив из строковых значений. 
    Посчитайте и выведите в консоль элемент с максимальной длиной. 
    Если элементов с такой длиной несколько, выведите первый.

9.3 В программе объявлена переменная list, которая содержит массив чисел. 
    Используя цикл, посчитайте сумму чисел и выведите в консоль.

9.4 В программе объявлены две переменные — list_1 и list_2, в каждой из которых хранится массив из чисел. 
    Объедините два массива в один и каждое значение возведите в квадрат. 
    Результат выведите в консоль.

9.5 В программе объявлена переменная list, в которую записан массив из положительных и отрицательных числовых значений. 
    Используя цикл, посчитайте сумму положительных чисел и выведите результат в консоль.

9.6 В программе объявлена переменная list, в которую записан массив числовых значений от 1 до 100. 
    Используя цикл, сформируйте сумму из простых чисел этого диапазона и выведите результат в консоль.

9.7 В программе объявлена переменная list, в которую записан массив из числовых значений. 
    Рассчитайте произведение максимального и минимального элементов массива. 
    Результат выведите в консоль.

9.8 В программе объявлена переменная list, в которую записан массив из числовых значений. 
    Напишите программу, которая переворачивает массив list и выводит результат в консоль. 
    Метод массива reverse() использовать нельзя.

9.9 В программе объявлена переменная sentence со строковым значением. 
    Преобразуйте эту строку в массив так, чтобы каждое слово было отдельным элементом массива. 
    Результат выведите в консоль.
    Метод строки split() использовать нельзя.

9.10 В программе объявлена переменная list, в которую записан массив из числовых значений. 
    Напишите функцию count(list), которая принимает массив в качестве аргумента и возвращает количество четных элементов в массиве. 
    Вызовите функцию count(list) и в качестве аргумента передайте ей список list. 
    Выведите в консоль то, что вернет функция.

9.11 В программе объявлена переменная list, в которую записан массив из числовых значений. 
    Гарантируется, что массив не пустой. 
    Реализуйте функцию average(list), которая принимает в качестве аргумента массив, рассчитывает среднее значение элементов массива, округляет получившееся значение по правилам математики и получившееся значение возвращает. 
    Вызовите функцию average(list) и в качестве аргумента передайте список list. 
    То, что функция вернет, необходимо вывести в консоль.

9.12 В программе объявлена переменная list, в которой записан массив из чисел и логических значений. 
    Используя цикл, посчитайте сумму числовых значений до первого логического значения. 
    Дойдя до логического значения, остановите цикл. 
    Результат выведите в консоль.

9.13 Используя цикл, сформируйте массив list со значениями от 10 до 20. Выведите значение переменной list в консоль.

9.14 В программе объявлена переменная list, в которую записан массив. 
    Используя цикл, сформируйте массив numbers_list, который содержит в себе только числа из массива list. 
    Если в процессе прохода циклом по массиву list обнаружится значение false, последующие значения рассматривать не нужно. 
    В конце программы выведите значение переменной numbers_list в консоль.

9.15 В программе объявлена переменная list, в которой записан массив из строковых значений. 
    Напишите программу, которая считает количество элементов в массиве list без учета элементов со значением "default" и выводит результат в консоль. 
    Сравнение должно быть регистронезависимым.

9.16 В программе объявлена переменная list, в которую записан массив из строковых значений. 
    Сформируйте строку из первых букв каждого элемента массива и выведите ее в консоль. 
    Гарантируется, что каждый элемент массива не нулевой длины.

9.17 В программе объявлена переменная obj, содержащая объект с подобным набором значений:
        {
            "Яблоко": "фрукт",
            "Арбуз": "ягода",
            "Помидор": "овощ",
            "Огурец": "овощ",
            "Вишня": "ягода"
        }
    Напишите скрипт, который формирует новый объект со значениями и их количеством. 
    Выведите новый объект в консоль.

9.18 В программе объявлена переменная list, в которую записан массив из объектов. 
    В каждом объекте записаны название продукта и его стоимость.
    Выведите в консоль название продукта, цена которого является максимальной в заданном массиве. Если таких несколько, выведите название первого из них.
*/

// q 9.1
    let list = ["Груша", "Яблоко"];

    list.unshift('Яблоко');
    list.pop();
    list.push('Клубника');
    console.log(list);

// q 9.2
    list = ["Груша", "Яблоко"];

    let max = list[0];
    for (let i = 0; i < list.length; i++) { 
        if(list[i].length > max.length){
            max = list[i];
        }
    }
    console.log(max);

// q 9.3
    list = [23, 13, 3];

    let sum = 0;
    for (let i = 0; i < list.length; i++) { 
        sum += list[i];
    }
    console.log(sum);

    // решения от препода
    // v1: for in
    let arr = [23, 13, 3];
    sum = 0;
    for (let k in arr) {
        sum += arr[k];
    }
    console.log(sum);

    // v2: for of (Цикл for of работает только для массива, объект с ним работать не сможет!)
    sum = 0;
    for (let val of arr) {
        sum += val;
    }
    console.log(sum);

    // v3: forEach
    sum = 0;
    arr.forEach(function(el) {
        sum += el;
    });
    console.log(sum);

// q 9.4
    let list_1 = [12, 3];
    let list_2 = [2, 1];

    let list_3 = list_1.concat(list_2);
    list_3 = list_3.map(el => el **2);
    console.log(list_3);

// q 9.5
    list = [12, -4, 5, 32, 2];

    sum = 0;
    for (let i = 0; i < list.length; i++) { 
        if(list[i] > 0){
            sum += list[i];
        }
    }
    console.log(sum);

// q 9.6
    list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];

    sum = 0;
    primeSum:
    for (let i = 0; i < list.length; i++) {
        if (i == 0 || i == 1) {
            sum += 0;
        } else {
            for (let n = 2; n < i; n++) {
                if (i % n == 0) continue primeSum;
            }
            sum += i;
        }
    }
    console.log(sum);

    //решение задачи от препода:
    list = [];

    sum = 0;
    let n = 0;
    while (n++ < 100) {
        list.push(n);
    }
    for (let i = 0; i < list.length; i++) {
        if (list[i] >= 2) {
            sum += list[i];
            for (let j = i; j < list.length; j++) {
                // если число j делиться на i, но i !== j, то это число не простое
                if (list[i] !== list[j] && list[j] % list[i] === 0) {
                    list[j] = null;
                }
            }
        }
    }
    console.log(sum);

// q 9.7
    list = [2, 45, 3, 23, 6];

    sum = 0; 
    let min = Math.min.apply(null, list); // метод apply устарел
    max = Math.max.apply(null, list);
    console.log(sum = min * max);

    //Решение от препода:
    // v1
    let max2 = -Infinity;
    let min2 = Infinity;
    for (let el of list) {
        max2 = Math.max(max2, el);
        min2 = Math.min(min2, el);
    }
    console.log(max2 * min2);

    //v2
    console.log(Math.max(...list) * Math.min(...list)); // ... - spread 1,2,3,4,5

// q 9.8
    list = [2, 45, 3, 23, 6];

    let revers = []; 
    for(let i = list.length-1; i >= 0; i--){
        revers.push(list[i]);
    }
    console.log(revers);

// q 9.9
    let sentence = "Завтра будет лучше чем вчера";

    let result = [''];
    n = 0;
    for (let i = 0; i < sentence.length; i++) {
        if (sentence.charAt(i) == " ") {
            n++;
            result.push('');
        } else {
            result[n] += sentence.charAt(i);
        }
    }
    console.log(result);

    // Если использовать метод строки split(), то решение будет следующим:
    result = sentence.split(' ');
    console.log(result);

    //решение от препода:
    let words = [];
    let word = "";
    for (let i = 0; i < sentence.length; i++){
        if (sentence[i] === " "){
            words.push(word);
            word = "";
        } else {
            word += sentence[i];
        }
    }
    words.push(word);
    console.log(words);

// q 9.10
    list = [2, 45, 3, 23, 6]; 

    function count(list) {
        let evenNam = list.filter(x => x % 2 == 0);
        let result = evenNam.length;
        return result;
    }
    console.log(count(list));

// q 9.11
    list = [2, 45, 3, 23, 6];

    function average (list) {
        let sum = 0;
        for (let i = 0; i < list.length; i++) { 
            sum += list[i];
        }
        let num = Math.round(sum / list.length);
        return num;
    }
    console.log(average(list));

// q 9.12
    list = [2, 54, 2, 54, false, 2]; 

    sum = 0;
    for (let i = 0; i < list.length; i++) {
        if (typeof(list[i]) == "number") {
            sum += list[i];
        } else {
            break;
        }
    }
    console.log(sum);

    // v2
    for(let i = 0; i < list.length; i++){
        if(typeof(list[i]) == "boolean"){
            break;
        } else {
            sum += list[i];
        }
    }
    console.log(sum);

// q 9.13
    n = 20; 
    list = [];
    for (let i = 10; i <= n; i++) {
        list.push(i);
    }
    console.log(list);

// q 9.14
    list = [2, "привет", 23, true, 2, false, 2];

    let numbers_list = [];
    for (let i = 0; i < list.length; i++) {
        if(typeof(list[i]) == "number") {
            numbers_list.push(list[i]);
        } else if (list[i] == false) {
            break;
        }
    }
    console.log(numbers_list);

// q 9.15
    list = ["Лёша", "default", "полке", "клопа", "нашёл"];

    let newList = [];
    let num = 0;
    for(let i = 0; i < list.length; i++){
        list[i] = list[i].toLowerCase(); 
        if(list[i] == "default"){
            continue;
        } else {
            newList.push(list[i]);
        }
        num = newList.length;
    }
    console.log(num);

    //решение задачи от препода:
    let cnt = 0;
    for (let val of list) {
        if (val.toLowerCase() !== "default"){
            cnt++;
        }
    }
    console.log(cnt);

// q 9.16
    list = ["почтовый","желание","абсолютный","закрытый"];

    let str = list.map(a => a[0]);
    str = str.join('');
    console.log(str);

    // решение задачи от препода:
    let str2 = "";
    for (let el of list) {
        str2 += el[0];
    }
    console.log(str2);

// q 9.17
    let obj = {
        "Яблоко": "фрукт",
        "Арбуз": "ягода",
        "Помидор": "овощ",
        "Огурец": "овощ",
        "Вишня": "ягода"
    };

    let newObj = {};
    for (let key in obj) {
        newObj[obj[key]] = (newObj[obj[key]] || 0) + 1;
    }
    console.log(newObj);

    //решение задачи от препода:
    let hash = {};
    for (let k in obj) {
        if(hash[obj[k]]) {
            hash[obj[k]]++;
        } else {
            hash[obj[k]] = 1;
        }
    // v2
    // hash[obj[k]] = hash[obj[k]] ? hash[obj[k]] + 1 : 1;
    // v3
    // let result = hash[obj[k]];
    // hash[obj[k]] = result ? ++result : 1;
    }
    console.log(hash);

// q 9.18
    list = [
        {product: "Apple", price: 25},
        {product: "Cherry", price: 32},
        {product: "Strawberry", price: 45}
    ]

    let maxPrice = 0;
    let maxProduct = "";
    for (let key of list) {
        if (key.price > maxPrice) {
            maxPrice = key.price;
            maxProduct = key.product;
        }
    }
    console.log(maxProduct);

    // //решение задачи от препода:
    max = 0;
    word = "";
    for (let i = 0; i < list.length; i++) {
        // max = Math.max(max, list[i].price);
        if (list[i].price > max) {
            word = list[i].product;
            max = list[i].price;
        }
    }
    console.log(word);