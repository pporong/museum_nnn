$(document).ready(function(){

    // a태그 속성 해제
    $("a[href='#']").click(function(e){
        e.preventDefault();
    });


    // 탑메뉴
    $('.gnb-area >.top-menu-wrap >.top-menu >.menu04').click(function(){
        $('.gnb-area >.top-menu-wrap >.top-menu >.menu04').toggleClass('active')
    })
    $('.gnb-area >.top-menu-wrap >.top-menu >.menu04').mouseleave(function(){
        setTimeout(function(){
                    $('.gnb-area >.top-menu-wrap >.top-menu >.menu04').removeClass('active')

        }, 700)
    })
    $('.gnb-area >.top-menu-wrap >.top-menu >.menu05').click(function(){
        $('.gnb-area >.top-menu-wrap >.top-menu >.menu05').toggleClass('active')
    })
    $('.gnb-area >.top-menu-wrap >.top-menu >.menu05').mouseleave(function(){
        setTimeout(function(){
                    $('.gnb-area >.top-menu-wrap >.top-menu >.menu05').removeClass('active')

        }, 700)
    })
    


    // 현재 슬라이드 닷츠
    // init slide change : 메인슬라이드
    $('.all-wrap >.main-visual >.main-slider').on('init', function(event, slick){
        $('.slider-dots-box >.slider-dots >.dots').eq(0).addClass('active');
        $('.main-visual >.slider-dots-box .control-btn-box >.pause').addClass('active')
    });

    // init slide change : 서브슬라이드
    $('.all-wrap >.section02 >.section02-post').on('init', function(event, slick){
        $('.all-wrap >.section02 >.section02-title >.title-navi .pause').addClass('active')
    });

    // init slide change : 섹션3 슬라이드
    $('.section03 >.notice-area .notice-slider >.n-slide').on('init', function(event, slick){
        $('.section03 >.notice-area .notice-slider >.slider-dots-box >.slider-dots >.dots').eq(0).addClass('active');
        $('.section03 >.notice-area .notice-slider >.slider-dots-box >.slider-dots >.control-btn-box >.pause').addClass('active')
    });



    // 메인 슬라이드
    $('.all-wrap >.main-visual >.main-slider').slick({
        autoplay: true ,
        autoplaySpeed : 2000 , 
        dots: false ,
        pauseOnHover: false ,
        arrows : false ,
    })

    // 메인 슬라이드 버튼
    $('.all-wrap >.main-visual .slider-btn-box >.prev-btn').click(function(){
        $('.all-wrap >.main-visual >.main-slider').slick('slickPrev')
    });
    $('.all-wrap >.main-visual .slider-btn-box >.next-btn').click(function(){
        $('.all-wrap >.main-visual >.main-slider').slick('slickNext')
    });

    // 메인 슬라이드 닷츠
    $('.slider-dots-box >.slider-dots >.dots').click(function(){

        var num = $(this).index()

        $('.all-wrap >.main-visual >.main-slider').slick('slickGoTo', num)
    });
    
    // On before slide change
    $('.main-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
         $('.slider-dots-box >.slider-dots >.dots').eq(nextSlide).addClass('active')
         $('.slider-dots-box >.slider-dots >.dots').eq(nextSlide).siblings().removeClass('active')
  });

    
    // 메인 슬라이드 컨트롤 버튼
    $('.main-visual >.slider-dots-box .control-btn-box >.play').click(function(){
        $('.all-wrap >.main-visual >.main-slider').slick("slickPlay")
        $('.main-visual >.slider-dots-box .control-btn-box >.play').removeClass('active')
        $('.main-visual >.slider-dots-box .control-btn-box >.pause').addClass('active')
    });
    $('.main-visual >.slider-dots-box .control-btn-box >.pause').click(function(){
        $('.all-wrap >.main-visual >.main-slider').slick("slickPause")
        $('.main-visual >.slider-dots-box .control-btn-box >.play').addClass('active')
        $('.main-visual >.slider-dots-box .control-btn-box >.pause').removeClass('active')
    });


    // 섹션02 ; 서브슬라이드 (전시 섹션)
    $('.all-wrap >.section02 >.section02-post').slick({
        slidesToShow: 4,
        swipeToSlide : true ,
        dots: false ,
        arrows : false ,
        autoplay : true ,
        autoplaySpeed : 2000 , 

    })
    // 서브 슬라이드 버튼
    $('.all-wrap >.section02 >.section02-title >.title-navi .prev-btn').click(function(){
        $('.all-wrap >.section02 >.section02-post').slick('slickPrev')
    });
    $('.all-wrap >.section02 >.section02-title >.title-navi .next-btn').click(function(){
        $('.all-wrap >.section02 >.section02-post').slick('slickNext')
    });

    // 서브 슬라이드 컨트롤 버튼
    $('.all-wrap >.section02 >.section02-title >.title-navi .play').click(function(){
        $('.all-wrap >.section02 >.section02-post').slick("slickPlay")
        $('.all-wrap >.section02 >.section02-title >.title-navi .play').removeClass('active')
        $('.all-wrap >.section02 >.section02-title >.title-navi .pause').addClass('active')
    });
    $('.all-wrap >.section02 >.section02-title >.title-navi .pause').click(function(){
        $('.all-wrap >.section02 >.section02-post').slick("slickPause")
        $('.all-wrap >.section02 >.section02-title >.title-navi .play').addClass('active')
        $('.all-wrap >.section02 >.section02-title >.title-navi .pause').removeClass('active')
    });



    // 탭메뉴
    $('.section03 >.notice-area >.notice-tab >.tab-box >.tab-btn01').click(function(){
        $('.section03 >.notice-area >.notice-tab >.tab-box >.tab-btn01').addClass('active')
        $('.section03 >.notice-area >.notice-tab >.tab-content >.content01').addClass('active')
        $('.section03 >.notice-area >.notice-tab >.tab-box >.tab-btn01').siblings().removeClass('active')
        $('.section03 >.notice-area >.notice-tab >.tab-content >.content01').siblings().removeClass('active')
    });

    $('.section03 >.notice-area >.notice-tab >.tab-box >.tab-btn02').click(function(){
        $('.section03 >.notice-area >.notice-tab >.tab-box >.tab-btn02').addClass('active')
        $('.section03 >.notice-area >.notice-tab >.tab-content >.content02').addClass('active')
        $('.section03 >.notice-area >.notice-tab >.tab-box >.tab-btn02').siblings().removeClass('active')
        $('.section03 >.notice-area >.notice-tab >.tab-content >.content02').siblings().removeClass('active')
    })

    $('.section03 >.notice-area >.notice-tab >.tab-box >.tab-btn03').click(function(){
        $('.section03 >.notice-area >.notice-tab >.tab-box >.tab-btn03').addClass('active')
        $('.section03 >.notice-area >.notice-tab >.tab-content >.content03').addClass('active')
        $('.section03 >.notice-area >.notice-tab >.tab-box >.tab-btn03').siblings().removeClass('active')
        $('.section03 >.notice-area >.notice-tab >.tab-content >.content03').siblings().removeClass('active')
    })

    $('.section03 >.notice-area >.notice-tab >.tab-box >.tab-btn04').click(function(){
        $('.section03 >.notice-area >.notice-tab >.tab-box >.tab-btn04').addClass('active')
        $('.section03 >.notice-area >.notice-tab >.tab-content >.content04').addClass('active')
        $('.section03 >.notice-area >.notice-tab >.tab-box >.tab-btn04').siblings().removeClass('active')
        $('.section03 >.notice-area >.notice-tab >.tab-content >.content04').siblings().removeClass('active')
    })


    // 섹션3 슬라이드 
    $('.section03 >.notice-area .notice-slider >.n-slide').slick({
        autoplay : true ,
        arrows : false ,
        autoplaySpeed : 2000 , 

    })  
    // 섹션3 슬라이드 닷츠
    $('.section03 >.notice-area .notice-slider >.slider-dots-box >.slider-dots >.dots').click(function(){

        var num = $(this).index()

        $('.section03 >.notice-area .notice-slider >.n-slide').slick('slickGoTo', num)
    });    
    // On before slide change
    $('.section03 >.notice-area .notice-slider >.n-slide').on('beforeChange', function(event, slick, currentSlide, nextSlide){
         $('.section03 >.notice-area .notice-slider >.slider-dots-box >.slider-dots >.dots').eq(nextSlide).addClass('active')
         $('.section03 >.notice-area .notice-slider >.slider-dots-box >.slider-dots >.dots').eq(nextSlide).siblings().removeClass('active')
    });    
    
    // 섹션3 슬라이드 컨트롤 버튼
    $('.section03 >.notice-area .notice-slider >.slider-dots-box >.slider-dots >.control-btn-box >.play').click(function(){
        $('.section03 >.notice-area .notice-slider >.n-slide').slick("slickPlay")
        $('.section03 >.notice-area .notice-slider >.slider-dots-box >.slider-dots >.control-btn-box >.play').removeClass('active')
        $('.section03 >.notice-area .notice-slider >.slider-dots-box >.slider-dots >.control-btn-box >.pause').addClass('active')
    });
    $('.section03 >.notice-area .notice-slider >.slider-dots-box >.slider-dots >.control-btn-box >.pause').click(function(){
        $('.section03 >.notice-area .notice-slider >.n-slide').slick("slickPause")
        $('.section03 >.notice-area .notice-slider >.slider-dots-box >.slider-dots >.control-btn-box >.play').addClass('active')
        $('.section03 >.notice-area .notice-slider >.slider-dots-box >.slider-dots >.control-btn-box >.pause').removeClass('active')
    });



    // 섹션4 가운데 슬라이드
    $('.section04 >.section04-mid >.mid-slider').slick({
        autoplay : false,
        dots : false , 
        arrows : false ,
        speed : 1000 ,
    })
    // 섹션4 가운데 슬라이드 버튼 
    $('.section04 >.section04-mid >.mid-title-box >.pagination >.pagination-area >.btn-box >.prev').click(function(){
        $('.section04 >.section04-mid >.mid-slider').slick('slickPrev')
    });
    $('.section04 >.section04-mid >.mid-title-box >.pagination >.pagination-area >.btn-box >.next').click(function(){
        $('.section04 >.section04-mid >.mid-slider').slick('slickNext')
    });
    // 섹션4 가운데 슬라이드 페이지 수
    $('.section04 >.section04-mid >.mid-slider').on('beforeChange', function(event,slick, currentSlide, nextSlide){
        $('.section04 >.section04-mid >.mid-title-box >.pagination >.pagination-area >.page-num-box').text(nextSlide+1 + " / 4 ")
      });


    // 섹션4 오른쪽 슬라이드
    $('.section04 >.section04-right >.right-slider').slick({
        autoplay : false,
        dots : false , 
        arrows : false ,
        speed : 1000 ,
    })    
    // 섹션4 오른쪽 슬라이드 버튼 
    $('.section04 >.section04-right >.right-title-box >.pagination >.pagination-area >.btn-box >.prev').click(function(){
        $('.section04 >.section04-right >.right-slider').slick('slickPrev')
    });
    $('.section04 >.section04-right >.right-title-box >.pagination >.pagination-area >.btn-box >.next').click(function(){
        $('.section04 >.section04-right >.right-slider').slick('slickNext')
    });
    // 섹션4 오른쪽 슬라이드 페이지 수
    $('.section04 >.section04-right >.right-slider').on('beforeChange', function(event,slick, currentSlide, nextSlide){
        $('.section04 >.section04-right >.right-title-box >.pagination >.pagination-area >.page-num-box').text(nextSlide+1 + " / 5 ")
      });



    // 푸터 메뉴
    $('.footer-wrap >.footer-bottom >.fb-box02 >.familysite01 > a').click(function(){
        if( $(this).hasClass('active') ){
            $('.footer-wrap >.footer-bottom >.fb-box02 >.familysite01 > a').removeClass('active')
            $('.footer-wrap >.footer-bottom >.fb-box02 >.familysite01 >.list').removeClass('active')
        } else {
        $('.footer-wrap >.footer-bottom >.fb-box02 >.familysite > a').removeClass('active')
        $('.footer-wrap >.footer-bottom >.fb-box02 >.familysite >.list').removeClass('active')
        $('.footer-wrap >.footer-bottom >.fb-box02 >.familysite01 > a').addClass('active')
        $('.footer-wrap >.footer-bottom >.fb-box02 >.familysite01 >.list').addClass('active')
        }
    })  
    $('.footer-wrap >.footer-bottom >.fb-box02 >.familysite02 > a').click(function(){
        if( $(this).hasClass('active') ){
            $('.footer-wrap >.footer-bottom >.fb-box02 >.familysite02 > a').removeClass('active')
            $('.footer-wrap >.footer-bottom >.fb-box02 >.familysite02 >.list').removeClass('active')
        } else {
        $('.footer-wrap >.footer-bottom >.fb-box02 >.familysite > a').removeClass('active')
        $('.footer-wrap >.footer-bottom >.fb-box02 >.familysite >.list').removeClass('active')
        $('.footer-wrap >.footer-bottom >.fb-box02 >.familysite02 > a').addClass('active')
        $('.footer-wrap >.footer-bottom >.fb-box02 >.familysite02 >.list').addClass('active')
        }
    })
    $('.footer-wrap >.footer-bottom >.fb-box02 >.familysite03 > a').click(function(){
        if( $(this).hasClass('active') ){
            $('.footer-wrap >.footer-bottom >.fb-box02 >.familysite03 > a').removeClass('active')
            $('.footer-wrap >.footer-bottom >.fb-box02 >.familysite03 >.list').removeClass('active')
        } else {
        $('.footer-wrap >.footer-bottom >.fb-box02 >.familysite > a').removeClass('active')
        $('.footer-wrap >.footer-bottom >.fb-box02 >.familysite >.list').removeClass('active')
        $('.footer-wrap >.footer-bottom >.fb-box02 >.familysite03 > a').addClass('active')
        $('.footer-wrap >.footer-bottom >.fb-box02 >.familysite03 >.list').addClass('active')
        }
    })


    // 탑버튼
    $('.top-btn').click(function(){

        $('html, body').animate({
        'scrollTop' : 0 ,
        } , 50)
      
    })

    // 동영상 팝업창 열기
    $('.section04 >.section04-right >.right-slider .content04 >.img-box').click(function(){
        $('.all-wrap >.video-wrap').addClass('active')
        var video_1 = $('.all-wrap >.video-wrap >.video-box video').get(0);
        video_1.play()
    })
    // 동영상 팝업창 닫기
    $('.all-wrap >.video-wrap >.video-box >.top img').click(function(){
        $('.all-wrap >.video-wrap').removeClass('active')
        var video_1 = $('.all-wrap >.video-wrap >.video-box video').get(0);
        video_1.currentTime = 0;
        video_1.pause()
    })


});

// 탑버튼 윈도우
$(window).scroll(function(){
    let scrollTop = $(this).scrollTop()
})