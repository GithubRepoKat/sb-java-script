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

2.7 В скрипте объявлен массив values, который состоит из чисел. 
    В HTML-документе есть множество тегов <p> с классом elems. 
    Необходимо дописать скрипт так, чтобы он удалил все теги <p> с классом elems, значение которых входит в массив values.

2.8 В HTML-документе заданы два <div> тега с идентификаторами div1 и div2. 
    Напишите скрипт, который позволит перенести содержимое тега с идентификатором div1 в конец тега с идентификатором div2.

2.9 В HTML-документе есть тег <ul> c идентификатором first. Внутри этого тега есть теги <li>. 
    Напишите скрипт, который создает новый тег <li> в переменной new_element и добавляет в элемент <ul> с идентификатором first. 
    После добавления нового элемента выведите в консоль общее количество тегов <li> в теге <ul> с идентификатором first.

2.10 В скрипте объявлена переменная values, которая содержит массив из строк. В HTML-верстке есть два тега <div> с классами div1 и div2. 
    Допишите скрипт так, чтобы все теги <p> из тега с идентификатором div1, значение которого встречается в списке values, переместились в тег с идентификатором div2.

2.11 В скрипте объявлена переменная task, в которой хранится список из строк. В HTML-верстке есть тег <div> с идентификатором root. 
    Допишите скрипт так, чтобы на основе значений списка сформировались теги <p> и добавились в элемент с идентификатором root.

2.12 Напишите программу, которая считает количество <div>-, <p>- и <h2>-тегов и записывает его в объект tags, как в примере. 
    Выведите сформированный объект в консоль.

2.13 В HTML-документе есть тег <ul> с идентификатором tasks, и внутри него есть несколько тегов <li> с текстом. 
    Напишите скрипт, который позволяет отсортировать элементы <li> в теге <ul> по длине содержимого.
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
    let countId = 1;

    for (let elem of paragraph) {
        elem.id = 'p_' + countId;
        countId++;
    }

// q 2.6
    let paragraph2 = document.querySelectorAll('p');

    for (let elem of paragraph2) {
        if (elem.textContent === 'Delete') {
            elem.remove();
        } 
    }

// q 2.7
    const values = [15, 20, 25];

    let paragraph3 = document.querySelectorAll('p');

    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < paragraph3.length; j++) {
            if (String(values[i]) === paragraph3[j].textContent) {
                paragraph3[j].remove();
            }
        }
    }

// q 2.8
    let div1 = document.querySelector('#div1');
    let div2 = document.querySelector('#div2');
    let div1Content = div1.innerHTML;
    div2.insertAdjacentHTML("beforeend", div1Content);
    div1.innerHTML = '';

// q 2.9
    let first = document.querySelector('#first');
    let new_element = document.createElement('li');
    first.append(new_element);
    let numberLi = first.querySelectorAll('li');
    console.log(numberLi.length);

// q 2.10
    values = ["велосипед", "ролики", "лыжи"];

    let elemDiv1 = document.querySelector('#div1');
    let elemDiv2 = document.querySelector('#div2');
    let arrParagraph = elemDiv1.querySelectorAll('p');

    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < arrParagraph.length; j++) {
            if (values[i] === arrParagraph[j].textContent) {
                elemDiv2.insertAdjacentHTML("afterbegin", '<p>' + arrParagraph[j].textContent + '</p>');
                arrParagraph[j].remove();
            }
        }
    }

// q 2.11
    const tasks = ["Проверить документы", "Отправить начальству", "Организовать собрание"];

    let root = document.querySelector('#root');
    for (let i = 0; i < tasks.length; i++) {
        let rootParagraph = document.createElement('p');
        rootParagraph.innerText = tasks[i];
        root.appendChild(rootParagraph);
    }

// q 2.12
    let tags_div = document.querySelectorAll('div');
    let tags_p = document.querySelectorAll('p');
    let tags_h2 = document.querySelectorAll('h2');
    let tags = {};

    tags['div'] = tags_div.length;
    tags['p'] = tags_p.length;
    tags['h2'] = tags_h2.length

    console.log(tags);

// q 2.13
    let tasks1 = document.querySelector('#tasks');
    let list = tasks1.querySelectorAll('li');
    let arrText = [];

    for (let i = 0; i < list.length; i++) {
        arrText.push(list[i].textContent);
    }

    arrText.sort().reverse();
    tasks1.innerHTML = '';

    for (let elem of arrText) {
        let newList = document.createElement('li');
        newList.innerText = elem;
        tasks1.appendChild(newList);
    }
