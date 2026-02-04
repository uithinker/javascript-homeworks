/*
Написать код, который при передаче пользователем языка: en, ru, de выводит в консоль соответствующее приветствие на указанном языке.

Пример: de -> ‘Gutten tag!’
*/

let language = prompt('Type language:');

switch (language) {
    case 'en':
        alert('Nice to meet you!')
        break;
    case 'de':
        alert('Gutten tag!');
        break;
    case 'ru':
        alert('Привет, друг!');
        break;
    default:
        alert('Undefined language, sir!')
        break;
}