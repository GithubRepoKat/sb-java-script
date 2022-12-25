/* Объектно-ориентированное программирование

5.1 В программе объявлена переменная order, которая хранит объект. 
    Объявите переменную descriptor, которая должна содержать значения всех атрибутов ключа totalPrice объекта orders в виде объекта. 
    Результат выведите в консоль.

5.2 В программе задан объект employees, который содержит ряд свойств и методов. 
    Сформируйте строку с именами всех свойств через запятую и пробел (, ) и выведите в консоль. 
    Имена методов добавляться не должны.

5.3 В программе объявлены переменные firstName и lastName. 
    Создайте объект user со свойствами firstName и lastName и добавьте getter и setter fullName. 
    Сеттер fullName должен принимать имя и фамилию пользователя через пробел, разделять и присваивать свойствам firstName и lastName соответственно. 
    Геттер fullName должен формировать строку, состоящую из имени и фамилии через пробел.

5.4 В программе объявлены переменные name и phone, которые хранят строки. 
    В name указано название заведения, а в phone — его номер телефона. Создайте класс Delivery со свойствами name и phone. 
    Помимо описанных свойств, добавьте свойство validPhone, которое проверяет значение свойства phone на вхождение знака + в начале строки. 
    Если знак отсутствует, свойство validPhone должно принять булевое значение false, в противном случае — true. 
    Создайте экземпляр класса Delivery и в качестве аргументов конструктора укажите значения переменных name и phone. 
    Получившийся экземпляр класса запишите в переменную deliveryName.

5.5 В программе создан класс Permissions, свойства которого описывают права пользователей на редактирование статей на сайте. 
    Создайте новый класс User, который наследуется от класса Permissions. 
    Дополнительно в классе User добавьте свойство name, значение которого класс принимает в качестве аргумента конструктора.

5.6 В программе задан массив array, элементы которого имеют численное значение, и переменная num, которая является числом. 
    Реализуйте функцию queue(num, ...array), которая принимает в качестве аргументов множество значений списка array и значение переменной num. 
    Функция должна найти минимальную сумму num элементов из значений массива array. Ответ выведите в консоль.
*/

// q 5.1
    let order = {
        productName: "Велосипед",
        costomerName: "Саша",
        salesName: "Петя",
        totalPrice: 15000
    };

    let descriptor = Object.getOwnPropertyDescriptor(order, 'totalPrice');
    console.log(descriptor); // Ответ: {value: 15000, writable: true, enumerable: true, configurable: true}

// q 5.2
    let employees = {
        firstName: "Петя",
        lastName: "Иванов",
        ratePerDay: 2500,
        workingDays: 5,
        getSalary() { console.log(employees.ratePerDay * employees.workingDays )} 
    };

    let str = '';
    for (let key in employees) {
        if (typeof employees[key] !== 'function') {
            str += key + ', ';
        }
    }
    str = str.slice(0, -2);
    console.log(str); // Ответ: firstName, lastName, ratePerDay, workingDays

// q 5.3
    let firstName = "Александр";
    let lastName = "Петров";

    let user = {
        firstName: `${firstName}`,
        lastName: `${lastName}`,
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    }
    console.log(user.fullName); // Ответ: Александр Петров

// q 5.4
    let name = "Pizza";
    let phone = "81234567890";

    class Delivery {
        constructor(name, phone, validPhone = true) {
            this.name = name; 
            this.phone = phone;
            if (this.phone[0] === '+') {
                this.validPhone = validPhone;
            } else {
                this.validPhone = false;
            }
        }
        getInfo() {
            return this.validPhone;
        }
    }
    let deliveryName = new Delivery(name, phone);
    console.log(deliveryName.getInfo()); // Ответ: false

// q 5.5
    name = "Анатолий";
    class Permissions {
        constructor() {
            this.create = false
            this.read = true
            this.update = false
            this.remove = false
        }
    };

    class User extends Permissions {
        constructor(name) {
            super();
            this.name = name;
        }
        show() { 
            return `${this.name} ${this.create} ${this.read} ${this.update} ${this.remove}`;
        } 
    };
    let userPermissions = new User(name);
    console.log(userPermissions.show()); // Ответ: Анатолий false true false false

// q 5.6
    let array = [2, 4, 7, 8, 1];
    let num = 2;

    let minSum = (numsCount, ...arr) => {
        let array = arr[0];
        let nums = new Array(numsCount).fill(Infinity);
    
        array.forEach(num => {
        for (let i = 0; i < nums.length; ++i) {
            if (nums[i] <= num) continue;
    
            nums.splice(i, 0, num);
            nums.pop();
            break;
        }
        });
        nums = nums.map(x => x === Infinity ? 0 : x);
        let sum = nums.reduce((a, b) => a + b, 0);
        return sum;
    }
    console.log(minSum(num, array)); // Ответ: 3
