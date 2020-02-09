/**
 * js/functions.js
 * Copyright (c) ТОВ "Елпрофи", 2019 All rights reserved.
 * Шаблон разработали Левковец И.В., Броновицкий А.Н., 2019. archangel, b1te
 * 04.02.2020
 */


$(document).ready(function () {
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
  
///.sticky-top script start
    if($(window).width() < 992) {
       $('.sticky-top').css({
            top: 0+'px'
        }); 
    } else if($(window).width() >= 992) {
        $('.sticky-top').css({
            top: '-'+$('.sticky-top #firstNavLine').innerHeight()+'px'
        });
    };
    $(window).resize(function(){  
        if($(window).width() < 992) {
           $('.sticky-top').css({
                top: 0+'px'
            }); 
        } else if($(window).width() >= 992) {
            $('.sticky-top').css({
                top: '-'+$('.sticky-top #firstNavLine').innerHeight()+'px'
            });
        }; 
   });    
///.sticky-top script end  
  
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
        text = text.trim();
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
 
//aside .asideDropdown script start
$('.customDrop > p, .customDrop .dropItem').click(function(e) {
    $(this).parent().toggleClass('visibleBl');
});
$(document).mouseup(function (e){ 
    var block = $(".hideClickNotThisDrop");
    if (!block.is(e.target) && block.has(e.target).length === 0) { 
        block.removeClass('visibleBl');
    }
});
//aside .asideDropdown script end
    
//.showMore script start
//    простой скрипт на открытие соседних элементов(исп в фильтрах)
    $('.showMore').click(function(e) {
     $(this).siblings('.dispNone').removeClass('dispNone');
        $(this).addClass('dispNone');
    })
//.showMore script end
    
//.showAll script start
//    простой скрипт на открытие всех фильтров
    $('.openAllFilters').click(function(e) {
     $(this).siblings('.filterBlock').addClass('visibleBl');
     $(this).siblings('.filterBlock').find('.hiddenDrop li').removeClass('dispNone');
     $(this).siblings('.filterBlock').find('.hiddenDrop .showMore').addClass('dispNone');
     $(this).addClass('dispNone');
    })
//.showAll script end    
    
//.hidddenContInside .showMore script start
//    скрипт закрытия открытия контента вместе с соседними(используется в коментариях к товару)
$('.hidddenContInside .showCont').click(function(e) {
    var showClass = $(this).attr('data-visible');    
    $('.hidddenContInside [data-visible="'+showClass+'"]').removeClass('dispNone');
    $(showClass).addClass('dispNone');
    $(this).closest('.hidddenContInside').find(showClass).removeClass('dispNone'); 
    $(this).addClass('dispNone');
})
//.hidddenContInside .showMore script end    
 
//.switchBlock .switch script start
//    скрипт закрытия открытия контента по кнопке (используется для добавления коментариев и ворпросов к товару)
$('.switchBlock .switch').click(function(e) {
    $(this).closest('.switchBlock').find(".switch").removeClass('active'); 
   $(this).addClass('active');
    $(this).closest('.switchBlock').find(".switchCont").addClass('dispNone');
    var showClass = $(this).attr('data-switch');
    $(showClass).removeClass('dispNone');
})
//.switchBlock .switch script end   
  
//aside .filter-int.filter-slider script start
$(".filter-int.filter-slider .filter-slider-val").slider({});
var filter_slider_timer;
$(".filter-int.filter-slider .filter-slider-val").on("change", function (event) {
    clearTimeout(filter_slider_timer);
    if(event.value.newValue!=event.value.oldValue)
    {
        var fs_el = $(this).closest('.filter-slider');
        filter_slider_timer = setTimeout(function(fs_el){
            var f_plus = fs_el.attr('data-filter-plus-rwurl');
            var f_rw = fs_el.attr('data-filter-rwurl');
            window.location.href = f_plus.replace('@'+f_rw+'@', f_rw+event.value.newValue[0]+f_rw+event.value.newValue[1]);
        }, 1000, fs_el);
    }
});
$(".filter-int.filter-slider .filter-slider-min, .filter-int.filter-slider .filter-slider-max").on("change", function (event) {
    var fs_el = $(this).closest('.filter-slider');
    var sl_el = $('#filter-' + fs_el.attr('data-filter-rwurl') + '-val');
    sl_el.slider('setValue', [
        parseInt($('#filter-' + fs_el.attr('data-filter-rwurl') + '-min').val()),
        parseInt($('#filter-' + fs_el.attr('data-filter-rwurl') + '-max').val())
        ], true, true
    );
});
//aside .filter-int.filter-slider script end

///.btnNav script start 
    $(".btnNav").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('data-go');
    if (id == '#bodyNav'){
        var top = $(id).offset().top;
    } else if (id != '#bodyNav' && $(window).width() >= 992) {
        var top = $(id).offset().top - 56;
    } else if (id != '#bodyNav' && $(window).width() >= 576) {
        var top = $(id).offset().top - 46;
    } else if (id != '#bodyNav' && $(window).width() < 576) {
        var top = $(id).offset().top - 90;
    }     
        $('body,html').animate({scrollTop: top}, 500);
    });
//.btnNav script end   

///.swiperAnalog script start  
function goodsCarouselInit(){
  var swiper = new Swiper('.swiper-container.swiperAnalog', {
      slidesPerView: 5,
      spaceBetween: 20,
      loop: true,
      allowTouchMove: false,
      navigation: {
        nextEl: '.swiperAnalog .swiper-button-next',
        prevEl: '.swiperAnalog .swiper-button-prev',
      },
      breakpoints: {
        1360: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1040: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 1,
          spaceBetween: 0,
        }
      }
    });
 };
if($(window).width() >= 600) {
    goodsCarouselInit();
}    
$(window).resize(function(){  
   if($(window).width() >= 600) {
    goodsCarouselInit();
   }
});     
///.swiperAnalog script end   
    
///.swiperVideo script start  
function videoCarouselInit(){
  var swiper = new Swiper('.swiper-container.swiperVideo', {
    loop: true,
    allowTouchMove: false,
      navigation: {
        nextEl: '.swiperVideo .swiper-button-next',
        prevEl: '.swiperVideo .swiper-button-prev',
      }
    });
 };
videoCarouselInit();
///.swiperVideo script end    

///.swiperIndex script start     
var swiper = new Swiper('.swiper-container.swiperIndex', {
    centeredSlides: true,
    loop: true,
    allowTouchMove: false,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiperIndex .swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
});  
///.swiperIndex script end     
    
///.modals in home activation script start 
$(".modalbox").fancybox();
///.modals in home activation script end     
    
$(".modalbox").fancybox("#inSuccess");    
//     $('#inSuccess').fancybox().trigger('click'); 
    
    $( ".actionResults" ).click(function() {
//      $( ".icon-name" ).submit();
        setTimeout("$.fancybox.close('.resultsModals')", 1000);
        
    });
    
});

///.cookieAccept script start   
$('#cookiesAcceptButton').on("click", function () {
    $.cookie('cookies_accepted', 1, { path : '/' });
    $('.cookiesAccept').css({
        display: 'none'
    });
});
///.cookieAccept script end   

//discussion start
function discussionLike(id,action)
{
    $.post(CONF_SHOP_URL+'/index.php?ajax=yes&discussion_likes=yes', {did:id, action:action})
        .done(function(data)
        {
            if(data=='1')
            {
                $('#discussion'+(action<=0?'Dislikes':'Likes')+'Count'+id).html(+$('#discussion'+(action<=0?'Dislikes':'Likes')+'Count'+id).html()+1);
            }
        });
    return false;
}
if($('#discussionForm').length) {
    $('#discussionForm .rateit').bind('rated reset', function (e) {
        var ri = $(this);
        $('#discussionForm input[name="rating"]').val(ri.rateit('value'));
    });
}
//discussion end

//notify-stock start
$('.tmc .modalbox.notify').on("click", function (event) {
    var notify_stock_clicked = $(this);
    var id = notify_stock_clicked.closest('.tmc').attr('data-id');
    $('#inNotify input[name="id"]').val(id);
});

$('#inNotify .notifySubmit').on("click", function () {
    var notify_stock_submit = $(this);
    var id = $('#inNotify input[name="id"]').val();
    var post_data = {};
    post_data['id'] = id;
    post_data['notify_stock'] = $('#inNotify input[name="notify_stock"]').val();
    $.post(CONF_SHOP_URL + '/product.php?ajax=yes&ln=' + LN, post_data, function(data) {
        if(data.success)
        {
            var subscribed_label = $('#inNotify').attr('data-subscribed-label');
            $('.tmc[data-id="' + id + '"] .modalbox.notify').each(function() {
                var el = $('<div class="deliveryPickup m-0"><span class="d-flex justify-content-center"><span class="text-left">' + subscribed_label + '</span></span></div>').insertAfter( $(this) );
                $(this).remove();
                if(el.parents('.productComparison').length)
                {
                    el.closest('.priceBl').appendTo( el.closest('td') );
                }
            });
            $.fancybox.close();
        }
    }, 'json');
    return false;
});
//notify-stock end

//wish-list start
$('.tmc .wish, .tmc .toWish').on("click", function (event) {
    var wish_clicked = $(this);
    var a = wish_clicked.hasClass('active') ? 'delete' : 'add';
    var id = wish_clicked.closest('.tmc').attr('data-id');
    var post_data = {};
    post_data[a] = id;
    $.post(CONF_SHOP_URL + '/category.php?ajax=yes&ln=' + LN + '&wishes=yes', post_data, function(data) {
        if(data.success=='1')
        {
            $('.tmc[data-id="' + id + '"] .wish, .tmc[data-id="' + id + '"] .toWish').each(function() {
                $(this).toggleClass('active', a=='add');

                var opposite_label = $(this).attr('data-opposite-label');
                if($(this).hasClass('toWish'))
                {
                    var label_el = $(this).find('span').first();
                    $(this).attr('data-opposite-label', label_el.html());
                    label_el.html(opposite_label);
                }
                else
                {
                    $(this).attr('data-opposite-label', $(this).attr('title'));
                    $(this).attr('title', opposite_label);
                }
            });
            if(a=='delete')
            {
                $('.goods.wishList .tmc[data-id="' + id + '"]').each(function() {
                    $(this).closest('.goodWrap').remove();
                });
            }
        }
        $('header .wish-counter').each(function() {
            $(this).html(data.wishlist_count_total);
        });
    }, 'json');
});
//wish-list end

//comparison start
$('.tmc .comparison, .tmc .toComparison').on("click", function (event) {
    var comparison_clicked = $(this);
    var a = comparison_clicked.hasClass('active') ? 'delete' : 'add';
    var id = comparison_clicked.closest('.tmc').attr('data-id');
    var post_data = {};
    post_data[a] = id;
    $.post(CONF_SHOP_URL + '/category.php?ajax=yes&ln=' + LN + '&comparison=yes', post_data, function(data) {
        if(data.success=='1')
        {
            $('.tmc[data-id="' + id + '"] .comparison, .tmc[data-id="' + id + '"] .toComparison').each(function() {
                $(this).toggleClass('active', a=='add');

                var opposite_label = $(this).attr('data-opposite-label');
                if($(this).hasClass('toComparison'))
                {
                    var label_el = $(this).find('span').first();
                    $(this).attr('data-opposite-label', label_el.html());
                    label_el.html(opposite_label);
                }
                else
                {
                    $(this).attr('data-opposite-label', $(this).attr('title'));
                    $(this).attr('title', opposite_label);
                }
            });
            if(a=='delete')
            {
                $('.productComparison .tmc[data-id="' + id + '"]').each(function() {
                    $(this).remove();
                });
            }
        }
        $('header .comparison-counter').each(function() {
            $(this).html(data.comparison_count_total);
        });
    }, 'json');
});

$('.comparisonLink').on("click", function () {
    $.get(CONF_SHOP_URL + '/category.php?ajax=yes&ln=' + LN + '&comparison=yes&categories_list=yes', function(data) {
        $.fancybox.open({
            src : data,
            type : 'html',
            opts : {
                afterShow : function( instance, current ) {
                    $('#inComparison').css('display', 'inline-block');
                }
            }
        });
    });
    return false;
});
//comparison end

///.topSearch script start
var header_fast_search_timer;
$('.topSearch input').bind("keyup", function() {
    clearTimeout(header_fast_search_timer);
    if(this.value.length >= 3)
    {
        var v = this.value;
        header_fast_search_timer = setTimeout(function(v) {
            $.get({
                url: CONF_SHOP_URL + '/category.php',
                data: {ajax: 'yes', search: 'yes', term: v},
                response: 'json',
                success: function (data) {
                    data = JSON.parse(data);
                    var out = '';
                    $.each(data, function () {
                        out += '<li class="offerProduct">';
                        out += '<a class="d-flex align-items-center py-2 px-3" href="' + this.url + '">';
                        out += '<img src="' + this.picture + '" alt="' + this.label + '">';
                        out += '<div class="d-flex flex-wrap">';
                        out += '<span class="offerProductName col-12 pr-0 mb-1">' + this.label + '</span>';
                        out += '<div class="offerProductStatus col-12 pr-0">';
                        out += '<p class="m-0">Цена: <span class="mr-1">' + this.price + '</span>' + (this.date_income!='' ? (' ' + this.date_income) : '') + '</p>';
                        out += '</div></div></a></li>';
                    });
                    $('.topSearch .offerSearchRes').html(out).toggleClass('visibleBl', true);
                }
            });
        }, 500, v);
    }    
});
///.topSearch script end script


//shopping cart start
var shopping_cart_modify_timer;
function shopping_cart(action, post_data){
    if($.inArray(action, ['show', 'add', 'delete', 'modify', 'clear'])==-1)
        return false;
    clearTimeout(shopping_cart_modify_timer);
    var method = ((typeof post_data == 'undefined') || (action!='add' && action!='modify')) ? 'GET' : 'POST';
    $.ajax({
        type: method,
        url: CONF_SHOP_URL + '/cart.php?ajax=yes&ln=' + LN,
        data: post_data,
        success: function( data ) {

            $('.tmc .cartButton').not('.fancybox-content .tmc .cartButton').each(function() {
                var id = $(this).closest('.tmc').attr('data-id');
                var currently_in = $(this).hasClass('inCart');
                var new_in = false;
                var new_cnt = 0;
                for(k in data.tmc){
                    if(k==id)
                    {
                        new_in = true;
                        new_cnt = data.tmc[k];
                        break;
                    }
                }
                if(new_in != currently_in)
                {
                    $(this).toggleClass('inCart', new_in);

                    var opposite_label = $(this).attr('data-opposite-label');
                    $(this).attr('data-opposite-label', $(this).html());
                    $(this).html(opposite_label);
                }
            });

            $('header .cart-counter').each(function() {
                $(this).html(data.cart_cnt);
            });

            var fbox_instance = $.fancybox.getInstance();
            if(fbox_instance!==false)
            {
                fbox_instance.current.$slide.trigger('onReset'); //unload content
                fbox_instance.setContent(fbox_instance.current, data.html);
            }
            else
            {
                $.fancybox.open({
                    src : data.html,
                    type : 'html',
                    opts : {
                        afterShow : function( instance, current ) {
                            $('#inCart').css('display', 'inline-block');
                        }
                    }
                });
            }

            $('form#inCart input[type="number"]').stepper();
        },
        dataType: 'json'
    });
}
$('header .cart .modalbox').on("click", function (event) {
    if($('.cartStaticBlock').length)
        window.location.href = $(this).attr('href');
    else
        shopping_cart('show');
    return false;
});
$(document).ready(function(){
    //events of ajax loaded elements
    $('body').on('click', '.tmc .cartButton', function(event){
        if($('.cartStaticBlock').length)
            return true;
        var action = !$(this).hasClass('inCart') ? 'add' : 'delete';
        if(action=='delete' && !($(this).closest('#inCart').length)) //- delete only from cart itself
        {
            action = 'add';
        }
        var id = $(this).closest('.tmc').attr('data-id');
        shopping_cart(action, action!='delete' ? {
            addtocart: id,
            addtocart_cnt: 1
        } : {
            delete_product: id
        });
        return false;
    });
    $('body').on('click', '.modals#inCart .clearCart', function(event){
        if($('.cartStaticBlock').length)
            return true;
        shopping_cart('clear', {
            clear: 'yes'
        });
        return false;
    });
    $('body').on('change keyup', 'form#inCart input[type="number"]', function(event){
        clearTimeout(shopping_cart_modify_timer);
        if($('.cartStaticBlock').length)
            return true;
        shopping_cart_modify_timer = setTimeout(function() {
            var post_data = $('form#inCart').serialize();
            shopping_cart('modify', post_data);
        }, 2000);
        $('form#inCart .checkout').first().removeAttr('href').toggleClass('checkout-disabled', true);
        return false;
    });
});
//shopping cart end

//order confirmation start
if (!Number.toFixed) {
    Number.prototype.toFixed = function(n){
        return Math.round(this*Math.pow(10, n)) / Math.pow(10, n);
    }
}
function format_price(n)
{
    n = '' + n.toFixed(2);
    n = n.replace(/^([\-]?[0-9]+)$/gi, '$1.00');
    return n = n.replace(/^([\-]?[0-9]+\.[0-9])$/gi, '$1' + '0');
}
function showRegion(rid)
{
    for(var q in regionsList)
        if(regionsList[q].rid==rid)
        {
            $('#shipping_city_region').html(regionsList[q].label);
            break;
        }
    return false;
}
function regionOnChange()
{
    if($('#shipping_region').val()!=prev_region)
    {
        prev_region=$('#shipping_region').val();
        $.get(CONF_SHOP_URL+'/order.php',{type:'city',rid:$('#shipping_region').val(),ajax:'yes'},function(data){
            citiesList=data;

            $el = $('#shipping_city');
            $el.empty(); // remove old options
            for(var q in citiesList)
                $el.append($('<option></option>')
                    .attr('value', citiesList[q].cid).text(citiesList[q].label));
            cityOnChange();
        },'json');
    }
    return false;
}
function cityOnChange()
{
    cid=$('#shipping_city').val();
    if(cid!=prev_city)
    {
        prev_city=cid;
        for(var q in citiesList)
            if(citiesList[q]['cid']==cid)
            {
                pool1=citiesList[q]['pool1'];
                pool2=citiesList[q]['pool2'];
                activateShippingModules(citiesList[q]['cid'],citiesList[q]['modules'],citiesList[q]['novaposhta_available'],citiesList[q]['meestexpress_available']);
                calculateComission($('#payment_module').val());
                break;
            }
    }
    return false;
}
function activateShippingModules(cid,m,novaposhta_available,meestexpress_available)
{
    $('#shipping_module option').each(function(){
        if(true/*cid!=1 && cid!=611 && cid!=1011 && cid!=1176*/)
        {
            if($(this).val()!=2 && $(this).val()!=3 && $(this).val()!=4)
            {
                active=false;
                for(q in m)
                    active=active || m[q]==$(this).val();
                if($(this).val()==8)
                {
                    $('#shipping_stock_delivery').toggleClass('dispNone',!active);
                    $('label[for="shipping_stock_delivery"]').toggle(active);
                    $('#shipping_door_delivery').prop('disabled',!active && novaposhta_available);
                    $('#shipping_door_delivery').prop('checked',!active && novaposhta_available);
                    $('#shipping_stock_delivery').prop('checked',active);
                    if(!active && novaposhta_available)
                        active=true;
                }
                $(this).prop('disabled',!active)
            }
            else
                $(this).prop('disabled',(cid==1 || cid==611 || cid==1011 || cid==1176?($(this).val()!=2 && $(this).val()!=4):$(this).val()!=4))
        }
        else
            $(this).prop('disabled',$(this).val()>2)
    });
    $('#shipping_module option').each(function(){
        if(!$(this).prop('disabled'))
        {
            toggleDesc('sh',$(this).val());
            $('#shipping_module').val($(this).val());
            activateShippingAddress($(this).val());
            calculateShipment($(this).val());
            activatePaymentModules($(this).val());
            return false;
        }
    });
    return false;
}
function calculateShipment(id)
{
    $('#shipment14803').toggleClass('dispNone',id!='2'/* || (id=='2' && orderPricing['order_cart_price']>=2500)*/);
    /*$('#shipment17429').toggleClass('dispNone',id!='10'@@@@@ || (id=='10' && $('#shipping_door_delivery').prop('checked'))@@@@@);*/
    /*$('#shipment17558').toggleClass('dispNone',id!='10' || (id=='10' && !$('#shipping_door_delivery').prop('checked')));*/
    $('#shipment18799').toggleClass('dispNone',id!='8');
    calculateComission($('#payment_module').val());
}
function toggleDesc(type,id)
{
    $('#'+(type=='sh'?'shipping':'payment')+'_module option').each(function(){
        $('#'+type+'Desc'+$(this).val()).toggleClass('dispNone',$(this).val()!=id);
    });
    /*if(type=='sh')
    {
        region=$('#shipping_city_region').html();
        colorados=region=='АР Крым' || region=='Донецкая область' || region=='Луганская область';
        $('#'+type+'Colorados8').toggleClass('dispNone',id!='8' || !colorados);
        $('#'+type+'Colorados10').toggleClass('dispNone',id!='10' || !colorados);
    }*/
    if(type=='py')
    {
        $('#pyCreditMonths').toggleClass('dispNone',id!='14' && id!='15' && id!='16');
        $('#pyCreditINN').toggleClass('dispNone',id!='13' && id!='14' && id!='15' && id!='16');
        $('#pyCreditDOB').toggleClass('dispNone',id!='15');
        $('#pyCreditPassSerial').toggleClass('dispNone',id!='16');
        $('#pyCreditPassIssuer').toggleClass('dispNone',id!='16');
        $('#pyCreditPassDateIssued').toggleClass('dispNone',id!='16');
        $('#pyCreditAddressRegistered').toggleClass('dispNone',id!='16');
        $('#pyCreditAddress').toggleClass('dispNone',id!='15' && id!='16');
        $('label[for="credit_address"] span').each(function(){
            $(this).toggleClass('dispNone',id=='16');
        });
        $('#pyCreditConfirmation').toggleClass('dispNone',id!='15' && id!='16');
        $('label[for="shipping_F"] span, label[for="shipping_O"] span').each(function(){
            $(this).toggleClass('dispNone',id!='7' && id!='13' && id!='14' && id!='15' && id!='16');
        });
        $('#shipping_F, #shipping_O').prop('required',id=='7' || id=='13' || id=='14' || id=='15' || id=='16');
    }
    return false;
}
function activateShippingAddress(id)
{
    $('#shAddress').toggleClass('dispNone',id!=2 && id!=3 && id!=4);
    $('#shAddressZip').toggleClass('dispNone',id!=4);
    $('#shDesc2ChairsSpec').toggleClass('dispNone',order_chairs_delivery!==1 || id!=2 || $('#shipping_city').val()!=="1"/*Киев*/);
    $('#shAddressChairs').toggleClass('dispNone',order_chairs_delivery!==1 || id!=2 || $('#shipping_city').val()!=="1"/*Киев*/);
    $('#shDoorDelivery').toggleClass('dispNone',id!=8);
    if(id!=2 && id!=3 && id!=4)
        $.get(CONF_SHOP_URL+'/order.php',{stock:'yes',type:'stock',mid:id,cid:$('#shipping_city').val(),ajax:'yes'},function(data){
            $('#shStock').html(data);
        });
    $('#shAddressMeest').toggleClass('dispNone',id!=8 || !$('#shipping_door_delivery').prop('checked'));
    $('#shStock').toggleClass('dispNone',id==2 || id==3 || id==4 || (id==8 && !$('#shipping_stock_delivery').prop('checked')));
    return false;
}
function toggleDoorDelivery(door)
{
    $('#shipping_stock_delivery').prop('checked',!door);
    $('#shipping_door_delivery').prop('checked',door);
    $('#shStock').toggleClass('dispNone',door);
    $('#shAddressMeest').toggleClass('dispNone',!door);
    calculateShipment($('#shipping_module').val());
}
function activatePaymentModules(id)
{
    $('#payment_module option[value=10]').prop('disabled',id!=1 && id!=2 && id!=3 && id!=8/* && id!=10*/);
    //$('#payment_module option[value=8]').prop('disabled',/*true NALOJ*/id!=8 && id!=10);
    $('#payment_module option[value=15]').prop('disabled',id!=1 && id!=2 && id!=3 && id!=10);
    $('#payment_module option[value=16]').prop('disabled',id!=1 && id!=2 && id!=3 && id!=8);
    if((($('#payment_module').val()==10 || $('#payment_module').val()==null) && id!=1 && id!=2 && id!=3 && id!=8/* && id!=10*/)/* || ($('#payment_module').val()==8@@@@@ @@@@@ && id!=8 && id!=10@@@@@ NALOJ@@@@@)*/ || ($('#payment_module').val()==15 && id!=1 && id!=2 && id!=3 && id!=10) || ($('#payment_module').val()==16 && id!=1 && id!=2 && id!=3 && id!=8))
        $('#payment_module option').each(function(){
            if(!$(this).prop('disabled'))
            {
                toggleDesc('py',$(this).val());
                $('#payment_module').val($(this).val());
                return false;
            }
        });
    return false;
}
function calculateComission(id)
{
    //c=(id==7?0.027:(id==11?0.02:(id==12?0.01:0)));
    c=(id==7?0:(id==11?0.02:(id==12?0.01:0)));
    for(q=0;q<orderPricing['base_model'].length;q++)
    {
        price=orderPricing['base_model'][q]['price']+orderPricing['base_model'][q]['price']*c;
        $('#bm'+orderPricing['base_model'][q]['id']+'Price').html(format_price(price));
        $('#bm'+orderPricing['base_model'][q]['id']+'Summ').html(format_price(price*orderPricing['base_model'][q]['cnt']));
    }
    for(q=0;q<orderPricing['tmc'].length;q++)
    {
        price=orderPricing['tmc'][q]['price']+orderPricing['tmc'][q]['price']*c;
        $('#tmc'+orderPricing['tmc'][q]['id']+'Price').html(format_price(price));
        $('#tmc'+orderPricing['tmc'][q]['id']+'Summ').html(format_price(price*orderPricing['tmc'][q]['cnt']));
    }
    price14803=order_chairs_delivery===1?100:50/*+40*c*/;
    $('#tmc14803Summ').html(orderPricing['order_cart_price']<2500 || order_chairs_delivery===1?format_price(price14803)+' грн.':'Бесплатно');
    /*--v1
    price17429v=$('#shipping_door_delivery').prop('checked')?(pool2?29:39):0;
    price17429d=price17429v+16.25+(orderPricing['order_cart_price']<=400?2:(orderPricing['order_cart_price']<=5000?orderPricing['order_cart_price']*0.005:(orderPricing['order_cart_price']<=10000?orderPricing['order_cart_price']*0.006:(orderPricing['order_cart_price']<=20000?orderPricing['order_cart_price']*0.008:orderPricing['order_cart_price']*0.02))));
    price17429n=$('#payment_module').val()==8?(orderPricing['order_cart_price']<=480?10:orderPricing['order_cart_price']*0.021):0;
    price17429=price17429d+price17429n@@@@@+price17429v+price17429*c@@@@@;
    --v1*/
    /*--v2
    price17429=$('#shipping_door_delivery').prop('checked')?50:((orderPricing['order_cart_price']>=1000 && $('#payment_module').val()!=8)?0:35);
    --v2*/
    /*//--v3 20150522
    price17429=$('#shipping_door_delivery').prop('checked')?50:25;
    //--v3 20150522*/
    /*$('#tmc17429d').html(format_price(price17429d));
    //$('#tmc17429v').html(format_price(price17429v));
    $('#tmc17429n').html(format_price(price17429n));*/
    /*$('#tmc17429Summ').html(format_price(price17429)); //v3*/
    /*price17558=60 +60*c;
    $('#tmc17558Summ').html(format_price(price17558));*/
    /*--v2
    price18799d=(25+(false?25:0)+(pool1?20:0))*(!$('#shColorados8').hasClass('dispNone')?1.05:1);
    price18799c=orderPricing['order_cart_price']>500?orderPricing['order_cart_price']*0.005*(!$('#shColorados8').hasClass('dispNone')?1.05:1):0;
    price18799n=$('#payment_module').val()==8?(20+(orderPricing['order_cart_price']*0.02))*(!$('#shColorados8').hasClass('dispNone')?1.05:1):0;
    price18799=price18799d+price18799c+price18799n@@@@@+price18799*c@@@@@;
    --v2*/
    //--v3 20150522
    //price18799=$('#shipping_door_delivery').prop('checked')?50:35;
    //--v3 20150522
    //--v4 20171204
    price18799=order_chairs_delivery===1?($('#shipping_door_delivery').prop('checked')?150:0):50;
    //--v4 20171204
    /*$('#tmc18799d').html(format_price(price18799d));
    $('#tmc18799c').html(format_price(price18799c));
    $('#tmc18799n').html(format_price(price18799n));*/
    $('#tmc18799Summ').html(format_price(price18799));
    shipping_price=($('#shipping_module').val()==2 && (orderPricing['order_cart_price']<2500 || order_chairs_delivery===1)?price14803:($('#shipping_module').val()==8?price18799:/*($('#shipping_module').val()==10?@@@@@(!$('#shipping_door_delivery').prop('checked')?@@@@@price17429@@@@@:price17558)@@@@@:0)*/0));
    $('#orderSubTotal').html(format_price(orderPricing['order_cart_price']+orderPricing['order_cart_price']*c+shipping_price));
    discount=$('#spend_bonuses').prop('checked')?orderPricing['bonuses_summary']/100:0;
    discount=discount>(orderPricing['order_price']+orderPricing['order_price']*c+shipping_price)?orderPricing['order_price']+orderPricing['order_price']*c+shipping_price:discount;
    $('#orderDiscount').html(format_price(discount));
    orderTotal=orderPricing['order_price']+orderPricing['order_price']*c+shipping_price-discount;
    $('#orderTotal').html(format_price(orderTotal));
    credit_months=$('#credit_months').val();
    $('#creditPrice').toggleClass('dispNone',id!='13' && id!='14' && id!='15' && id!='16');
    $('#creditPrice span').filter(':first').html(format_price((orderTotal*(credit_months==3?1.117:(credit_months==6?1.234:(credit_months==10?1.39:1))))/credit_months/*@@@@@id==13?((orderTotal/4)+20):@@@@@(id==14?((orderTotal+20*credit_months+0.025*orderTotal*(credit_months-4))/credit_months):0)*/));
}
if($('#orderConfirmationForm').length){

    $( document ).ready(function() {
        $('#shipping_street_text').autocomplete({
            appendTo:'#orderConfirmationForm',
            minLength:3,
            delay:500,
            search:function(event,ui){
                $('#shipping_street_uuid').val('');
                $('#shipping_street_text').autocomplete('option','source',CONF_SHOP_URL+'/order.php?ajax=yes&type=novastreet&cid='+$('#shipping_city').val());
                //return false;
            },
            select:function(event,ui){
                $('#shipping_street_uuid').val(ui.item.uuid);
                $('#shipping_street_text').val(ui.item.label);
                return false;
            }
        });

        //this should be last
        calculateComission($('#payment_module').val());
    });


}
//order confirmation end

///.deliveryTime script start
if($('.deliveryTime')){
    var remain_bv = $('.deliveryTime #toTime').attr("data-time") - $('.deliveryTime #thisTime').attr("data-time");
    
    function parseTime_bv(timestamp){
        if (timestamp < 0) timestamp = 0;
        var day = Math.floor((timestamp/60/60) / 24);
        var hour = Math.floor(timestamp/60/60);
        var mins = Math.floor((timestamp - hour*60*60)/60);
        var secs = Math.floor(timestamp - hour*60*60 - mins*60); 
        var left_hour = Math.floor( (timestamp - day*24*60*60) / 60 / 60 );
        $('span.afss_hours_bv').text(left_hour);
        if(String(mins).length > 1)
            $('span.afss_mins_bv').text(mins);
        else
            $('span.afss_mins_bv').text("0" + mins);
        if(String(secs).length > 1)
            $('span.afss_secs_bv').text(secs);
        else
            $('span.afss_secs_bv').text("0" + secs);
    }

    setInterval(function(){
        if (remain_bv>0){
            remain_bv = remain_bv - 1;
            parseTime_bv(remain_bv);
        }
    }, 1000);
}
///.deliveryTime script end

///.mainNavBtn script start 
function mainNavBtn(){
    if($(window).height()*1.5 < $('.mainNavBtn').offset().top) {
       $('.mainNavBtn').css({
          opacity: 1,
          bottom: '8px'    
       });
    } else{
        $('.mainNavBtn').css({
          opacity: 0,
          bottom: '-40px'   
       });
    };  
}
if($(window).width() > 768){
    mainNavBtn();
} 
$(window).scroll(function(){  
    if($(window).width() > 768){
        mainNavBtn();
    } 
});
///.mainNavBtn script end

///characteristics discussion scroll script start 
if(ON_LOAD_FOCUS_ELEMENT!=''){
    $( document ).ready(function() {
        var el  = $(ON_LOAD_FOCUS_ELEMENT),
            h_el  = $('header.sticky-top').first(),
            top = $(el).offset().top - $(h_el).height();
        $('body,html').animate({scrollTop: top}, 500);
    });
}
///characteristics discussion scroll script end