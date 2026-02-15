// Написать функцию, которая принимает объект query параметров и возвращает строку для вставки:

// {
//     search: ‘Вася’,
//     take: 10,
// }

// search=Вася&take=10

const query = {
    search: 'Вася',
    sort: 'popularity',
    skip: 0,
    take: 10,
};

function getQueryAPI(obj) {
    if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
        throw new Error("Аргументом должен быть объект");
    }

    return Object.entries(obj)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');
}

console.log(getQueryAPI(query));