// *Запросить у пользователя ввод числа N. Вывести в
// консоль среднее арифметическое всех нечётных
// чисел от 1 до N.

{
    const N = prompt('Введите целое число: ');
    let sum = 0;
    let oddNumCount = 0;

    // Вариант 1
    // for (let i = 1; i <= +N; i++) {
    //     if (i % 2 !== 0) {
    //         sum += i;
    //         oddNumCount += 1;
    //     }
    // }

    // Вариант 2
    for (let i = 1; i <= +N; i = i + 2) {
        sum += i;
        oddNumCount += 1;
    }

    console.log(sum / oddNumCount);
}