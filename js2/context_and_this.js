/* Контекст и this

4.1 В программе объявлены объекты pet_1 и pet_2. 
    Напишите функцию getName() и присвойте ее объектам pet_1 и pet_2 в качестве метода. 
    При вызове метода getName() он должен вернуть имя и возраст питомца через пробел. 
    Решить задачу необходимо с использованием this.

4.2 В программе объявлен объект input и функция sayHi(), которая выводит в консоль сообщение из примера. 
    Используя метод присвоения контекста, свяжите контекст объекта input с функцией sayHi() и вызовите функцию sayHi().

4.3 В программе объявлен объект pet со свойствами name и breed и функция getDescription(), которая выводит эту информацию, используя this. 
    Привяжите к функции getDescription() контекст pet и присвойте получившуюся функцию переменной getDescription.

4.4 В программе объявлен объект props, у которого задан набор свойств. 
    Объявите функцию getValue(), которая выводит в консоль строку со всеми свойствами и их значениями (без методов). 
    Привяжите объект props в качестве контекста функции getValue() и присвойте получившуюся функцию переменной getValue.

4.5 В программе объявлен объект hero, свойства которого описывают информацию о герое. 
    В объекте в том числе определен метод getPosition, который возвращает позицию героя в игре. 
    Определите, почему вызов getPosition работает некорректно. Исправьте эту ошибку.
*/

// q 4.1
    let pet_1 = { 
        name: "Шарик", 
        age: 10
    };
    let pet_2 = { 
        name: "Жучка", 
        age: 5
    };
  
    function getName() {
        return [this.name, this.age].join(' ');
    }
    pet_1.getName = getName;
    pet_2.getName = getName;
    let result = `${pet_1.getName()}; ${pet_2.getName()}`;
    console.log(result); // Ответ: Шарик 10; Жучка 5

// q 4.2
    let input = {
        id: 1,
        value: "Добрый вечер",
        firstName: "Григорий",
        lastName: "Стрельников" 
    };
    function sayHi() {
        console.log(`${this.value}, ${this.firstName} ${this.lastName}!`);
    };

    sayHi.bind(input)(); // Ответ: Добрый вечер, Григорий Стрельников!

// q 4.3
    let pet = { 
        name: "Диксон", 
        breed: "Немецкая овчарка" 
    };
    function getDescription() { 
        console.log("Имя питомца: " + this.name + ", Порода: " + this.breed);
    }
    
    getDescription = getDescription.bind(pet);
    getDescription(); // Ответ: Имя питомца: Диксон, Порода: Немецкая овчарка

// q 4.4
    let props = { 
        name: "Анатолий", 
        age: 29,
        sayHi: ()=>"привет"
    };
    
    function getValue() {
        let str = '';
        for (let key in props) {
            if (typeof props[key] !== 'function') {
            str += key +': ' + props[key] + ', ';
            }
        }
        str = str.slice(0, -2);
        console.log('Значения свойств объекта props (' + str + ')');
    }
    getValue = getValue.call(props); // Ответ: Значения свойств объекта props (name: Анатолий, age: 29)

    // решение от препода:
    /*
    function getValue() {
        let str = "";
        for (let k in this) {
            if (typeof this[k] !== "function") {
                str += `${k}: ${this[k]}, `;
            }
        }
        str = str.slice(0, str.length - 2);
        console.log(`Значения свойств объекта props (${str})`);
    }
    getValue = getValue.call(props); 
    */

// q 4.5
    // вызов с ошибкой:
    let hero = { 
        nick: "FirstHero", 
        position: "Лагерь",
        getPosition: ()=>console.log("Позиция героя: " + this.position)
    }
    // решение задачи:
    hero = {
        nick: "FirstHero",
        position: "Лагерь",
        getPosition() {
            console.log("Позиция героя: " + this.position);
        }
    };
    hero.getPosition(); // Ответ: Позиция героя: Лагерь
