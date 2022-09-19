// Вывести в консоль таблицу умножения на 7.
// 7 x 1 = 7
// 7 x 2 = 14
// …
// 7 x 9 = 63

{
    const num = 7;
    let i = 1;

    while (i <= 9) {
        console.log(`${i} x ${num} = ${i * num}`);
        i++;
    }

    // while (true) {
    //     if (i > 9) {
    //         break;
    //     }

    //     console.log(`${i} x ${num} = ${i * num}`);
    //     i++;
    // }
}