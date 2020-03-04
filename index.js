// ymaps.ready(init);
//
// function init() {
//     var map = new ymaps.Map('map', {
//         center: [59.94, 30.32],
//         zoom: 11,
//         controls: ['zoomControl'],
//         behaviors: ['drag']
//     });
//
// }

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
        center: [55.751574, 37.573856],
        zoom: 9,
        controls: []
    }, {
        searchControlProvider: 'yandex#search'
    });

    var placemark = new ymaps.Placemark(myMap.getCenter(), {
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#">Рога и копыта</a><br>' +
            '<span class="description">Сеть кинотеатров</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody:
        '<div class="rewiew__inputs">' +
        '<img src="./img/shape.png" alt=""><br>' +
            '<div class="rewiew__title">' +
            'ваш отзыв' +
            '</div>' +
            '<div class="rewiew__panel">' +
            '<div class="panel__item1">' +
            '<input type="text" class="rewiew__input name" placeholder="Ваше имя">' +
            '</div>' +
            '<div class="panel__item2">' +
            '<input type="text" class="rewiew__input place" placeholder="Укажите место">' +
            '</div>' +
            '<div class="panel__item3">' +
            '<input type="text" class="rewiew__input rewiew__text" placeholder="Поделитесь впечатлениями">' +
            '</div>' +


            '</div>' +
            '</div>' +

            '<b>Ближайшие сеансы</b> <br/> Сеансов нет.',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter:
            '<button class="add__button">' +
            'Добавить' +
            '</button>',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Рога и копыта'
    });
    // Добавим метку на карту.
    myMap.geoObjects.add(placemark);
    // Откроем балун на метке.
    placemark.balloon.open();
}
// попытка 3
// ymaps.ready(init);
//
// var placemarks = [
//         {
//             latitude: 59.97,
//             longitude: 30.31,
//             hintContent: '<div class="map__hint">ул. Литераторов, д. 19</div>',
//             balloonContent: [
//                 '<div class="rewiew1">',
//                 '<div class="rewiew__place1">',
//                 '<div class="location_adress1">',
//                 'aaffa hfhfh 11111',
//                 '</div>',
//                 '</div>',
//                 '</div>',
//                 '<div class="grey">',
//                 '<div class="orange">',
//                 'im orange',
//                 '</div>',
//                 '</div>',
//             ]
//         },
//         {
//             latitude: 59.94,
//             longitude: 30.25,
//             hintContent: '<div class="map__hint">Малый проспект В О, д 64</div>',
//             balloonContent: [
//                 '<div class="map__balloon">',
//                 '<img class="map__burger-img" src="img/burger.png" alt="Бургер"/>',
//                 'Самые вкусные бургеры у нас! Заходите по адресу: Малый проспект В О, д 64',
//                 '</div>'
//             ]
//         },
//         {
//             latitude: 59.93,
//             longitude: 30.34,
//             hintContent: '<div class="map__hint">наб. реки Фонтанки, д. 56</div>',
//             balloonContent: [
//                 '<div class="map__balloon">',
//                 '<img class="map__burger-img" src="img/burger.png" alt="Бургер"/>',
//                 'Самые вкусные бургеры у нас! Заходите по адресу: наб. реки Фонтанки, д. 56',
//                 '</div>'
//             ]
//         }
//     ],
//     geoObjects= [];
//
// function init() {
//     var map = new ymaps.Map('map', {
//         center: [59.94, 30.32],
//         zoom: 12,
//         controls: ['zoomControl'],
//         behaviors: ['drag']
//     });
//
//     for (var i = 0; i < placemarks.length; i++) {
//         geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
//             {
//                 hintContent: placemarks[i].hintContent,
//                 balloonContent: placemarks[i].balloonContent.join('')
//             },
//             {
//                 iconLayout: 'default#image',
//                 iconImageHref: 'img/map-red.png',
//                 iconImageSize: [46, 57],
//                 iconImageOffset: [-23, -57],
//                 iconImageClipRect: [[415, 0], [461, 57]]
//             });
//     }
//
//     var clusterer = new ymaps.Clusterer({
//         clusterIcons: [
//             {
//                 href: 'img/map-mini.png',
//                 size: [100, 100],
//                 offset: [-50, -50]
//             }
//         ],
//         clusterIconContentLayout: null
//     });
//
//     map.geoObjects.add(clusterer);
//     clusterer.add(geoObjects);
// }

 // попытка 2
//     var placemark = new ymaps.Placemark([59.97, 30.31], {
//             hintContent: 'Лучшие бургеры',
//             balloonContent: [
//                 '<div id="map" class="map">',
//                 '<div class="rewiew">',
//                 '<div class="rewiew__place">',
//                 '<div class="location_adress">',
//                 'yrtcrbq 32 3335555',
//                 '</div>',
//                 '<img class="close" src="./img/close.png" alt="close"/>',
//                 '</div>',
//                 '<div class="rewiews__data">',
//                 '<textarea name="rewiew__text" id="" style="width:100%; height:120px;">',
//                    'Отзывов пока нет..',
//                 '</textarea>',
//                 '<div class="rewiew__inputs">',
//                 '<img src="./img/shape.png" alt=""/>',
//                 '<div class="rewiew__title">',
//                 'ваш отзыв',
//                '</div>',
//                 '<div class="rewiew__panel">',
//                 '<div class="panel__item1">',
//                 '<input type="text" class="rewiew__input name" placeholder="Ваше имя">',
//                 '</div>',
//                 '<div class="panel__item2">',
//                 '<input type="text" class="rewiew__input place" placeholder="Укажите место">',
//                 '</div>',
//                 '<div class="panel__item3">',
//                 '<input type="text" class="rewiew__input rewiew__text" placeholder="Поделитесь впечатлениями">',
//                 '</div>',
//                 '</div>',
//                 '</div>',
//                 '<button class="add__button">Добавить</button>',
//                 '</div>',
//                 '</div>',
//                 '</div>'
//             ].join('')
//         },
//         {
//             iconLayout: 'default#image',
//             iconImageHref: './img/map-grey.png',
//             iconImageSize: [43, 63],
//             iconImageOffset: [-23, -57]
//         });
//     map.geoObjects.add(placemark);
// }


// попытка 1

//
//     function place(geo1, geo2) {
//         let placeMark = new ymaps.Placemark([geo1, geo2], {  /*вместo geo coords?*/
//                 hintContent: 'Лучшие бургеры',
//                 balloonContent: 'наб. Pеки Карповки, 21'
//
//             },
//             {
//                 iconLayout: 'default#image',
//                 iconImageHref: './img/map-grey.png',
//                 iconImageSize: [43, 63],
//                 iconImageOffset: [-23, -57]
//             });
//         map.geoObjects.add(placeMark);
//     }
// }
//
// function place();
// // обьединение объектов в кластеры
//
// var coords = [
//     [55.75, 37.50],
//     [55.75, 37.71],
//     [55.70, 37.70]
// ];
// var myCollection = new ymaps.GeoObjectCollection({}, {
//     iconImageHref: './img/map-grey.png', //задала свой стиль
//     draggable: true // и их можно перемещать
// });
//
// for (var i = 0; i < coords.length; i++) {
//     myCollection.add(new ymaps.Placemark(coords[i]));
// }
//
// myMap.geoObjects.add(myCollection);
//
// // объединяющая иконка с числом меток
// var myGeoObjects = [];
//
// for (var i = 0; i < coords.length; i++) {
//     myGeoObjects[i] = new ymaps.GeoObject({
//             geometry: {
//             type: "Point",
//             coordinates: coords[i],
//             preset: 'islands#grayClusterIcons' //задала свой дизайн объединяющей иконки
//         }
//     });
// }
//
// var myClusterer = new ymaps.Clusterer();
// myClusterer.add(myGeoObjects);
// myMap.geoObjects.add(myClusterer);
//
// // появление информации о метках при щелчке
// var myGeoObjects = [];
//
// for (var i = 0; i < coords.length; i++) {
//     myGeoObjects[i] = new ymaps.GeoObject({
//         geometry: {
//             type: "Point",
//             coordinates: coords[i]
//         },
//         properties: {
//             clusterCaption: 'Геообъект № ' + (i + 1),
//             balloonContentBody: 'Текст балуна № ' + (i + 1)
//         }
//     });
// }
//
// var myClusterer = new ymaps.Clusterer(
//     {clusterDisableClickZoom: true}
// );
// myClusterer.add(myGeoObjects);
// myMap.geoObjects.add(myClusterer);
//
// // баллун карусель
//
// ymaps.ready(function () {
//     var mapCenter = [55.755381, 37.619044],
//         map = new ymaps.Map('map', {
//             center: mapCenter,
//             zoom: 9,
//             controls: []
//         });
//
//     // Создаем собственный макет с информацией о выбранном геообъекте.
//     var customItemContentLayout = ymaps.templateLayoutFactory.createClass(
//         // Флаг "raw" означает, что данные вставляют "как есть" без экранирования html.
//         '<h2 class=ballon_header>{{ properties.balloonContentHeader|raw }}</h2>' +
//         '<div class=ballon_body>{{ properties.balloonContentBody|raw }}</div>' +
//         '<div class=ballon_footer>{{ properties.balloonContentFooter|raw }}</div>'
//     );
//
//     var clusterer = new ymaps.Clusterer({
//         clusterDisableClickZoom: true,
//         clusterOpenBalloonOnClick: true,
//         // Устанавливаем стандартный макет балуна кластера "Карусель".
//         clusterBalloonContentLayout: 'cluster#balloonCarousel',
//         // Устанавливаем собственный макет.
//         clusterBalloonItemContentLayout: customItemContentLayout,
//         // Устанавливаем режим открытия балуна.
//         // В данном примере балун никогда не будет открываться в режиме панели.
//         clusterBalloonPanelMaxMapArea: 0,
//         // Устанавливаем размеры макета контента балуна (в пикселях).
//         clusterBalloonContentLayoutWidth: 200,
//         clusterBalloonContentLayoutHeight: 130,
//         // Устанавливаем максимальное количество элементов в нижней панели на одной странице
//         clusterBalloonPagerSize: 5
//         // Настройка внешнего вида нижней панели.
//         // Режим marker рекомендуется использовать с небольшим количеством элементов.
//         // clusterBalloonPagerType: 'marker',
//         // Можно отключить зацикливание списка при навигации при помощи боковых стрелок.
//         // clusterBalloonCycling: false,
//         // Можно отключить отображение меню навигации.
//         // clusterBalloonPagerVisible: false
//     });
//
//     // Заполняем кластер геообъектами со случайными позициями.
//     var placemarks = [];
//     for (var i = 0, l = 100; i < l; i++) {
//         var placemark = new ymaps.Placemark(getRandomPosition(), {
//             // Устаналиваем данные, которые будут отображаться в балуне.
//             balloonContentHeader: 'Метка №' + (i + 1),
//             balloonContentBody: getContentBody(i),
//             balloonContentFooter: 'Мацуо Басё'
//         });
//         placemarks.push(placemark);
//     }
//
//     clusterer.add(placemarks);
//     map.geoObjects.add(clusterer);
//
//
//     function getRandomPosition () {
//         return [
//             mapCenter[0] + (Math.random() * 0.3 - 0.15),
//             mapCenter[1] + (Math.random() * 0.5 - 0.25)
//         ];
//     }
//
//     var placemarkBodies;
//     function getContentBody (num) {
//         if (!placemarkBodies) {
//             placemarkBodies = [
//                 ['Слово скажу -', 'Леденеют губы.', 'Осенний вихрь!'].join('<br/>'),
//                 ['Вновь встают с земли', 'Опущенные дождем', 'Хризантем цветы.'].join('<br/>'),
//                 ['Ты свечу зажег.', 'Словно молнии проблеск,', 'В ладонях возник.'].join('<br/>')
//             ];
//         }
//         return '<br>' + placemarkBodies[num % placemarkBodies.length];
//     }
//     clusterer.balloon.open(clusterer.getClusters()[0]);
// });