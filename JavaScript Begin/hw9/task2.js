// Пользователь вводит число R. Написать программу,
// которая выведет в консоль длину окружности и
// площадь круга с радиусом R

{
    const R = prompt('Введите число: ');
    const circleLengthByRadius = 2 * Math.PI * R;
    const circleSquareByRadius = Math.PI * Math.pow(R, 2);

    console.log(`Длина окружности: ${circleLengthByRadius.toFixed(3)}`);
    console.log(`Площадь окружности: ${circleSquareByRadius.toFixed(3)}`);
}