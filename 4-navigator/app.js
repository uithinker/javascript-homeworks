/*
Написать код, рассчитывающий дистанцию о объекта: 

addressLat - адрес назначения lat (например: 10)
addressLong - адрес назначения long
positionLat - текущее положение пользователя lat
positionLong - текущее положение пользователя long
В результате на основе этих координат нужно посчитать расстояние от текущего месторасположения до назначения.
*/

let addressX = 10;
let addressY = 15;
let positionX = 2;
let positionY = 5;

let d = Math.sqrt((addressX - positionX)^2 + (addressY - positionY)^2);

console.log(`Расстояние от текущего расположения [${positionX}, ${positionY}] до назначения [${addressX}, ${addressY}] составляет ${d}`);