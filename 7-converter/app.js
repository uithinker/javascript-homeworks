/*
Написать функцию, которая получает на вход 3 параметра:

суммой средств - 1000
валютой средств - руб
целевой валютой - $
Возвращает число в новой валюте, если конвертация поддерживается, или null, если нет. Ставки конвертации хранятся внутри функции.
*/

function converterGlobal(balance, arian, arianTarget) {
    const USD_RATE = 76;
    const EURO_RATE = 90;
    const USD_TO_EURO = 0.85;
    const EURO_TO_USD = 1.18;

    arian = arian.toLowerCase();
    arianTarget = arianTarget.toLowerCase();

    if (arian === arianTarget) {
        return 'Нельзя конвертировать в ту же валюту!';
    }
    
    switch (arian) {
        case 'rub':
            if (arianTarget === 'usd' || arianTarget === '$') return balance / USD_RATE;
            else if (arianTarget === 'euro' || arianTarget === '€') return balance / EURO_RATE;
        case '$':
        case 'usd':
            if (arianTarget === 'rub') return balance * USD_RATE;
            else if (arianTarget === 'euro' || arianTarget === '€') return balance * USD_TO_EURO;
        case '€':
        case 'euro':
            if (arianTarget === 'usd' || arianTarget === '$') return balance * EURO_TO_USD;
            else if (arianTarget === 'rub') return balance * EURO_RATE;
    }

    return null;
}

console.log(converterGlobal(100000, 'usd', 'peso'));