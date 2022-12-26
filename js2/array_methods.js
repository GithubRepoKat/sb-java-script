/* Методы массивов

2.1 В программе задана переменная values, которая хранит массив со строковыми и булевыми значениями. 
    Замените булевое значение с минимальным индексом на строковое значение "Булевый тип". 
    Преобразованный массив выведите в консоль. 
    Примечание: подразумевается решение без методов массивов, просто вспомним, как работать с массивами и циклами!

2.2 В программе задана переменная partNumbers, которая хранит в себе массив. 
    Каждый элемент массива является артикулом товара. 
    Напишите программу, которая создаст новый массив на основе partNumbers. 
    В новом массиве должны быть все элементы из partNumbers, которые заканчиваются на две цифры и два буквенных символа. 
    Все остальные элементы необходимо отбросить. 
    Значение нового массива выведите в консоль.

2.3 В программе задана переменная layout, которая хранит в себе строковое значение. 
    Данная строка содержит в себе часть HTML-верстки с числами. 
    На основе значения layout сформируйте массив из чисел, которые встречаются в верстке. 
    Если число четное, возведите его в квадрат, в ином случае оставьте без изменений. 
    Полученный массив выведите в консоль. 
    Если строка layout не содержит чисел, выведите пустой массив.

2.4 В программе задана переменная tasks, которая содержит массив. 
    Элементы данного массива являются объектами с ключами title и completed. 
    Сформируйте новый массив titles, который в качестве значений может хранить свойства title из всех значений массива tasks. 
    Результат выведите в консоль.

2.5 В программе задана переменная values, которая хранит массив со строковыми и булевыми значениями. 
    На основе массива values сформируйте новый массив result, который является фрагментом values. 
    Новый массив должен начинаться с первого вхождения булевого значения и заканчиваться последним вхождением булевого значения в массив values. 
    Выведите получившийся массив в консоль.

2.6 В программе задана переменная values, которая хранит в себе массив. 
    Элементы массива являются числами. 
    Определите, находятся ли в заданном массиве элементы, которые содержат четырехзначные числа. 
    Результат выведите в консоль в виде булевого значения (true, если содержит, и false, если нет).

2.7 В программе задана переменная values, которая хранит в себе массив. 
    Элементы массива являются числами. Определите, находятся ли в заданном массиве элементы, которые содержат четырехзначные числа. 
    Если такие значения встречаются, выведите индекс первого в консоль. 
    В противном случае выведите сообщение "Искомый элемент не был найден".

2.8 В программе задана переменная users, которая хранит в себе массив. 
    Элементы данного массива являются объектами. 
    Определите индекс элемента, значение свойства role которого содержит больше одного слова. 
    Результат выведите в консоль разработчика.

2.9 В программе задана переменная array, которая хранит в себе двумерный массив. 
    Его элементы — массивы, состоящие из чисел. 
    Отсортируйте массив по количеству элементов вложенного массива по возрастанию. 
    Результат выведите в консоль.

2.10 В программе задана переменная randValues, которая хранит в себе массив. 
    Его элементы могут являться как строковыми, так и числовыми значениями. 
    Отсортируйте массив следующим образом:
    - В начале массива должны быть все числовые значения по возрастанию;
    - В конце все строковые, упорядоченные по алфавиту;
    Результат выведите в консоль.

2.11 В программе задана переменная words, которая хранит в себе массив строковых значений. 
    Напишите скрипт, который считает количество палиндромов и непалиндромов в массиве words. 
    Результат должен представлять собой массив из двух элементов, где первое значение — количество палиндромов, а второе — непалиндромов.

2.12 В программе задана переменная dates, которая хранит в себе строковое значение. 
    В данной строке хранятся значения дат в формате ДД:ММ:ГГГГ, которые разделены пробелами. 
    На основе значения переменной dates сформируйте новый массив, каждый элемент которого содержит одну дату переменной dates, преобразованную в формат ДД/ММ/ГГГГ. 
    Выведите содержимое сформированного массива в консоль.

2.13 В программе задана переменная tickets, которая хранит в себе строковое значение. 
    В этой переменной указаны номера билетов на поезд (после слова Train) и на самолет (после слова Airplane). 
    Необходимо написать скрипт, который на основе строки из переменной tickets формирует объект. 
    Он должен хранить в себе два ключа (train, airplane), а в качестве значений — массивы с номерами билетов для поезда и самолета соответственно.

2.14 В программе задана переменная numbers, которая хранит массив из чисел. 
    Определите, какое максимальное количество элементов массива numbers (в порядке, который реализован в массиве) можно сложить, чтобы их итоговая сумма не превышала 50. 
    Результат выведите в консоль.

2.15 В программе задана переменная values, которая хранит массив из строк. 
    Определите математическую сумму всех элементов, которые при преобразовании в число не вернут значение NaN. 
    Результат выведите в консоль.

2.16 В программе заданы два массива array_1 и array_2, элементы которого являются числами. 
    Значения внутри одного массива уникальные. 
    Реализуйте функцию intersection, которая принимает в качестве аргументов два массива и возвращает новый массив. 
    Он должен содержать значения, которые встречаются в обоих массивах-аргументах, и быть отсортирован по убыванию.
*/

// q 2.1
    let values = ["Строка", true, "Число", "Объект", "Не число", false];

    for (let i = 0; i < values.length; i++) {
        if (typeof values[i] !== "boolean") {
            continue;
        } else {
            values[i] = "Булевый тип";
            break;
        }
    }
    console.log(values); // Ответ: ['Строка', 'Булевый тип', 'Число', 'Объект', 'Не число', false]

// q 2.2
    let partNumbers = ["ER1234COM", "FIV987451RU","GE123JO","P4321NO"];

    let newNumbers = [];
    for (let value of partNumbers) {
        if (/\d\d\D\D$/.test(value)) {
            newNumbers.push(value);  
        }
    }
    console.log(newNumbers); // Ответ: ['FIV987451RU', 'GE123JO', 'P4321NO']

// q 2.3
    let layout = "<div>10<span>14<p>25<p>39<p>8<p>101</p></p></p></p></span></div>";

    let total = [];
    let noSymbols = layout.match(/\d*/g);
    let num = noSymbols.filter(e => e);
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 === 0) {
            total.push(num[i] ** 2);
        } else {
            total.push(Number(num[i]));
        }
    }
    console.log(total); // Ответ: [100, 196, 25, 39, 64, 101]

    // решение от препода:
    /*
    let numbers1 = layout.match(/\d+/g) || [];
    numbers1 = numbers1.map(el => {
        if (el % 2 === 0) {
            return el ** 2
        } else {
            return +el;
        }
    })
    // console.log(numbers1.map(function(el) {
    //     return +el;
    // }));
    console.log(numbers1);
    */

// q 2.4
    let tasks = [
        {title: "Умыться" , completed: true},
        {title: "Сделать зарядку" , completed: true},
        {title: "Приготовить завтрак" , completed: false}
    ];

    let titles = [];
    for (let i = 0; i < tasks.length; i++) {
        titles.push(tasks[i].title);
    }
    console.log(titles); // Ответ: ['Умыться', 'Сделать зарядку', 'Приготовить завтрак']

    // v2
    /*
    titles = tasks.map(e => e.title);
    console.log(titles);
    */

// q 2.5
    values = ["Строка",true,"Числа","Объект","Не число", false, "Не объект"];

    let firstI = values.indexOf(true);
    let lastI = values.lastIndexOf(false);
    let val = [];
    for (let i = firstI; i <= lastI; i++) {
        val.push(values[i]);
    }
    console.log(val); // Ответ: [true, 'Числа', 'Объект', 'Не число', false]

    // решение от препода:
    /*
    let start = values.findIndex(el => typeof el === "boolean");
    let end = values.findLastIndex(el => typeof el === "boolean");
    let results = values.slice(start, end+1);
    console.log(results);
    */

// q 2.6
    values = [10, 185, 11200, 980];

    let str = values.map(String);
    let charLength = str.map(e => e.length);
    if (charLength.includes(4)) {
        console.log(true);
    } else {
        console.log(false); // Ответ: false
    }

// q 2.7
    values = [10, 185, 11200, 980];

    let str2 = values.map(String);
    let charLength2 = str2.map(e => e.length);
    if (charLength2.includes(4)) {
        console.log(charLength2.indexOf(4));
    } else {
        console.log("Искомый элемент не был найден"); // Ответ: Искомый элемент не был найден
    }

    // решение от препода:
    /*
    let index = values.findIndex(el => (el + "").length === 4);
    console.log(index !== -1 ? index : "Искомый элемент не был найден");
    */

// q 2.8
    let users = [
        {login: "user1", role: "Admin"},
        {login: "user2", role: "State user"},
        {login: "user3", role: "Moderator"}
    ];

    function findSpace(user) {
        return user.role.includes(' ');
    }
    console.log(users.findIndex(findSpace)); // Ответ: 1

    // v2
    /*
    function userIndex(value) {
        return value.role.split(/\b\W+\b/).length > 1;
    }
    console.log(users.findIndex(userIndex));
    */

    // v3
    /*
    let elem = users.find(e => e.role.indexOf(' ') !== -1);
    console.log(users.indexOf(elem));
    */

// q 2.9
    let array = [[1,2,3],[1,2],[1,2,3,4]];

    console.log(array.sort()); // Ответ: [[1,2],[1,2,3],[1,2,3,4]]

// q 2.10
    let randValues = ["Банан", 3, "Апельсин", 2, "Вишня"];
    // let randValues = [-100, 23, 34, 4, 432];

    let sum = 0;
    for (let i = 0; i < randValues.length; i++) {
        sum += randValues[i];
    }
    if (typeof sum === "number") {
        console.log(randValues.sort((a, b) => a - b)); // Ответ 1й вариант: [2, 3, 'Апельсин', 'Банан', 'Вишня']
    } else {
        console.log(randValues.sort()); // Ответ 2й вариант: [-100, 4, 23, 34, 432]
    }

// q 2.11
    let words = ["Заказ", "Такси", "Доход"];

    let result = [0, 0];
    for (let i = 0; i < words.length; i++) {
        let newword = ((words[i]).toLowerCase()).split("").reverse().join('');
        if (newword === ((words[i]).toLowerCase())) {
            result[0] +=1;
        }
        else {
            result[1] +=1;
        }
    } console.log(result); // Ответ: [2, 1]

// q 2.12
    let dates = "23.04.1996 07.10.2002 15.08.1945";

    let symbol = dates.replace(/\./g, '/');
    let arrey = symbol.split(' ')
    console.log(arrey); // Ответ: ['23/04/1996', '07/10/2002', '15/08/1945']

// q 2.13
    let tickets = "Train: AV432, FS452, OE402. Airplane: DR578, JN1089, NDK140."

    let massif = tickets.replace(/\s+/g,'').replace(/\.$/, '').split('.');
    let obj = {};
    for (let i = 0; i < massif.length; i++) {
        let massif2 = massif[i].split(':');
        obj[massif2[0]] = massif2[1].split(',');
    } 
    for (let key in obj) {
        obj[key.toLowerCase()] = obj[key];
        delete obj[key];
    }
    console.log(obj); // Ответ: {airplane: ['DR578', 'JN1089', 'NDK140'], train: ['AV432', 'FS452', 'OE402']}

    // решение от препода:
    /*
    let obj1 = {};
    let arr = tickets.split(".")
    arr = arr.filter(el => {
        if (el) {
            return el;
        }
    });
    // console.log("filter", arr);
    arr = arr.map(el => {
        return el.split(": ");
    });
    // console.log("map", arr);
    arr.forEach(el => {
        el[0] = el[0].trim();
        obj[el[0].toLowerCase()] = el[1].split(", ");
    });
    console.log(obj1);
    */

// q 2.14
    let numbers = [10, 20, 33, 55, 100];

    sum = 0;
    let amount = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        if (sum <= 50) {
            amount +=1;
        }
    }
    console.log(amount); // Ответ: 2

// q 2.15
    values = ["100", "30", "Не число", "20", "Тоже не число"];

    total = 0;
    let newValues = [];
    for (let i = 0; i < values.length; i++) {
        newValues.push(Number(values[i]));
        if (isNaN(newValues[i]) === false) {
            total += Number(values[i]);
        } 
    } 
    console.log(total); // Ответ: 150

// q 2.16
    let array_1 = [2, 4, 7, 8, 1];
    let array_2 = [2, 5, 11, 6, 1];

    function intersection (array_1, array_2) {
        let newArray =[];
        for (let i = 0; i < array_1.length; i++) {
            if (array_2.includes(array_1[i]) === true) {
                newArray.push(array_1[i]);
            }
        }
        return newArray;
    }
    intersection(array_1, array_2); // Ответ: [2, 1]