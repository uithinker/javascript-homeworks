/*
Дан массив чисел: arr = [1, 40, -5, 10, 0]
                            1    2
Написать функцию, которая сортирует данный массив при помощи циклов.

Подсказка:

Нужно использовать 2 цикла, вложенных друг в друга
Нужно сравнивать и менять элементы
*/

const arr = [1, 40, -5, 50, 0];

function sortedArr(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

console.log(sortedArr(arr));