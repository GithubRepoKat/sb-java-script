/* Функции

6.1 В программе объявлена переменная price, в которую записано числовое значение. 
    Напишите функцию priceMessage(), которая выводит в консоль сообщение "Данный товар стоит X рублей", где вместо X указано значение переменной price. 
    Вызовите функцию после ее определения.

6.2 В программе объявлены две переменные с числовым значением — num_1 и num_2. 
    Напишите функцию mult, которая принимает два аргумента и возвращает их произведение. 
    Вызовите функцию mult и передайте ей в качестве аргументов значения переменных num_1 и num_2, а результат выведите в консоль.

6.3 В программе объявлена переменная num, в которую записано числовое значение. 
    Напишите функцию square(), которая возвращает квадрат этого числового значения. 
    Обратите внимание, что функция обращается к глобальной переменной, а не получает значение в качестве аргумента.

6.4 В программе объявлена переменная num, в которой записано числовое значение. 
    Используя цикл, возведите значение переменной в квадрат три раза. 
    Каждый результат конкатенируйте через пробел и выведите в консоль.

6.5 В программе объявлена переменная data, в которой записано строковое значение. 
    Напишите функцию getNumber(data), которая преобразовывает строку в число по следующему правилу:
    •  если переменная data содержит не число, функция должна вернуть численное значение 0;
    •  если переменная data содержит число, например "123", то функция возвращает числовое значение 123.Вызовите эту функцию и выведите результат в консоль.

6.6 В программе объявлены две переменные — value и total, в которых записаны числовые значения. 
    Напишите функцию getPercent(value, total), которая возвращает процент числа value от значения total. 
    Вызовите эту функцию с value и total в качестве аргументов. 
    Результат работы функции выведите в консоль.
*/

// q 6.1
    let price = 80000;

    function priceMessage (price) {
        console.log(`Данный товар стоит ${price} рублей`); // рекомендуется не писать консоль внутри кода.
    }
    priceMessage(price);

    //  Решение от препода:
    function priceMessage (p) {
        return `Данный товар стоит ${p} рублей`;
    }
    console.log(priceMessage(price));

// q 6.2
    let num_1 = 3;
    let num_2 = 6;

    function mult (num_1, num_2) {
        console.log(num_1 * num_2); // рекомендуется не писать консоль внутри кода.
    }
    mult(num_1, num_2);

    //  Решение от препода:
    function mult (a, b) {
        let result = a * b;
        return result;
    }
    let m = mult(num_1, num_2);
    console.log(m);

// q 6.3
    let num = 9;

    function square () {
        return num*num;
    }
    let result = square();
    console.log(result);

// q 6.4
    num = 2;

    result = "";
    let i = 0;
    while (i < 3) {
        num = Math.pow(num, 2);
        i += 1;
        if (!result) {
            result = num;
        } else {
            result = result + " " + num;
        }
    } 
    console.log(result);

    // Решение от препода:
    function getSquares (n, cnt = 3) {
        let result = n;
        let str = "";
        while(cnt) {
            result = result ** 2;
            if (cnt !== 1) {
                str += result + " ";
            } else {
                str += result;
            }
            cnt--;
        }
        return str;
    }
    console.log(getSquares(num));

// q 6.5
    let data = "120";

    function getNumber (data) {
        data = parseFloat(data);
        if (Number.isNaN(data) === true) {
            console.log(0);
        } else {
            console.log(data);
        }
    }
    getNumber(data);

// q 6.6
    let value = 4;
    let total = 80;

    function getPercent (value, total) {
        return value / total * 100;
    }
    let result2 = getPercent(value, total);
    console.log(result2);