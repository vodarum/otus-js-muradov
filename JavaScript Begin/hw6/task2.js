// Напишите функцию isWord, которая принимает на
// вход текстовую строку. Функция возвращает true, если
// строка состоит из одного слова и false, если из
// нескольких.

{
    const isWord = (str) => {
        const words = str.split(' ');

        if (words.length === 1) {
            return words[0] ? true : 'Строка пустая!';
        } else {
            return false;
        }
    };

    console.log(isWord(''));
    console.log(isWord('слово'));
    console.log(isWord('два слова'));
}