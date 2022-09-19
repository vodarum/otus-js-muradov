// Сверстать страницу и подключить к ней файл со
// скриптом. На странице должны быть три текстовых
// параграфа, поле ввода и кнопка. Напишите скрипт,
// который будет выполнять следующие условия:
// 1.Кнопка скрыта, если в поле ввода нет значения.
// 2.При клике на кнопку добавляется новый параграф,
// содержащий текст из поля ввода.
// 3.*Если параграфов становится больше 5, первый из
// них удаляется.

{
    const btn = document.querySelector('#button');
    const input = document.querySelector('#input');

    btn.addEventListener('click', addParagraph);
    input.addEventListener('keyup', showOrHideButton);

    function addParagraph() {
        const newP = document.createElement('p');
        newP.innerText = input.value;

        const pWrapper = document.querySelector('#p-wrapper');
        pWrapper.append(newP);

        input.value = '';

        showOrHideButton();
        removeFirstParagraphIfNeeded();
    }

    function removeFirstParagraphIfNeeded() {
        const paragraphs = document.querySelectorAll('#p-wrapper>p');

        if (paragraphs.length > 5) {
            paragraphs[0].remove();
        }
    }

    function showOrHideButton() {
        btn.hidden = input.value ? false : true;
    }
}