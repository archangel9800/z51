$(document).ready(function () {

/* Sample function that returns boolean in case the browser is Internet Explorer*/
//function isIE() {
//  ua = navigator.userAgent;
//  /* MSIE used to detect old browsers and Trident used to newer ones*/
//  var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
//  return is_ie; 
//}
    
/* Create an alert to show if the browser is IE or not */
//if (isIE()){
//    alert('It is InternetExplorer');
//}else{
//    alert('It is NOT InternetExplorer');
//}    
    
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
            this.opts = this.dd.find('ul.dropdown-menu > li');
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
                    obj.placeholder.html(obj.val);
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
        
        
        
    });  
    ///#callUsDropdown script end
    
        ///.cssmenu script start
        $('.cssmenu li.active').addClass('open').children('ul').show();
            $('.cssmenu li.has-sub>span').on('click', function(){
                $(this).removeAttr('href');
                var element = $(this).parent('li');
                
                $(document).mouseup(function (e){ 
                    if (!element.is(e.target) && element.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
                        element.removeClass('open');
                        element.find('li').removeClass('open');
                        element.find('ul').slideUp(200);
                    }
                })
                if (element.hasClass('open')) {
                    element.removeClass('open');
                    element.find('li').removeClass('open');
                    element.find('ul').slideUp(200);
                }
                else {
                    element.addClass('open');
                    element.children('ul').slideDown(200);
                    element.siblings('li').children('ul').slideUp(200);
                    element.siblings('li').removeClass('open');
                    element.siblings('li').find('li').removeClass('open');
                    element.siblings('li').find('ul').slideUp(200);
                }
            });
    jQuery(function($){
    $(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
        var block = $("#block"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
        if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
            && block.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
            block.hide(); // если условия выполняются - скрываем наш элемент
        }
    });
});

    
    
    ///.cssmenu script  end
    
    
    ///jQuery.ellipsis script start
        /*!
     * jQuery.ellipsis
     * https://github.com/jjenzz/jquery.ellipsis
     * --------------------------------------------------------------------------
     * Copyright (c) 2013 J. Smith (@jjenzz)
     * Dual licensed under the MIT and GPL licenses:
     * https://www.opensource.org/licenses/mit-license.php
     * http://www.gnu.org/licenses/gpl.html
     *
     * adds a class to the last 'allowed' line of text so you can apply
     * text-overflow: ellipsis;
     */
    (function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)}else{a(jQuery)}}(function(d){var c="ellipsis",b='<span style="white-space: nowrap;">',e={lines:"auto",ellipClass:"ellip",responsive:false};function a(h,q){var m=this,w=0,g=[],k,p,i,f,j,n,s;m.$cont=d(h);m.opts=d.extend({},e,q);function o(){m.text=m.$cont.text();m.opts.ellipLineClass=m.opts.ellipClass+"-line";m.$el=d('<span class="'+m.opts.ellipClass+'" />');m.$el.text(m.text);m.$cont.empty().append(m.$el);t()}function t(){if(typeof m.opts.lines==="number"&&m.opts.lines<2){m.$el.addClass(m.opts.ellipLineClass);return}n=m.$cont.height();if(m.opts.lines==="auto"&&m.$el.prop("scrollHeight")<=n){return}if(!k){return}s=d.trim(m.text).split(/\s+/);m.$el.html(b+s.join("</span> "+b)+"</span>");m.$el.find("span").each(k);if(p!=null){u(p)}}function u(x){s[x]='<span class="'+m.opts.ellipLineClass+'">'+s[x];s.push("</span>");m.$el.html(s.join(" "))}if(m.opts.lines==="auto"){var r=function(y,A){var x=d(A),z=x.position().top;j=j||x.height();if(z===f){g[w].push(x)}else{f=z;w+=1;g[w]=[x]}if(z+j>n){p=y-g[w-1].length;return false}};k=r}if(typeof m.opts.lines==="number"&&m.opts.lines>1){var l=function(y,A){var x=d(A),z=x.position().top;if(z!==f){f=z;w+=1}if(w===m.opts.lines){p=y;return false}};k=l}if(m.opts.responsive){var v=function(){g=[];w=0;f=null;p=null;m.$el.html(m.text);clearTimeout(i);i=setTimeout(t,100)};d(window).on("resize."+c,v)}o()}d.fn[c]=function(f){return this.each(function(){try{d(this).data(c,(new a(this,f)))}catch(g){if(window.console){console.error(c+": "+g)}}})}}));

    $('.overflow').ellipsis();
    $('.one-line').ellipsis({ lines: 1 });
    $('.two-lines').ellipsis({ lines: 2 });
    $('.box--responsive').ellipsis({ responsive: true });
   ///jQuery.ellipsis script end
    
    

//    $('aside .customZ51Checkbox > .dropdown-menu').click(function(e) {
//        e.stopPropagation();
//    });
//    $('aside .customZ51Checkbox > p').click(function(e) {
//        $('aside .customZ51Checkbox > [aria-expanded="false"]').parent().addClass('show');
//        $('aside .customZ51Checkbox > p').not(this).sibling().find('.dropdown-menu').addClass('show');
//        
//    });
    //aside .asideDropdown script start
    $('aside .customZ51Checkbox > p').click(function(e) {
        $(this).parent().toggleClass('visible');
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
 
    