document.querySelector('.form__block').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    // Собираем данные из формы
    const formData = {
        address: document.getElementById('address').value,
        description: document.getElementById('description').value,
        color: document.getElementById('color').value,
        imageURL: document.getElementById('images').value
    };

    // Преобразуем данные в JSON
    const jsonData = JSON.stringify(formData);

    // Отправляем данные на сервер через fetch
    fetch('http://localhost:3000/test1', {
        method: 'POST', // Метод HTTP-запроса
        headers: {
            'Content-Type': 'application/json' // Указываем тип содержимого
        },
        body: jsonData // Передаем данные в теле запроса
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка сети или сервера');
        }
        return response.json(); // Парсим ответ от сервера
    })
    .then(data => {
        console.log('Успех:', data); // Обрабатываем успешный ответ
        alert('Данные успешно отправлены!');
    })
    .catch(error => {
        console.error('Ошибка:', error); // Обрабатываем ошибку
        alert('Произошла ошибка при отправке данных.');
    });
});