// *В переменных circle и square хранятся площади круга
// и квадрата соответственно. Написать программу,
// которая определяет, поместится ли круг в квадрат.

const circle = 14.2;
const square = 16;

// Площадь круга можно вычислить по формуле S = 3.14 * r^2, где r - радиус.
// Площадь квадрата можно вычислить по формуле S = 4 * r^2, где r - радиус вписанной окружности.

// Получаем радиус окружности, возведенный в квадрат.
const circleDoubleRadius = (circle / 3.14).toFixed(3);
// Получаем радиус вписанной в квадрат окружности, возведенный в квадрат.
const innerCircleDoubleRadius = (square / 4).toFixed(3);

// Если радиус вписанной в квадрат окружности больше радиуса круга из условия либо равен ему, то круг из условия поместится в квадрат.
// Если радиус вписанной в квадрат окружности меньше радиуса круга из условия, то круг из условия не поместится в квадрат.

console.log(circleDoubleRadius, innerCircleDoubleRadius);
if (innerCircleDoubleRadius >= circleDoubleRadius) {
    console.log('Круг в квадрат поместится');
} else {
    console.log('Круг в квадрат не поместится');
}