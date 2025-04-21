document.addEventListener('DOMContentLoaded', function () {
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

        // Загрузка данных из JSON-файла
        fetch('data.json') // Укажите путь к вашему JSON-файлу
            .then(response => response.json())
            .then(placemarks => {
                // Обработка данных и добавление меток на карту
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
                                balloonContentBody: placemark.address + '<br><img src="' + placemark.imageURL + '" alt="' + placemark.description + '" style="width: 250px;height: auto;">',
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
            })
            .catch(error => {
                console.error("Ошибка при загрузке JSON-файла:", error);
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
});