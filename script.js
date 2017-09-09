$(document).ready(function() {
	$('.sidebar > .accordion').accordion();
	console.log($('.sidebar > .accordion').accordion());
	$('.sidebar > .accordion').accordion("refresh")
	$('.sidebar > .accordion').accordion({
    	selector: {
      		trigger: '.title .icon'
    	}
  	});

});