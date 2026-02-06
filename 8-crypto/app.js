/*
Написать 2 функции:

Шифратор пароля - функция принимает пароль, разбивает по символам, меняет местами какие-то буквы по заданному алгоритму и возвращает строку.

Проверка пароля - принимает зашифрованный пароль и второй пароль. Воспроизводит алгоритм назад на зашифрованном пароле и возвращает true, если он совпадает со вторым паролем и false, если нет.
crypto(‘password’) -> ssapdorw

check(‘ssapdorw’, ‘password’) -> true

check(‘ssapdorw’, ‘wrong’) -> false
*/

function passwordEncryptor(password) {
    let symbols = password.split('');
    let middle = Math.ceil(symbols.length / 2);
    let firstPartReverse = symbols.slice(0, middle).reverse();
    let secondPartReverse = symbols.slice(middle).reverse();

    return firstPartReverse.join('') + secondPartReverse.join('');
}

function checkPassword(encrypred, password) {
    return passwordEncryptor(password) === encrypred;
}

const encrypredPassword = passwordEncryptor('password');
console.log(checkPassword('ssapdrow', 'password'));