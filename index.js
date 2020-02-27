ymaps.ready(init);

function init() {
    var map = new ymaps.Map('map', {
        center: [55.75, 37.61],
        zoom: 11,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });
    var placemark = new ymaps.Placemark([55.76, 37.62], {
            hintContent: 'Лучшие бургеры',
            balloonContent: 'наб. Pеки Карповки, 21'

        },
        {
            iconLayout: 'default#image',
            iconImageHref: './img/map-grey.png',
            iconImageSize: [43, 63],
            iconImageOffset: [-23, -57]
        });
    map.geoObjects.add(placemark);
}

