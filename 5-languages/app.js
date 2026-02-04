/*
Написать код, который при передаче пользователем языка: en, ru, de выводит в консоль соответствующее приветствие на указанном языке.

Пример: de -> ‘Gutten tag!’
*/

let language = prompt('Type language:');

if (!language) {
    console.log('Language is not defined');
} else {
    switch (language.toLowerCase()) {
        case 'en':
            console.log('Nice to meet you!')
            break;
        case 'de':
            console.log('Gutten tag!');
            break;
        case 'ru':
            console.log('Привет, друг!');
            break;
        default:
            console.log('Undefined language, sir!')
            break;
    }
}