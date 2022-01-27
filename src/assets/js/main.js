$(document).ready(function() {
    "use strict";

    var map = L.map('mapa', {fadeAnimation: false, zoomAnimation: false,markerZoomAnimation: false})
                    .setView([19.2120532, -99.580949], 8);
    map.dragging.disable();
    map.touchZoom.disable();
    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();
    map.boxZoom.disable();
    //map.keyboard.disable();
    if (map.tap) map.tap.disable();
    document.getElementById('mapa').style.cursor='default';



    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([19.261686, -99.5908767]).addTo(map).bindPopup('<div class="info_content">' +
        '<h3>Gabriel Oscar Vázque Pimentel</h3>' +
        '<p>Cerca de Hacienda la Quemada 515, San Jose la Pila, 52149 Metepec, Méx. Tel. 5554711985</p>' + '</div>');
    L.marker([19.2586849, -99.5736006]).addTo(map).bindPopup('<div class="info_content">' +
        '<h3>"Clínica Veterinaria Animal Place"</h3>' +
        '<p>Paseo la Asunción 536, Col. Bellavista, Metepec Casi esquina con Adolfo López Mateos. Tel 722 271 60 08</p>' +
        '</div>');
    L.marker([18.3443904, -99.6002441]).addTo(map).bindPopup('<div class="info_content">' +
        '<h3>Mario González</h3>' +
        '<p>Tel.  7331058297</p>' +
        '</div>');
    L.marker([19.3077765, -99.4050096]).addTo(map).bindPopup('<div class="info_content">' +
        '<h3>Oscar Guerra</h3>' +
        '<p>Tel. 7222676170</p>' +
        '</div>');
    L.marker([19.5089255, -98.9212414]).addTo(map).bindPopup('<div class="info_content">' +
        '<h3>Felipe Mena</h3>' +
        '<p>Tel. 5548043071</p>' +
        '</div>');
    L.marker([19.3772964, -99.7662726]).addTo(map).bindPopup('<div class="info_content">' +
        '<h3>Elda Alicia Malvaez</h3>' +
        '<p>Tel. 7227707253 y 7224674879</p>' +
        '</div>');
    L.marker([19.2120532, -99.580949]).addTo(map).bindPopup('<div class="info_content">' +
        '<h3>Campo de Adiestramiento Canino "La Roca"</h3>' +
        '<p>Iram Lievanos. Tel 7222093749</p>' +
        '</div>')

    //Sliders
    $("#owl-example").owlCarousel({
        items: 5, //10 items above 1000px browser width
        itemsDesktop: [1600, 4], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 4], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 0
        itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option);
        lazyLoad: true,
        navigation: false
    });
    //Animación cuenta regresiva
    $('.cuenta-regresiva').countdown('2022/11/03 09:00:00',function(event){
        $('#dias').html(event.strftime('%D'));
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));
    });
})

