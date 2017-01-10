function main() {
	var colorSelected = '';
	$('#color-btns div').on('click', function(){
		$(this).toggleClass('not-selected');
		$(this).siblings().addClass('not-selected');
		var btnClass = $(this).attr('class');
		if (btnClass ===  'btn-cyan') {
			colorSelected = "color-cyan";
		} else if (btnClass ===  'btn-yellow') {
			colorSelected = "color-yellow";
		} else if (btnClass === 'btn-pink') {
			colorSelected = "color-pink";
		}
	});
	$('.dot').on('click', function(){
		var classes = $(this).prop('classList');
		for (var i=0; i<classes.length; i++) {
			if (classes[i] !== "dot" && classes[i] !== colorSelected) {
				$(this).removeClass(classes[i]);
			}
		}
		$(this).toggleClass(colorSelected);
		// $(this).toggleClass(colorSelected);
	});
	var blink = function() {
		$('.dots .dot').toggleClass('blink');
	}

    var intervalId = '';
    var blinking = false;
	$('.btn-blink').on('click', function() {
		if (blinking) {
			clearInterval(intervalId);
			blinking = false;
		} else {
			intervalId = setInterval(blink, 500);
			blinking = true;
		}

	});
}

$(document).ready(main);