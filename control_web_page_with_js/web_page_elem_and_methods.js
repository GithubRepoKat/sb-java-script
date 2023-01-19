/* Элементы веб-страницы и методы обращения к ним.

1.1 Напишите скрипт, который определяет тип тега с классом secret и выводит его в консоль.

1.2 Напишите скрипт, который определяет тип тега с идентификатором elem и выводит его в консоль.

1.3 В HTML-документе есть несколько тегов с классом promo. 
    Напишите скрипт, который определяет количество элементов с данным классом и выводит результат в консоль.

1.4 Выведите в консоль название последнего тега, у которого есть класс target.

1.5 

1.6 

1.7 

1.8 

1.9 

1.10 

1.11 


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


// q 1.6


// q 1.7


// q 1.8


// q 1.9


// q 1.10


// q 1.11

