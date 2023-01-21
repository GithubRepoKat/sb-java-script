/* Создание и удаление элементов веб-страницы и перемещение по DOM-дереву

2.1 Напишите скрипт, который создает новый элемент <p> в переменной new_element и добавляет его в тег с идентификатором root. 
    Созданный тег <p> должен содержать в себе фразу "Ура! Мой скрипт отработал верно!".

2.2 В HTML-документе есть тег <p> c идентификатором title. 
    Напишите скрипт, который создает новый элемент <h2> в переменной new_element с текстовым содержимым "Сегодня солнечно, минус 15" 
    и добавляет новый элемент сразу после тега с идентификатором title.

2.3 В HTML-документе задан тег <ul> c элементами <li> внутри. 
    Напишите скрипт, который создает новый элемент <li> с текстовым содержимым "Велосипед" в переменной new_element и добавляет его в начало списка <ul>.

2.4 В HTML-документе есть несколько тегов <div>. Напишите скрипт, который всем тегам <div> добавляет класс adds.

2.5 В HTML-документе есть несколько тегов <p>. 
    Напишите скрипт, который присваивает каждому тегу идентификатор — от значения p_1 и до p_<n>. Тут n — количество параграфов.

2.6 В HTML-документе заданы теги <p>. Напишите скрипт, который удаляет теги, внутри которых хранится текстовое значение Delete.

2.7 

2.8 

2.9 

2.10 

2.11 

2.12

2.13 

*/

// q 2.1
    let elem = document.querySelector('#root');
    let new_element = document.createElement('p');
    new_element.innerText = 'Ура! Мой скрипт отработал верно!';
    elem.prepend(new_element);

// q 2.2
    let title = document.querySelector('#title');
    let new_element = document.createElement('h2');
    new_element.innerText = 'Сегодня солнечно, минус 15';
    title.after(new_element);

// q 2.3
    let element = document.querySelector("ul");
    let new_element = document.createElement('li');
    new_element.innerText = 'Велосипед';
    element.prepend(new_element);

// q 2.4
    let elemDiv = document.querySelectorAll("div");
    for (let elem of elemDiv) {
        elem.className = "adds";
    }

// q 2.5
    let paragraph = document.querySelectorAll("p");
    let numId = 0;
    for (let elem of paragraph) {
        numId += 1;
        elem.id = 'p_' + numId;
    }

// q 2.6
    let paragraph2 = document.querySelectorAll('p');
    for (let elem of paragraph2) {
        if (elem.textContent === 'Delete') {
            elem.remove();
        } 
    }

// q 2.7


// q 2.8


// q 2.9


// q 2.10

