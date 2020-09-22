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
	function initMap() {
		var opt = {
			center: { lat: 59.196573, lng: 24.974172 },
			zoom: 8
		}

		var map = new google.maps.Map(document.getElementById('map'), opt);
	}
});