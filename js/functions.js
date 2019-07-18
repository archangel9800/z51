$(document).ready(function () {

/* Sample function that returns boolean in case the browser is Internet Explorer*/
  
    
//function isIE() {
//  ua = navigator.userAgent;
//  /* MSIE used to detect old browsers and Trident used to newer ones*/
//  var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
//  return is_ie; 
//}
//    
///* Create an alert to show if the browser is IE or not */
//if (isIE()){
//    alert('It is InternetExplorer');
//}else{
//    alert('It is NOT InternetExplorer');
//}    
    

    
///.topSearch script start
$(".topSearch").on('mouseenter', function (e){;
    var element = $(this);
    $(document).mouseup(function (e){ 
        if (!element.is(e.target) && element.has(e.target).length === 0) { 
           $('.topSearch .offerSearchRes').removeClass('visibleBl');
        } else {
            $('.topSearch .offerSearchRes').addClass('visibleBl');
        }
    })
  });     
///.topSearch script end  
    
///#smSearch script start
function offerSearchResTopPos(){
    var firstTopLine = $('#firstTopLine');
    var firstNavLine = $('#firstNavLine');
    var smSearch = $('#smSearch');
    var offerSearchRes = $('#smSearch.topSearch .offerSearchRes');
    offerSearchRes.css({
       top: firstNavLine.position().top + firstTopLine.height() + 'px',
       left: smSearch.offset().left + 'px',
       width: smSearch.width() + 'px'
    });
};
if($(window).width() < 992) {
   offerSearchResTopPos(); 
};
$(window).resize(function(){  
    if($(window).width() < 992) {
        offerSearchResTopPos(); 
    };
}); 
$(window).scroll(function(){  
    if($(window).width() < 992) {
       offerSearchResTopPos(); 
    };
});  
$('header').scroll(function(){
    if($(window).width() < 992) {  
        offerSearchResTopPos();
        
    };
});    
///#smSearch script end      
    
    
///.sticky-top script start
    if($(window).width() < 992) {
       $('.sticky-top').css({
            top: 0+'px'
        }); 
    } else if($(window).width() >= 992) {
        $('.sticky-top').css({
            top: '-'+$('.sticky-top #firstNavLine').height()+'px'
        });
    };
    $(window).resize(function(){  
        if($(window).width() < 992) {
           $('.sticky-top').css({
                top: 0+'px'
            }); 
        } else if($(window).width() >= 992) {
            $('.sticky-top').css({
                top: '-'+$('.sticky-top #firstNavLine').height()+'px'
            });
        }; 
   });    
///.sticky-top script end  
    
 ///#callUsDropdown script start
    $("#callUsDropdown").on("click", function (event) {
        event.preventDefault();
        function DropDown(el) {
            this.dd = el;
            this.placeholder = this.dd.find('p > span');
            this.opts = this.dd.find('ul > li');
            this.val = '';
            this.index = -1;
            this.initEvents();
        }
        DropDown.prototype = {
            initEvents : function() {
                var obj = this;

                obj.opts.on('click',function(){
                    var opt = $(this).find('span');
                    obj.val = opt.html();
                    obj.index = opt.index();
                    obj.placeholder.html(obj.val); $(this).parents().find('#callUsDropdown').removeClass('visibleBl');
                });
                    
            },
            getValue : function() {
                return this.val;
            },
            getIndex : function() {
                return this.index;
            }
        }
        $(function() {
            var dd = new DropDown( $('#callUsDropdown') );  
        });
//            $(this).removeClass('visibleBl');
        
        
    });  
       ///#callUsDropdown script end 

    ///.mainMenuSecondaryDropdownWidth script start  
function mainMenuSecondaryDropdownWidth(){
   var secondaryDropdown = $('.cd-dropdown-wrapper .cd-dropdown-content .cd-secondary-dropdown');     
   var mainWidth = $('.mainWidth').width();      
   var menuWidth = $('.cd-dropdown-wrapper').width();  
    
    if (navigator.userAgent.search("Edge") >= 0 && $(window).width() >= 992) {
         secondaryDropdown.css({
           width: mainWidth - menuWidth
        }); 
    } else if (navigator.userAgent.search("Edge") >= 0 && $(window).width() < 992){
           secondaryDropdown.css({
           width: 100 + '%'
        });    
    } else{
           secondaryDropdown.css({
           maxWidth: mainWidth - menuWidth
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
    
    
    
    

    

//        $('.cssmenu li.active').addClass('open').children('ul').show();
//            $('.cssmenu li.has-sub>span').on('click', function(){
//                $(this).removeAttr('href');
//                var element = $(this).parent('li');
//                
//                $(document).mouseup(function (e){ 
//                    if (!element.is(e.target) && element.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
//                        element.removeClass('open');
//                        element.find('li').removeClass('open');
//                        element.find('ul').slideUp(200);
//                    }
//                })
//                if (element.hasClass('open')) {
//                    element.removeClass('open');
//                    element.find('li').removeClass('open');
//                    element.find('ul').slideUp(200);
//                }
//                else {
//                    element.addClass('open');
//                    element.children('ul').slideDown(200);
//                    element.siblings('li').children('ul').slideUp(200);
//                    element.siblings('li').removeClass('open');
//                    element.siblings('li').find('li').removeClass('open');
//                    element.siblings('li').find('ul').slideUp(200);
//                }
//            });

    $(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
        var block = $("#block"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
        if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
            && block.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
            block.hide(); // если условия выполняются - скрываем наш элемент
        }
    });


    
    

    
//.textLimit script start
  function textLimit(){  
    $(".textLimit").text(function(i, text) { 
      if (text.length >= $(this).attr('data-textSize')) {
        text = text.substring(0, $(this).attr('data-textSize'));
        var lastIndex = text.substr($(this).attr('data-textSize') - 3);
        text = text.slice(lastIndex) + '...';
      }
      $(this).text(text);
//      if (text.length >= 50) {
//        text = text.substring(0, 50);
//        var lastIndex = text.lastIndexOf(" ");
//        text = text.substring(0, lastIndex) + '...';
//      }
//      $(this).text(text);
    });
  }
  textLimit();
//.textLimit script end
    

//    $('aside .customZ51Checkbox > .dropdown-menu').click(function(e) {
//        e.stopPropagation();
//    });
//    $('aside .customZ51Checkbox > p').click(function(e) {
//        $('aside .customZ51Checkbox > [aria-expanded="false"]').parent().addClass('show');
//        $('aside .customZ51Checkbox > p').not(this).sibling().find('.dropdown-menu').addClass('show');
//        
//    });
    
    //aside .asideDropdown script start
    $('.customDrop > p').click(function(e) {
        $(this).parent().toggleClass('visibleBl');
    });
    $(document).mouseup(function (e){ 
        var block = $(".hideClickNotThisDrop");
        if (!block.is(e.target) && block.has(e.target).length === 0) { 
            block.removeClass('visibleBl');
        }
        
    });
    //aside .asideDropdown script end
    
    
    

       
//    var values= $( ".priceVal #buy_price" ).attr('value').split(', ')
//        $( "input[name=price_s]" ).val(  values[ 0 ] ); // выводим  значение от при запуске
//        $( "input[name=price_f]" ).val(  values[ 1 ] ); // выводим  значение до при запуске
//        $("#buy_price").slider({
//            range: true,
//            min: parseInt($( "#buy_price" ).attr('min')), // минимальное значение цены
//            max: parseInt($( "#buy_price" ).attr('max')), // максимальное значение цены
//            step: parseInt($( "#buy_price" ).attr('step')), // шаг слайдераs
//            values: $( "#buy_price" ).attr('value').split(', '),  // начальные значения - позиции ползунков на шкале
//            slide: function( event, ui ) {
//                $( "input[name=price_s]" ).val(  ui.values[ 0 ] ); // выводим  значение от при изменении
//                $( "input[name=price_f]" ).val(  ui.values[ 1 ] ); // выводим  значение до при изменении
//            }
//        });


//aside .priceVal script start 
   $("#priceLine").slider({});
//aside .priceVal script end  

    
 

    
});
 
    