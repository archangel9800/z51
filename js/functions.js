$(document).ready(function () {
	
 
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
            
            
            $("#callUsDropdown .dropdown-menu li").click(function() {
            });
        });
        
        
        
    });  
    ///#callUsDropdown script end
    
        ///.cssmenu script start
        $('.cssmenu li.active').addClass('open').children('ul').show();
            $('.cssmenu li.has-sub>span').on('click', function(){
                $(this).removeAttr('href');
                var element = $(this).parent('li');
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
    
    
    //aside .asideDropdown script start
    $('.asideDropdown').click(function(e) {
        e.stopPropagation();
    });
    //aside .asideDropdown script start
    
    
    
    //#stickySm script start    
    function stickySm(){
        $("#stickySm").height($('#stickySm header').height());
        $(window).scroll(function () { 
            var top = $("#stickySm header").scrollTop();
            if ($(this).scrollTop() > top) {
                $('#stickySm header').addClass('sticky-menu');
            } else if ($(this).scrollTop() <= top) {
                $('#stickySm header').removeClass('sticky-menu');
            }

        });
    };
    //#stickyLg script end
    //#stickyLg script start    
    function stickyLg(){
        $("#stickyLg").height($('#stickyLg .stickyLgwrap').height());
        $(window).scroll(function () {
            
            var top = $("#noSticky").outerHeight();
            if ($(this).scrollTop() > top) {
                $('#stickyLg .stickyLgwrap').addClass('sticky-menu');
            } else if ($(this).scrollTop() <= top) {
                $('#stickyLg .stickyLgwrap').removeClass('sticky-menu');
            }
            
        });
    };
    //#stickyLg script end    
    
    
    if($(window).width() < 992) {
        stickySm();
    } else if($(window).width() >= 992) {
        stickyLg();
    };
    
    $(window).resize(function(){
        
        $("#stickySm").height($('#stickySm header').height());
        $("#stickyLg").height($('#stickyLg .stickyLgwrap').height());
        
        if($(window).width() < 992) {
            stickySm();
        } else if($(window).width() >= 992) {
            stickyLg();
        }
    });

    
    
    
    
});
 
    