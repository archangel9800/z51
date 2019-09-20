jQuery(document).ready(function($){
	//open/close mega-navigation
	$('.cd-dropdown-trigger').on('click', function(event){
		event.preventDefault();
		toggleNav();
	});

	//close meganavigation
	$('.cd-dropdown .cd-close').on('click', function(event){
		event.preventDefault();
		toggleNav();
	});

//	//on mobile - open submenu
//	$('.has-children').children('a').on('click', function(event){
//		//prevent default clicking on direct children of .has-children 
//		event.preventDefault();
//		var selected = $(this);
//		selected.next('ul').removeClass('is-hidden').end().parent('.has-children').parent('ul').addClass('move-out');
//	});  
    
//open submenu
$('.has-children .has-children .has-children').children('a').on('click', function(event){
    var selected = $(this);
    selected.next('ul').removeClass('is-hidden').end().parent('.has-children').parent('ul').addClass('move-out');
    return false;
});

//on mobile - open submenu
function openSubmenuMobile () {
    $('.has-children').children('a').on('click', function(event){
        var selected = $(this);
        selected.next('ul').removeClass('is-hidden').end().parent('.has-children').parent('ul').addClass('move-out');
        if($(window).width() < 992) {
            return false; 
        };
        
    }); 
};
if($(window).width() < 992) {
        openSubmenuMobile(); 
    };
$(window).resize(function(){  
    if($(window).width() < 992) {
        openSubmenuMobile(); 
    };
});

    

	//on desktop - differentiate between a user trying to hover over a dropdown item vs trying to navigate into a submenu's contents
	var submenuDirection = ( !$('.cd-dropdown-wrapper').hasClass('open-to-left') ) ? 'right' : 'left';
	$('.cd-dropdown-content').menuAim({
        activate: function(row) {
        	$(row).children().addClass('is-active').removeClass('fade-out');
        	if( $('.cd-dropdown-content .fade-in').length == 0 ) $(row).children('ul').addClass('fade-in');
        },
        deactivate: function(row) {
        	$(row).children().removeClass('is-active');
        	if( $('li.has-children:hover').length == 0 || $('li.has-children:hover').is($(row)) ) {
        		$('.cd-dropdown-content').find('.fade-in').removeClass('fade-in');
        		$(row).children('ul').addClass('fade-out')
        	}
        },
        exitMenu: function() {
        	$('.cd-dropdown-content').find('.is-active').removeClass('is-active');
        	return true;
        },
        submenuDirection: submenuDirection,
    });

	//submenu items - go back link
	$('.go-back').on('click', function(){
		var selected = $(this),
			visibleNav = $(this).parent('ul').parent('.has-children').parent('ul');
		selected.parent('ul').addClass('is-hidden').parent('.has-children').parent('ul').removeClass('move-out');
	}); 

	function toggleNav(){
		var navIsVisible = ( !$('.cd-dropdown').hasClass('dropdown-is-active') ) ? true : false;
		$('.cd-dropdown').toggleClass('dropdown-is-active', navIsVisible);
		$('.cd-dropdown-trigger').toggleClass('dropdown-is-active', navIsVisible);
		if( !navIsVisible ) {
			$('.cd-dropdown').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('.has-children ul').addClass('is-hidden');
				$('.move-out').removeClass('move-out');
				$('.is-active').removeClass('is-active');
			});	
		}
	}

	//IE9 placeholder fallback
	//credits http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
	if(!Modernizr.input.placeholder){
		$('[placeholder]').focus(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
		  	}
		}).blur(function() {
		 	var input = $(this);
		  	if (input.val() == '' || input.val() == input.attr('placeholder')) {
				input.val(input.attr('placeholder'));
		  	}
		}).blur();
		$('[placeholder]').parents('form').submit(function() {
		  	$(this).find('[placeholder]').each(function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
			 		input.val('');
				}
		  	})
		});
	}
});


//body scrool tabu when menu open in nobile
$(".cd-dropdown-wrapper .cd-dropdown-trigger").on("click", function () {
    if($(window).width() < 992) {
       $('body').toggleClass('overflowHidden');
    }
})

$(".cd-dropdown-wrapper .cd-close").on("click", function () {
    if($(window).width() < 992 && $('.cd-dropdown-trigger').hasClass('dropdown-is-active')) {
       $('body').toggleClass('overflowHidden');
    }
})
$(window).resize(function(){  
    if($(window).width() >= 992) {
       $('body').removeClass('overflowHidden');
    } else if($(window).width() < 992 && $('.cd-dropdown-trigger').hasClass('dropdown-is-active')) {
       $('body').addClass('overflowHidden');
    } 
        $(".cd-dropdown-wrapper .cd-dropdown-content").removeClass('move-out');
        $(".cd-dropdown-wrapper .cd-dropdown-content .has-children > ul").addClass('is-hidden');
        $(".cd-dropdown-wrapper .cd-dropdown-content .has-children > ul").removeClass('is-active'); 
})
//body scrool tabu when menu open in nobile
    

///.mainMenuSecondaryDropdownWidth script start  
    function mainMenuSecondaryDropdownWidth(){
   var secondaryDropdown = $('.cd-dropdown-wrapper .cd-dropdown-content .desktopDropdown .cd-secondary-dropdown');     
   var mainWidth = $('.mainWidth').width();      
   var menuWidth = $('.cd-dropdown-wrapper').width();
    if (navigator.userAgent.search("Edge") >= 0 && $(window).width() >= 992) {
         secondaryDropdown.css({
           width: mainWidth - menuWidth
        }); 
    } else if (navigator.userAgent.search("Edge") >= 0 && $(window).width() < 992){
           secondaryDropdown.css({
           width: mainWidth
        });    
    } else if (navigator.userAgent.search("Edge") < 0 && $(window).width() >= 992){
           secondaryDropdown.css({
           maxWidth: mainWidth - menuWidth
        });    
    }else if (navigator.userAgent.search("Edge") < 0 && $(window).width() < 992){
           secondaryDropdown.css({
           maxWidth: mainWidth
        });    
    }
    };
    mainMenuSecondaryDropdownWidth(); 
    $(window).resize(function(){  
        mainMenuSecondaryDropdownWidth();
    });   
    $(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
        var block = $(".cd-dropdown-wrapper").children(); 
        if (!block.is(e.target) && block.has(e.target).length === 0) { 
            $('.cd-dropdown-wrapper .cd-dropdown').removeClass('dropdown-is-active');
            $('.cd-dropdown-wrapper .cd-dropdown-trigger').removeClass('dropdown-is-active');
            $('.cd-dropdown-wrapper .cd-dropdown-content').removeClass('move-out');
        }
    }); 
///.mainMenuSecondaryDropdownWidth script end     
    
