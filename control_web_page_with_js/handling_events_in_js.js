/* Обработка событий в JavaScript

4.1 В HTML-документе задан тег <button> с идентификатором btn и тег <p> с идентификатором val. 
    Напишите скрипт, который выводит в консоль содержимое тега <p> при клике на кнопку.

4.2 В HTML-документе задан тег <button> с идентификатором btn и тег <input> с идентификатором val. 
    Напишите скрипт, который выводит в консоль значение тега <input> при клике на кнопку.

4.3 В HTML-документе задан тег <div> c идентификатором square. Он представляет собой синий квадрат. 
    Напишите скрипт, который позволяет сделать <div> прозрачным (opacity: 0) при клике по нему.

4.4 В HTML-документе есть тег <button> с идентификатором clicker. 
    Напишите скрипт, который добавит обработку события клика на кнопку с идентификатором clicker. 
    При нажатии на кнопку число внутри тега <button> должно увеличиваться на один.

4.5 В HTML-документе задан тег <button> с идентификатором delete и тег <ul> c идентификатором points и c элементами <li> внутри. 
    Напишите скрипт, который позволяет удалить последний элемент <li> в списке <ul> при нажатии на кнопку.

4.6 В HTML-документе задан тег <div> c идентификатором square в виде красного квадрата. 
    У него есть атрибут style с указанными высотой и шириной в 100 пикселей. 
    Напишите скрипт, который уменьшает ширину и высоту квадрата на 10% при клике по нему.

4.7 В HTML-документе задан тег <button> с классом copy. 
    Напишите скрипт, который позволит при нажатии на кнопку <button> создать ее копию и расположить в конце тега body.

4.8 В HTML-документе есть несколько тегов <p>. Внутри них указаны числа. 
    Напишите скрипт, который позволяет при нажатии на любой параграф увеличить его содержимое на единицу.

4.9 В HTML-документе есть два тега <div> с идентификаторами div1 и div2 с элементами <p> внутри. 
    Напишите скрипт, который перемещает тег <p> из одного тега <div> в другой при клике по этому элементу <p>.
*/

// q 4.1
    function buttonClick() {
        let textP = document.querySelector('#val');
        console.log(textP.innerText);  
    }

    let btn = document.querySelector('#btn');
    btn.addEventListener('click', buttonClick);

// q 4.2
    function buttonClick2() {
        let input = document.querySelector('#val');
        console.log(input.getAttribute('value')); 
    }

    let btn2 = document.querySelector('#btn');
    btn2.addEventListener('click', buttonClick2);

// q 4.3
    let square = document.querySelector('#square');

    function divClick() {
        square.style.opacity = 0;
    }

    square.addEventListener('click', divClick);

// q 4.4
    let clicker = document.querySelector('#clicker');

    function buttonClick3() {
        clicker.textContent = Number(clicker.textContent) + 1;
        console.log(clicker.textContent);
    }

    clicker.addEventListener('click', buttonClick3);

// q 4.5
    function deletClick() {
        let points = document.querySelector('#points');
        let listItems = points.querySelectorAll('li');
        let last = listItems[listItems.length - 1];
        last.remove();
    }

    let delet = document.querySelector('#delete');
    delet.addEventListener('click', deletClick);

// q 4.6
    square = document.querySelector('#square');

    function reduceStyle() {
        let heightSquare = parseFloat(square.style.height);
        let widthSquare = parseFloat(square.style.width);
        square.style.height = `${heightSquare * 0.9}px`;
        square.style.width = `${widthSquare * 0.9}px`;
    }

    square.addEventListener('click', reduceStyle);

// q 4.7
    let card = document.querySelector('.card');
    let copy = document.querySelector('.copy');

    function copyCard() {
        let card2 = card.cloneNode();
        let copy2 = copy.cloneNode();
        document.body.appendChild(card2);
        card2.appendChild(copy2);
        copy2.textContent = copy.textContent;
    }

    card.addEventListener('click', copyCard);

// q 4.8
    let card2 = document.querySelector('.card');
    let cardParagraph = card2.querySelectorAll('p');

    for (let elem of cardParagraph) {
        function numClick() {
            elem.textContent = Number(elem.textContent) + 1;
        }
        elem.addEventListener('click', numClick);
    }

// q 4.9
    let div1 = document.querySelector('#div1');
    let div2 = document.querySelector('#div2');
    let div1Paragraph = div1.querySelectorAll('p');
    let div2Paragraph = div2.querySelectorAll('p');

    for (let elem of div1Paragraph) {
        elem.addEventListener("click", function() {
            div2.appendChild(elem);
            })
    }

    for (let elem of div2Paragraph) {
        elem.addEventListener("click", function() {
            div1.appendChild(elem);
            })
    }

    // v2
    /* 
    let p = document.querySelectorAll("p")
    for(element of p){
        element.addEventListener("click", function() {
            if (this.parentNode.id === "div1"){
                document.querySelector("#div2").appendChild(this);
            } else { document.querySelector("#div1").appendChild(this);}
        })
    }
    */