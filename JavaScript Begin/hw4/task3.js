// Записать все значения полей объекта admin в
// отдельные переменные. Имена переменных
// должны совпадать с названиями полей.

{
    const user = {
        name: 'John'
    };

    user.age = +prompt('Введите число: ');

    const admin = Object.assign({}, user, { role: 'admin' });

    const { name, age, role } = admin;

    console.log(name, age, role);
}