$(document).ready(function () {
    $('.nav-bar .menu > li > a').click(function () {
        $('.nav-bar .menu > li').removeClass('active')
        $(this).parent().addClass('active')
    });

    $('.sliding').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 900,
        speed: 900,
        autoplay: true,
        centerMode: true,
        centerPadding: '0px',
        cssEase: 'linear',
        speed: 5000,
        Infinity: true,
        responsive:[
            {
                breakpoint:1199,
                settings:{
                    slidesToShow:2,
                    centerPadding:'50px'
                }
            },
            {
                breakpoint:991,
                settings:{
                    slidesToShow:2,
                    centerPadding:'0px'
                }
            },
            {
                breakpoint:767,
                settings:{
                    slidesToShow:1,
                    centerPadding:'30px'
                }
            },
            {
                breakpoint:575,
                settings:{
                    slidesToShow:1,
                    centerPadding:'0px',
                    arrows:false,
                }
            }
        ]
    });

    $('.login').click(function () {
        $(this).toggleClass('dialog-open');
        $('.nav-bar .dialog-box-login').slideToggle(300);
    });

    $('.bar-btn').click(function(){
        $('.nav-bar').toggleClass('on')
        $('.nav-bar .menu').slideToggle()
    })
});