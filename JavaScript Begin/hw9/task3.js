// *Пользователь вводит числа a, b и c. Написать
// программу, выводящую корни квадратного
// уравнения с коэффициентами a, b и c.

{
    const a = prompt('a: ');
    const b = prompt('b: ');
    const c = prompt('c: ');
    const D = Math.pow(b, 2) - 4 * a * c;

    if (D > 0) {
        const x1 = (-b + Math.sqrt(D)) / (2 * a);
        const x2 = (-b - Math.sqrt(D)) / (2 * a);

        console.log(`Квадратное уравнение имеет корни x1 = ${x1} и x2 = ${x2}`);
    } else if (D < 0) {
        console.log('Корней нет');
    } else {
        console.log(`Корень квадратного уравнения равен ${-b / (2 * a)}`);
    }
}