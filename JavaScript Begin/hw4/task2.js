// Создать копию объекта user с именем admin.
// Добавить новому объекту поле role со значением ‘admin’.


{
    const user = {
        name: 'John'
    };

    user.age = +prompt('Введите число: ');

    const admin = Object.assign({}, user, { role: 'admin' });

    console.log(user, admin);
}