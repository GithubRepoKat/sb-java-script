/* Работа с объектами 

3.1 В программе объявлена переменная car, которая хранит в себе объект, у которого есть как минимум одно свойство — engine. 
    Удалите из объекта car свойство engine и результат выведите в консоль.

3.2 В программе объявлена переменная goods, которая хранит объект со свойствами, описывающими товар. 
    Сформируйте массив, который содержит в начале все названия свойств объекта, а потом все их значения. 
    Результат выведите в консоль.

3.3 В программе заданы две переменные article и author, которые содержат объекты. 
    Объект article содержит информацию о статье, а author — об авторе. 
    Сформируйте новый объект, который содержит свойства объектов article и author. 
    Результат выведите в консоль.

3.4 В программе задан массив array. 
    Напишите функцию count(), которая считает количество элементов массива array и выводит в консоль сообщение, как в примере.

3.5 В программе задан двумерный массив employee. 
    Удалите у данного массива значение, у которого первый элемент hireDate, и добавьте новое значение ["jobName", "IT PROG"] в конец массива. 
    Результат выведите в консоль.

3.6 В программе задан двумерный массив array. 
    Создайте и вызовите функцию countString(), которая считает количество значений массива array, у которых второй элемент является строкой. 
    Функция countString() должна выводить в консоль сообщение, как в примере.
*/

// q 3.1
    let car  = {
        model: "Audi", 
        color: "white",
        weight: 1850,
        engine: "170 hp"
    };

    delete car.engine;
    console.log(car); // Ответ: {model: 'Audi', color: 'white', weight: 1850}

// q 3.2
    let goods = {
        title: "Самокат", 
        price: 6000,
        good_id: 1
    };

    let arrGoods = (Object.keys(goods)).concat(Object.values(goods));
    console.log(arrGoods); // Ответ: ['title', 'price', 'good_id', 'Самокат', 6000, 1]

// q 3.3
    let article = {
        title: "Загадки дачного огурца", 
        text: "Огурец не перестает удивлять своими выходками. Хозяйка в недоумении" 
    };
    let author = {
        name: "Ричард М.В.",
        age: 43
    };

    let newObj = Object.assign({}, article, author);
    console.log(newObj); // Ответ: {title: 'Загадки дачного огурца', text: 'Огурец не перестает удивлять своими выходками. Хозяйка в недоумении', name: 'Ричард М.В.', age: 43}

// q 3.4
    let array = [true, 4, "word", "10n"];

    function count () {
        return array.length;
    }
    console.log('Количество элементов в массиве: ' + count()); // Ответ: Количество элементов в массиве: 4

// q 3.5
    let employee  = [
        ["firstName","Ivan"],
        ["hireDate","21.10.2015"],
        ["hireDate","21.10.2015"]
    ];

    let employeeOne = new Map(employee);
    employeeOne.delete("hireDate");
    employeeOne.set("jobName", "IT PROG");
    console.log([...employeeOne.entries()]); // Ответ: [["firstName","Ivan"],["jobName","IT PROG"]]

    // длинный вариант вместо строки console.log([...employeeOne.entries()]);
    /* let employeeTwo = [];
    for (let item of employeeOne) {
        employeeTwo.push(item);
    }
    console.log(employeeTwo); */ 

    // решение от препода:
    let str = "hireDate";
    employee.sort((a,b) => {
        // console.log(a,b);
        if (b[0] !== str) {
            return 1;
        } else if (a[0] !== str) {
            return -1;
        }
    })
    if (typeof employee[0] === "object") {
        while (employee[employee.length - 1][0] === str) {
            employee.pop();
        }
    }
    employee.push(["jobName", "IT PROG"]);
    console.log(employee);

// q 3.6
    array = [
        [ "boolean", true ], 
        [ "number", 4 ],
        [ "string", "word" ],
        [ "object", {}]
    ];

    let numStr = 0;
    for (let i = 0; i < array.length; i++) {
        if ((typeof array[i][1]) == "string") {
            numStr++;
        }
    }
    console.log('Количество строковых элементов в именованном массиве: ' + numStr); // Ответ: Количество строковых элементов в именованном массиве: 1

    // решение от препода:
    const countString = function (a) {
        let cnt = 0;
        for (let val of a) {
            if (typeof val[1] === "string") {
                cnt++;
            }
        }
        console.log(`Количество строковых элементов в именованном массиве: ${cnt}`);
    }
    countString(array);


