// *В двух переменных хранятся даты рождения двух
// пользователей в формате ДД.ММ.ГГГГ. Написать
// программу, которая определяет более молодого
// пользователя.

{
    const firstUserBirthday = '13.08.1993';
    const secondUserBirthday = '03.07.1992';

    const [fubDate, fubMonth, fubYear] = firstUserBirthday.split('.');
    const [subDate, subMonth, subYear] = secondUserBirthday.split('.');

    const fubAsMillisec = +(new Date(`${fubYear}-${fubMonth}-${fubDate}`));
    const subAsMillisec = +(new Date(`${subYear}-${subMonth}-${subDate}`));

    if (fubAsMillisec < subAsMillisec) {
        console.log('Первый пользователь старше');
    } else if (fubAsMillisec > subAsMillisec) {
        console.log('Второй пользователь старше');
    } else {
        console.log('Пользователи ровесники');
    }
}