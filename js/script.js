$(document).ready(function(){ 
    let gnbLi;
    gnbLi = $('#gnb > li');

    gnbLi.on('mouseenter focusin',function(){
        $('header').addClass('on');
        $('a.depth1').removeClass('current');
        $(this).children('a.depth1').addClass('current');
    })

    gnbLi.on('mouseleave focusout',function(){
        $('header').removeClass('on');
        $('.depth1').removeClass('current');
    })
})