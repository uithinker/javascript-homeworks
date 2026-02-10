/*
Напишите функцию, которая принимает:
Массив чисел
Функцию удаления элементов

И возвращает отфильтрованный массив. При это функция удаления элементов принимает число и возвращает true, если его надо удалить и false, если надо оставить.
*/

const numbers = [5, 35, 10, 15, 20, 25];
const condition = num => num > 10;

function arrayHandler(numbers, fn) {
    if (typeof fn !== 'function') {
        throw new Error("Аргументом должна быть передана функция");
    }

    if (!Array.isArray(numbers) || !numbers.every(num => typeof num === 'number')) {
        throw new Error("Массив не должен быть пустым и должен состоять из чисел");
    }
    
    for (let i = numbers.length-1; i >= 0; i--) {
        if (fn(numbers[i])) {
            numbers.splice(i, 1);
        }
    }

    return numbers;
}

console.log(arrayHandler(numbers, condition));



