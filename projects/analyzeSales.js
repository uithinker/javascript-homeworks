/*
**Описание**: Реализуйте программу для анализа продаж интернет-магазина, которая обрабатывает данные о товарах и их продажах

**Входные данные**: Объект sales с данными о продажах, где ключи — названия товаров (строки), а значения — количество проданных единиц (числа)

**Выходные данные**: Объект с тремя свойствами:
- totalItems: общее количество различных товаров
- totalSales: общее количество проданных единиц всех товаров
- topProduct: название товара с наибольшими продажами

**Ограничения**: 
- Объект sales содержит от 1 до 20 товаров
- Количество продаж каждого товара от 1 до 1000
- Названия товаров не содержат пробелов в начале и конце
- Возвращается массив topProducts, если totalSales равны между собой

Input: {"laptop": 15, "mouse": 45, "keyboard": 23}
Output: {"totalItems": 3, "totalSales": 83, "topProduct": "mouse"}

Input: {"phone": 12, "tablet": 8, "headphones": 25, "charger": 30}
Output: {"totalItems": 4, "totalSales": 75, "topProduct": "charger"}
*/

const sales = {
    laptop: 15,
    mouse: 230,
    keyboard: 230,
    PC: 150,
    headphones: 48
}

function validationSales(sales) {
    let flag = true;

    if (!sales || typeof sales !== 'object' || Object.keys(sales).length < 1 || Object.keys(sales).length > 20) {
        flag = false;
    }

    for (const value of Object.values(sales)) {
        if (!Number.isFinite(value)) {
            flag = false;
        }
    }

    for (const key in sales) {        
        if (sales[key] < 1 || sales[key] > 1000 || key.trim() !== key) {
            flag = false;
        }
    }

    return flag;
}

function getTopProducts(sales, maxValue) {
    const arrayMaxSales = [];
    for (const key of Object.keys(sales)) {
        if(sales[key] === maxValue) {
            arrayMaxSales.push(key);
        };
    }

    return arrayMaxSales.length > 1 ? arrayMaxSales : Object.keys(sales).find(key => sales[key] === maxValue);
}

function analyzeSales(sales) {
    if (!validationSales(sales)) {
        throw new Error("Недопустимые значения в объекте");
    }

    const values = Object.values(sales);
    const maxValue = Math.max(...values);

    if (validationSales(sales)) {
        return {
            totalItems: Object.keys(sales).length,
            totalSales: values.reduce((acc, value) => {
                return acc + value;
            }, 0),
            topProduct: getTopProducts(sales, maxValue)
        }
    }
}

const statisticSales = analyzeSales(sales);
console.log(statisticSales);