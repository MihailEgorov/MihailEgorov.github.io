    	// Закрытие по клавише Esc.
    		$(document).keydown(function(e) {
    			if (e.keyCode === 27) {
    				e.stopPropagation();
    				$('.popup').fadeOut();
    			}
    		});
    	// Клик по фону, но не по окну.
    		$('.popup').click(function(e) {
    			if ($(e.target).closest('.popup__dialog').length == 0) {
    				$(this).fadeOut();					
    			}
    		});	