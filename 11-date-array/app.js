/*
Дан массива строк  [‘10-02-2022’, ‘тест’, ‘11/12/2023’, ‘00/13/2022’, ‘41/12/2023’];

Необходимо написать функцию, которая бы удаляла бы из массива все строки, которые нельзя перевести в дату (можно: 10-02-2022 и 11/12/2023) и возвращала новый массив вида:

[‘10-02-2022’, ‘11-12-2023’]
*/

const arrayData = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

function removeWrongData(array, condition) {
    if (!Array.isArray(array)) throw new Error('В качестве 1 аргумента передан не массив');
    if (typeof condition !== 'function') throw new Error('В качестве 2 аргумента передана не функция-условие');
    
    const resultArray = [];

    array.forEach(element => {
        if (typeof element !== 'string') return;

        const separator = getSeparator(element);

        const [date, month] = element.split(separator).map(Number);
        if (condition(date, month)) {
            resultArray.push(element);
        }
    });

    return resultArray.map(el => el.replace(/\//g, '-'));
}

const condition = (date, month) => {
    return ((date <= 31 && date > 0) && (month <= 12 && month > 0));
}

const getSeparator = (str) => {
    return str.includes('-') ? '-' : str.includes('/') ? '/' : null
}

console.log(removeWrongData(arrayData, condition));