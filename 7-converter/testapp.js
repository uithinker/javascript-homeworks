/*
Написать функцию, которая получает на вход 3 параметра:

суммой средств - 1000
валютой средств - руб
целевой валютой - $
Возвращает число в новой валюте, если конвертация поддерживается, или null, если нет. Ставки конвертации хранятся внутри функции.
*/
const USD_RATE = 76;
const EURO_RATE = 90;
const USD_TO_EURO = 0.85;
const EURO_TO_USD = 1.18;

function converterRUB(balance, arian, arianTarget) {
    if (arian !== arianTarget) {
        switch (arianTarget.toLowerCase()) {
            case '$':
            case 'usd':
            case 'dollar':
                return balance / USD_RATE;
            case '€':
            case 'euro':
                return balance / EURO_RATE;
        }
    }

    return 'Нельзя конвертировать в ту же валюту!';
}

function converterUSD(balance, arian, arianTarget) {
    if (arian !== arianTarget) {
        switch (arianTarget.toLowerCase()) {
            case 'руб':
            case 'rub':
                return balance * USD_RATE;
            case '€':
            case 'euro':
                return balance * USD_TO_EURO;
        }
    }

    return 'Нельзя конвертировать в ту же валюту!';
}

function converterEURO(balance, arian, arianTarget) {
    if (arian !== arianTarget) {
        switch (arianTarget.toLowerCase()) {
            case '$':
            case 'usd':
            case 'dollar':
                return balance * EURO_TO_USD;
            case 'руб':
            case 'rub':
                return balance * EURO_RATE;
        }
    }

    return 'Нельзя конвертировать в ту же валюту!';
}


function converterGlobal(balance, arian, arianTarget) {
    switch (arian) {
        case 'руб':
        case 'rub':
            return converterRUB(balance, arian, arianTarget);
        case '$':
        case 'usd':
        case 'dollar':
            return converterUSD(balance, arian, arianTarget);
        case '€':
        case 'euro':
            return converterEURO(balance, arian, arianTarget);
    }

    return null;
}

console.log(`Сумма в сконвертированной валюте: ${converterGlobal(100000, 'rub', 'usd')}`);