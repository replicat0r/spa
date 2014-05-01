$(document).ready(function(){
	sudoSlider = $('#slider').sudoSlider({ 
	continuous:true, 
	numeric:false, 
	prevNext:true 
	}); 
	jQuery('a.lightbox').fancybox({ 
	'titlePosition'		: 'over', 
	'overlayColor'		: '#000', 
	'overlayOpacity'	: 0.9 
	});			
}); 

	