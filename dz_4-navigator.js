//Написать код, рассчитывающий дистанцию объекта.
//Посчитать расстояние от текущего до назначенного местоположения.
//d = √ (х2 – х1)2 + (у2 – у1)2
const addressLatx = 120; //адрес назначения по x2
const addressLongy = 80; //адрес назначения по y2
const positionLatx = 20; //текущее по x1
const positionLongy = 10; //текущее по y1

let deltaDifference = Math.round(Math.sqrt((Number(addressLatx - positionLatx) + Number(addressLongy - positionLongy))**2))
console.log(deltaDifference);