$(document).ready(function () {
	//Checkbox
	$.each($('.popup__form-pair-checkbox'), function (index, val) {
		if ($(this).find('input').prop('checked') == true) {
			$(this).addClass('active');
		}
	});
	$(document).on('click', '.popup__form-pair-checkbox', function (event) {
		if ($(this).hasClass('active')) {
			$(this).find('input').prop('checked', false);
		} else {
			$(this).find('input').prop('checked', true);
		}
		$(this).toggleClass('active');
		return false;
	});
	//Form placeholders
	$('#name, #email, #message').on('focus', function (e) {
		$(this).attr('placeholder', '');
	});
	$('#name, #email, #message').on('blur', function (e) {
		$('#name').attr('placeholder', 'Name / Company name');
		$('#email').attr('placeholder', 'Email');
		$('#message').attr('placeholder', 'Your message');
	});
	$('#name, #email, #message').on('keyup', function (e) {
		if ($(this).val() != '') {
			$(this).css({
				'border': '2px solid',
				'border-image': 'linear-gradient(90deg, #6bb86c 0%, #0c988d 100%)',
				'border-image-slice': '1'
			});
		} else {
			$(this).css({
				'border': '1px solid',
				'border-image': 'linear-gradient(90deg, #6bb86c 0%, #0c988d 100%)',
				'border-image-slice': '1'
			});
		}
	});
	//Map
	// Определяем переменную map
	var map;

	// Функция initMap которая отрисует карту на странице
	function initMap() {

		// В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
		map = new google.maps.Map(document.getElementById('map'), {
			// При создании объекта карты необходимо указать его свойства
			// center - определяем точку на которой карта будет центрироваться
			center: {lat: -34.397, lng: 150.644},
			// zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
			zoom: 8,
			styles: [
				{
					"featureType": "administrative",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#444444"
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "all",
					"stylers": [
						{
							"color": "#f2f2f2"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "all",
					"stylers": [
						{
							"saturation": -100
						},
						{
							"lightness": 45
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "simplified"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#ffffff"
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "transit",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "all",
					"stylers": [
						{
							"color": "#dde6e8"
						},
						{
							"visibility": "on"
						}
					]
				}
			]
		});
		// Создаем маркер на карте
var marker = new google.maps.Marker({

    // Определяем позицию маркера
    position: {lat: 55.760186, lng: 37.618711},

    // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
    map: map,

    // Пишем название маркера - появится если навести на него курсор и немного подождать
	title: 'Наш маркер: Большой театр',
	icon: '../img/map-tick.svg'
});
	}
});