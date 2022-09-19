// Напишите функцию diff, которая получает в качестве
// параметров 2 числа и возвращает разницу между
// наибольшим и наименьшим.

{
    function diff(firstNum, secondNum) {
        return firstNum > secondNum ? firstNum - secondNum : secondNum - firstNum;
    }

    console.log(diff(1, 5));
}