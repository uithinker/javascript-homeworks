/*
Сделать объект склад с методами добавления на склад, поиска по складу товара и расчет веса
*/

const warehouse = {
    goods: [],
    findGoodById: function (id) {
        return this.goods.find(item => item.id === id);
    },
    addGood: function (object) {
        let validator = true;

        if ((!object || typeof object !== 'object') || !object.id || this.findGoodById(object.id)) {
            validator = false;
        }

        if (validator) {
            this.goods.push(object);
        } else {
            throw new Error("Недопустимый объект на склад");
        }
    },
    getWeightKg: function (id) {
        const item = this.findGoodById(id);
        return item?.weight?.kg ?? 0;
    }
};

/* Товары */
const car = {
    id: 1,
    weight: {
        kg: 1000
    },
    brand: 'Ford'
}

const chair = {
    id: 2,
    weight: {
        kg: 2
    }
}

const paper = {
    id: 3,
    color: 'red'
}

const sad = {
    id: 4,
    color: 'red'
}

warehouse.addGood(chair);
warehouse.addGood(paper);
warehouse.addGood(car);
warehouse.addGood(sad);
console.log(warehouse.goods);
console.log(warehouse.findGoodById(2));
console.log(warehouse.getWeightKg(1));