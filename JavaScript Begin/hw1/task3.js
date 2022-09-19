// *Написать программу, которая запрашивает у
// пользователя ввод трёхзначного числа, а потом
// выводит в консоль сумму цифр введённого числа.

const threeDigitNumber = prompt('Введите трехзначное число: ');

const thirdNumber = threeDigitNumber % 10;
const secondNumber = (threeDigitNumber - thirdNumber) % 100 / 10;
const firstNumber = (threeDigitNumber - thirdNumber - secondNumber * 10) / 100;

console.log(firstNumber * secondNumber * thirdNumber);