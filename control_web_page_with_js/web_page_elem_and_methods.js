/* Элементы веб-страницы и методы обращения к ним.

1.1 Напишите скрипт, который определяет тип тега с классом secret и выводит его в консоль.

1.2 Напишите скрипт, который определяет тип тега с идентификатором elem и выводит его в консоль.

1.3 В HTML-документе есть несколько тегов с классом promo. 
    Напишите скрипт, который определяет количество элементов с данным классом и выводит результат в консоль.

1.4 Выведите в консоль название последнего тега, у которого есть класс target.

1.5 В HTML-документе существует тег с классом price и числовым значением. 
    Напишите скрипт, который увеличивает в теге значение цены в два раза.

1.6 В HTML-документе есть тег <p> c классом links. 
    Внутри этого элемента указана просто текстовая ссылка без тега <a>. 
    Напишите скрипт, который заменит этот текст на тег <a>, а в качестве содержимого тега <a> укажет изначальный текст.

1.7 В HTML-документе есть тег с классом content, внутри него есть тег <p>. 
    Напишите скрипт, который заменит этот тег <p> на тег <b>, сохранив текст внутри этого тега.

1.8 В HTML-документе заданы элементы с числовым значением с классом price. 
    Напишите скрипт, который считает общую сумму значений всех элементов с классом price и выводит в консоль.

1.9 В HTML-документе заданы теги с числовым значением с классом numeric. 
    Напишите скрипт, который оборачивает в тег <b> все значения тега с классом numeric, которые меньше нуля.

1.10 Исправьте скрипт таким образом, чтобы в результате его работы в переменной result была сумма значений тегов с классом numeric.

1.11 В HTML-документе задан тег <ul> c классом cars. 
    Внутри этого тега есть несколько тегов <li>. 
    Реализуйте скрипт, который считывает содержимое этих элементов <li>, формирует из них массив и сохраняет в переменной cars.
*/

// q 1.1 
    let elem = document.querySelector('.secret').nodeName.toLowerCase();
    console.log(elem);

// q 1.2 
    let el = document.getElementById('elem').nodeName.toLowerCase();
    console.log(el);

// q 1.3 
    let promos = document.getElementsByClassName('promo');
    console.log(promos.length);

// q 1.4 
    let target = document.getElementsByClassName('target');
    console.log(target[target.length - 1].tagName.toLowerCase());

// q 1.5
    let price = document.querySelector('.price');
    console.log(price.innerText *= 2);

// q 1.6
    let links = document.querySelector('.links');
    links.innerHTML = "<a>" + links.innerText + "</a>";
    console.log(links);

// q 1.7
    let content = document.querySelector('.content');
    content.innerHTML = "<b>" + content.innerText + "</b>";
    console.log(content);

// q 1.8
    let prices = document.querySelectorAll('.price');
    let sum = 0;
    for (let elem of prices) {
        let num = +elem.innerText;
        sum += num;
    }
    console.log(sum);

// q 1.9
    let numerics = document.querySelectorAll('.numeric');
    for (let elem of numerics) {
        let text = +elem.textContent;
        if (text < 0) {
            elem.innerHTML = "<b>" + elem.innerHTML + "</b>";
        }
    }

// q 1.10
    let result = 0;
    let elems = document.querySelectorAll(".numeric");
    elems.forEach(elem => result += +elem.innerText);

// q 1.11
    let carUl = document.querySelector('.cars');
    let carLi = carUl.children;
    let cars = [];
    for (let elem of carLi) {
        cars.push(elem.textContent);
    }
    console.log(cars);
