/* Циклы

5.1 В программе объявлены две переменные start и end. 
    Используя цикл, посчитайте сумму чисел из диапазона значений от start до end (включая концы), кратные значению 5. 
    Результат выведите в консоль.

5.2 В программе объявлена переменная word со строковым значением. 
    Переверните строку, используя цикл, и выведите результат в консоль.

5.3 В программе объявлена переменная word, в которой записано строковое значение. 
    Определите, является ли word палиндромом:
    •	если является, выведите в консоль "Слово является палиндромом!";
    •	если не является, выведите в консоль "Слово не является палиндромом!".
    Примечание:
    Строка word состоит только из букв разного регистра (большие и маленькие).
*/

// q 5.1
    let start = 0;
    let end = 15;

    let total = 0;
    for (let i = start; i <= end; i++) {
        if(i % 5 == 0) {	
            total += i;
        }
    }
    console.log(total); // Ответ: 30

// q 5.2
    let word = "мир";

    let round = "";
    for (let i = word.length - 1; i >= 0; i--) {
        round += word[i];
    }
    console.log(round); // Ответ: рим

// q 5.3
    word = "Доход";

    let wordReg = word.toLowerCase();
    let i = 0;
    while (i < wordReg.length / 2) {
        if (wordReg [i] !== wordReg [wordReg.length - i - 1]) {
            console.log("Слово не является палиндромом!");
            break;
        } else if (i++) {
            console.log("Слово является палиндромом!");
            break;
        }
    } // Ответ: Слово является палиндромом!

    // v2
    /*
    let word_low = word.toLowerCase();
    let result = "";
    for (let i = word_low.length - 1; i >= 0; i--) {
        result += word_low[i];
    }
    if (result === word_low) {
        console.log("Слово является палиндромом!");
    } else {
        console.log("Слово не является палиндромом!");
    }
    */

    // v3
    /*
    let char = Math.floor(word.length / 2);
    let isPalindrom = true;
    for (let i = 0; i < char; i++) {
        if (word[i].toLowerCase() !== word[word.length - 1 - i].toLowerCase()) {
            isPalindrom = false;
            break;
        }
    } 
    console.log(isPalindrom ? "Слово является палиндромом!" : "Слово не является палиндромом!");
    */