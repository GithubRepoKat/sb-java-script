/* Изменение контента и стилей элементов

3.1 В HTML-документе задан тег <div> с идентификатором div_elem. 
    Напишите скрипт, который добавит в стиль данного элемента ширину и высоту по 100 пикселей.

3.2 В HTML-документе задан тег <p> с идентификатором rainbow. 
    Напишите скрипт, который указывает в стиле синий цвет текста (#2980b9).

3.3 В HTML-документе есть тег <label> и тег <input> с идентификатором target. 
    Необходимо написать скрипт, который присваивает тегу <label> атрибут, позволяющий привязать его к тегу <input>. 
    В результате при клике мышью на <label> тег <input> должен стать активным (в него должен переместиться курсор).

3.4 В HTML-документе есть тег <p> c идентификатором rainbow. Внутри этого тега указано число. 
    Реализуйте скрипт, который делает преобразование в зависимости от следующих условий:

    - Если числовое значение находится в диапазоне от 1 до 9 включительно, должно меняться значение атрибута style. Цвет текста — на красный (#c0392b).
    - Если числовое значение находится в диапазоне от 10 до 20 включительно — на коричневый (#e17055).
    - В ином случае — на желтый (#fdcb6e).

3.5 В HTML-документе есть тег <div> с идентификатором photo. Внутри этого тега указана ссылка на картинку. Необходимо написать скрипт, который:
    - заменит ссылку на тег <img> с этой картинкой,
    - укажет размеры картинки в атрибуте style 100 на 100 пикселей.

3.6 В HTML-документе задан тег <select> c идентификатором numbers. 
    Напишите скрипт, который добавит внутрь этого тега несколько тегов <option> со значениями от 10 до 550 с шагом 10. 
    Значение у тега <option> должно быть указано внутри и в атрибуте value.

3.7 В HTML-документе задан тег <select>. В скрипте объявлена переменная countries, в которой указаны некоторые страны. 
    Доработайте скрипт так, чтобы в тег <select> добавились теги <option> по одному на каждую страну из массива countries. 
    В качестве значения тега option укажите название страны, а в качестве атрибута — value первые две буквы страны в нижнем регистре (маленькими буквами).
*/

// q 3.1
    let elem = document.querySelector('#div_elem');
    elem.style.width = "100px";
    elem.style.height = "100px";

// q 3.2
    let rainbow = document.querySelector('#rainbow');
    rainbow.style.color = "#2980b9";

// q 3.3
    let label = document.querySelector('label');
    label.setAttribute('for', 'target');

// q 3.4
    let rainbow2 = document.querySelector('#rainbow');

    if (rainbow2.textContent > 0 && rainbow2.textContent < 10) {
        rainbow2.style.color = "#c0392b";
    } else if (rainbow2.textContent >= 10 && rainbow2.textContent <= 20) {
        rainbow2.style.color = "#e17055";
    } else {
        rainbow2.style.color = "#fdcb6e";
    }

// q 3.5
    let photo = document.querySelector('#photo');
    photo.textContent = '';

    let img = document.createElement('img');
    photo.appendChild(img);

    img.src = 'https://i.pinimg.com/564x/36/a1/91/36a19108f3088af7315231dc919b166a.jpg';
    img.style.width = "100px";
    img.style.height = "100px";

// q 3.6
    let numbers = document.querySelector('#numbers');

    for (let i = 10; i <= 550; i = i + 10) {
        let option = document.createElement('option');
        numbers.appendChild(option);
        option.value = i;
        option.innerText = i;
    }

// q 3.7
    let select = document.querySelector('select');

    for (let elem of countries) {
        let option = document.createElement('option');
        select.appendChild(option);
        option.innerText = elem;
        option.value = String(elem).substring(0, 2).toLowerCase();
    }
