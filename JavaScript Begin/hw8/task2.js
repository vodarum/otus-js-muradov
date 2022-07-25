// Написать программу, которая выводит в консоль
// количество минут, прошедшее с начала сегодняшнего
// дня.

{
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    const startCurrentDay = new Date(year, month, date);
    const minutesFromStartCurrentDay = ((now - startCurrentDay) / 1000 / 60).toFixed(0);

    console.log(minutesFromStartCurrentDay);
}