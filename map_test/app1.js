ymaps.ready(init);

function init() {
    // Создание карты
    var myMap = new ymaps.Map("map", {
        center: [61.5240, 105.3188], // Москва
        zoom: 10,
        type: 'yandex#map' // Тип карты: "Схема"
    }, {
        apiKey: '91717e14-a276-4274-b1fa-2a6c6dd5567' // Укажите ваш API-ключ
    });

    // Список адресов, описаний и цветов меток
    var placemarks = [
        {
            address: "Москва, ул. Тверская, 13",
            description: "Главный офис",
            color: "#FF0000", // Красный
            imageURL: "https://s0.rbk.ru/v6_top_pics/resized/1200xH/media/img/0/13/756376571634130.jpg"
        },
        {
            address: "Москва, ул. Арбат, 1",
            description: "Филиал на Арбате",
            color: "#00FF00", // Зеленый
            imageURL: "https://mf.b37mrtl.ru/russian/images/2024.06/article/6666cfc702e8bd706c2b5f59.jpg"
        },
        {
            address: "Москва, Ленинский проспект, 32А",
            description: "Офис на Ленинском",
            color: "#FFA500", // Оранжевый
            imageURL: "https://rvcouch.ru/wp-content/uploads/2019/04/5a95227d15e9f9034f79d275.jpg"
        },
        {
            address: "Москва, ул. Тверская, 10",
            description: "Дополнительный офис",
            color: "#FF0000", // Красный
            imageURL: "https://stihi.ru/pics/2022/07/24/4233.jpg"
        },
        {
            address: "Москва, ул. Арбат, 5",
            description: "Еще один филиал",
            color: "#00FF00", // Зеленый
            imageURL: "https://as1.ftcdn.net/v2/jpg/01/76/78/32/1000_F_176783296_cyw4HvcimTBxlhCxns8ZhuDGEs7lou8H.jpg"
        },
        {
            address: "Москва, Большая Грузинская улица, 1, стр. 1",
            description: "Зоопарк",
            color: "#00FF00", // Зеленый
            imageURL: "https://avatars.mds.yandex.net/get-altay/224414/2a0000015c223bd314fd4ffc4eafd6a9012a/XXXL"
        },
        {
            address: "Ростов-на-Дону, проспект Чехова, 60",
            description: "Ростовский областной музей изобразительных искусств",
            color: "#FFA500", // Оранжевый
            imageURL: "https://avatars.mds.yandex.net/i?id=03340afa9a6324a572b94bc5b95f0a8ef937d766-5282542-images-thumbs&n=13"
        },
        {
            address: "Ростов-на-Дону, 2-я Луговая улица, 4Б",
            description: "Объект 1",
            color: "#FFA500", // Оранжевый
            imageURL: "https://avatars.mds.yandex.net/i?id=2c94b99e072e95daad82b731343e6408_l-10303576-images-thumbs&n=13"
        },
        {
            address: "Ростов-на-Дону, 2-я Луговая улица, 5",
            description: "Объект 2",
            color: "#00FF00", // Зеленый
            imageURL: "https://avatars.mds.yandex.net/i?id=2c94b99e072e95daad82b731343e6408_l-10303576-images-thumbs&n=13"
        },
        {
            address: "Ростов-на-Дону, 2-я Луговая улица, 10Б",
            description: "Объект 3",
            color: "#FF0000", // Красный
            imageURL: "https://avatars.mds.yandex.net/i?id=2c94b99e072e95daad82b731343e6408_l-10303576-images-thumbs&n=13"
        },
        {
            address: "Волгоград, Карская улица, 26",
            description: "Объект 4",
            color: "#00FF00", // Зеленый
            imageURL: "https://avatars.mds.yandex.net/i?id=2c94b99e072e95daad82b731343e6408_l-10303576-images-thumbs&n=13"
        },
        {
            address: "Волгоград, Васильсурская улица, 17",
            description: "Объект 5",
            color: "#00FF00", // Зеленый
            imageURL: "https://avatars.mds.yandex.net/i?id=2c94b99e072e95daad82b731343e6408_l-10303576-images-thumbs&n=13"
        },
        {
            address: "Волгоград, Ломоносова, 41",
            description: "Объект 6",
            color: "#FF0000", // Красный
            imageURL: "https://avatars.mds.yandex.net/i?id=2c94b99e072e95daad82b731343e6408_l-10303576-images-thumbs&n=13"
        },
        {
            address: "Самара, Осипенко, 138",
            description: "Объект 7",
            color: "#00FF00", // Зеленый
            imageURL: "https://avatars.mds.yandex.net/i?id=2c94b99e072e95daad82b731343e6408_l-10303576-images-thumbs&n=13"
        },
        {
            address: "Самара, Мечникова, 54",
            description: "Объект 8",
            color: "#FFA500", // Оранжевый
            imageURL: "https://avatars.mds.yandex.net/i?id=2c94b99e072e95daad82b731343e6408_l-10303576-images-thumbs&n=13"
        },
        {
            address: "Владикавказ, Нальчикская улица, 43",
            description: "Объект 9",
            color: "#FF0000", // Красный
            imageURL: "https://avatars.mds.yandex.net/i?id=2c94b99e072e95daad82b731343e6408_l-10303576-images-thumbs&n=13"
        },
        {
            address: "Владикавказ, Неведомского, 19",
            description: "Объект 10",
            color: "#FFA500", // Оранжевый
            imageURL: "https://avatars.mds.yandex.net/i?id=2c94b99e072e95daad82b731343e6408_l-10303576-images-thumbs&n=13"
        },
        {
            address: "Мурманск, Подстаницкого, 4",
            description: "Объект 11",
            color: "#FFA500", // Оранжевый
            imageURL: "https://avatars.mds.yandex.net/i?id=2c94b99e072e95daad82b731343e6408_l-10303576-images-thumbs&n=13"
        },
        {
            address: "Мурманск, Анатолия Бредова, 9",
            description: "Объект 12",
            color: "#FF0000", // Красный
            imageURL: "https://avatars.mds.yandex.net/i?id=2c94b99e072e95daad82b731343e6408_l-10303576-images-thumbs&n=13"
        },
        {
            address: "Мурманск, Алексея Генералова, 10",
            description: "Объект 13",
            color: "#00FF00", // Зеленый
            imageURL: "https://avatars.mds.yandex.net/i?id=2c94b99e072e95daad82b731343e6408_l-10303576-images-thumbs&n=13"
        },
        {
            address: "Мурманск, Радищева, 68",
            description: "Объект 14",
            color: "#00FF00", // Зеленый
            imageURL: "https://avatars.mds.yandex.net/i?id=2c94b99e072e95daad82b731343e6408_l-10303576-images-thumbs&n=13"
        },
        {
            address: "Благовещенск, Амурская улица, 190",
            description: "Объект 15",
            color: "#00FF00", // Зеленый
            imageURL: "https://avatars.mds.yandex.net/i?id=2c94b99e072e95daad82b731343e6408_l-10303576-images-thumbs&n=13"
        },
        {
            address: "Благовещенск, Чехова, 42",
            description: "Объект 16",
            color: "#FFA500", // Оранжевый
            imageURL: "https://avatars.mds.yandex.net/i?id=2c94b99e072e95daad82b731343e6408_l-10303576-images-thumbs&n=13"
        },
        {
            address: "Благовещенск, Фрунзе, 91",
            description: "Объект 17",
            color: "#FFA500", // Оранжевый
            imageURL: "https://avatars.mds.yandex.net/i?id=2c94b99e072e95daad82b731343e6408_l-10303576-images-thumbs&n=13"
        },
        {
            address: "Екатеринбург, Шейнкмана, 24",
            description: "Объект 18",
            color: "#FFA500", // Оранжевый
            imageURL: "https://avatars.mds.yandex.net/i?id=2c94b99e072e95daad82b731343e6408_l-10303576-images-thumbs&n=13"
        },
        {
            address: "Екатеринбург, Гагарина, 28",
            description: "Объект 19",
            color: "#FF0000", // Красный
            imageURL: "https://avatars.mds.yandex.net/i?id=2c94b99e072e95daad82b731343e6408_l-10303576-images-thumbs&n=13"
        }
    ];

    // Создаем коллекцию меток
    var objectManager = new ymaps.ObjectManager({
        clusterize: true, // Включаем кластеризацию
        gridSize: 32, // Размер ячейки кластеризации
        clusterDisableClickZoom: true // Отключаем увеличение при клике на кластер
    });

    // Настройка стиля кластеров
    objectManager.clusters.options.set({
        preset: 'islands#invertedBlueClusterIcons', // Стандартный стиль кластера
        clusterIconLayout: 'default#pieChart' // Используем кастомный макет для кластеров
    });

    // Добавляем ObjectManager на карту
    myMap.geoObjects.add(objectManager);

    // Геокодирование адресов и добавление меток в ObjectManager
    placemarks.forEach(function(placemark, index) {
        ymaps.geocode(placemark.address, {
            results: 1
        }).then(function(res) {
            // Проверяем, есть ли результаты геокодирования
            if (res.geoObjects.getLength() === 0) {
                console.error("Адрес не найден: " + placemark.address);
                return;
            }

            // Получаем координаты объекта
            var firstGeoObject = res.geoObjects.get(0);
            var coords = firstGeoObject.geometry.getCoordinates();

            // Создаем объект метки
            var object = {
                id: index, // Уникальный идентификатор
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: coords
                },
                properties: {
                    balloonContentHeader: placemark.description,
                    balloonContentBody: placemark.address,
                    balloonContentBody: '<img src="'+placemark.imageURL+'" alt="'+placemark.description+'" style="width: 250px;height: auto;">',
                    hintContent: placemark.address,
                    iconColor: placemark.color // Цвет иконки
                },
                options: {
                    preset: 'islands#circleIcon', // Круглая иконка
                    iconColor: placemark.color // Цвет иконки
                }
            };

            // Добавляем метку в ObjectManager
            objectManager.add(object);

            // Масштабируем карту, чтобы были видны все метки
            myMap.setBounds(objectManager.getBounds(), {
                checkZoomRange: true,
                zoomMargin: 50
            });
        }).catch(function(error) {
            console.error("Ошибка при геокодировании адреса: " + placemark.address, error);
        });
    });

    // Кастомный макет для кластеров
    ymaps.templateLayoutFactory.createClass(
        '<div style="width: 40px; height: 40px; border-radius: 50%; background: white; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; position: relative;">' +
            '<canvas width="40" height="40" style="position: absolute; top: 0; left: 0;"></canvas>' +
            '<div style="position: relative; z-index: 1;">{{ properties.geoObjects.length }}</div>' +
        '</div>',
        {
            build: function() {
                this.constructor.superclass.build.call(this);
                this._canvas = this.getElement().querySelector('canvas');
                this._ctx = this._canvas.getContext('2d');
                this._updateChart();
            },
            clear: function() {
                this.constructor.superclass.clear.call(this);
            },
            _updateChart: function() {
                var geoObjects = this.getData().properties.geoObjects;
                var colors = { "#FF0000": 0, "#00FF00": 0, "#FFA500": 0 };

                // Считаем количество меток каждого цвета
                geoObjects.forEach(function(geoObject) {
                    var color = geoObject.properties.iconColor;
                    if (colors.hasOwnProperty(color)) {
                        colors[color]++;
                    }
                });

                // Рисуем график
                var total = geoObjects.length;
                var startAngle = 0;
                this._ctx.clearRect(0, 0, 40, 40);

                Object.keys(colors).forEach(function(color) {
                    if (colors[color] > 0) {
                        var endAngle = startAngle + (colors[color] / total) * 2 * Math.PI;
                        this._ctx.beginPath();
                        this._ctx.moveTo(20, 20);
                        this._ctx.arc(20, 20, 20, startAngle, endAngle);
                        this._ctx.closePath();
                        this._ctx.fillStyle = color;
                        this._ctx.fill();
                        startAngle = endAngle;
                    }
                }, this);
            }
        }
    );
}