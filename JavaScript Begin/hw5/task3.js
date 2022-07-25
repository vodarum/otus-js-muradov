// Создайте массив целых чисел из 10 элементов.
// *Найдите и выведите в консоль наибольший и наименьший элементы исходного массива.

{
    const arr = [0, 1, 2, 4, 8, 16, 32, 64, 128, 256];

    let min = arr[0];
    let max = arr[0];

    arr.forEach(function(i) {
        if (i < min) {
            min = i;
        }

        if (i > max) {
            max = i;
        }
    });

    console.log(min, max);
}