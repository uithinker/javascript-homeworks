/*
Написать функцию проверки номера карты алгоритмом Луна. 
В функцию передаётся карта: 4561-2612-1234-5464, а функция возвращает true, если карта проходит алгоритм и false, если нет.
*/

let card = '4561-2612-1234-5464';
//          0123 4567 89

function isValidCard(card) {
    for (const element of card) {
        if (isNaN(Number(element))) {
            return false;
        }
    }

    return true;
}

function checkCard(card) {
    if (typeof card !== 'string') throw new Error("Данные карты должны быть строкой!");
    
    isValid = true;
    card = card.replaceAll('-', '').split('').map(Number);
    isValidCard(card) ? isValid = true : isValid = false;

    let startIndex = card.length-2;

    for (let i = startIndex; i >= 0; i -= 2) {
        let multiplier = card[i] * 2;

        if (multiplier > 9) {
            multiplier -= 9;
            card.splice(i, 1, multiplier);
        } else if (multiplier < 9) {
            card.splice(i, 1, multiplier);
        }
    }

    let sumCardNumbers = card.reduce((acc, value) => value + acc, 0);

    if (sumCardNumbers % 10 !== 0) {
        isValid = false;
    }

    return isValid;
}

console.log(checkCard(card));