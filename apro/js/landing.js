$(document).ready(function() {

    var mwidth = $(document).width();

    
    if(mwidth>1000){
        //첫화면 이미지 애니메이션
        $(".timg .img1").animate({bottom:'0px'},800);
        $(".timg .img2").delay(1000).animate({left:'0px'},600);
        $(".timg .img3").animate({right:'0px'}).delay(900).animate({opacity:"1"},500);
 

    
    }
    
    // 투자 스와이프
     var swiper = new Swiper('.swiper-container', {
        });
        var $tabLink = $( ".tab a");
        $tabLink.click(function(e) {
            e.preventDefault();
            $tabLink.removeClass("on");
            $(this).addClass("on");
            var tabIndex = $(this).index();
            swiper.slideTo(tabIndex, 300);
        });
    
    
    // 투자 tab-txt
    $(".tab>a").click(function(){
         var tabnum = $('.tab>a').index(this);
        $(".tab-txt>li").eq(tabnum).addClass('on').siblings().removeClass('on');

    });
    
    
    
    //스크롤이벤트
    $(window).scroll(function(){
		var sTop = $(this).scrollTop();
		//console.log(sTop);

        if(mwidth>1000){
            
            
             //바로투자
              if(sTop>=400){
                 $(".section2 .txt").delay(200).animate({opacity:"1", top:"225px"},800);
              }
             //나의지갑
              if(sTop>=1100){
                 $(".img02-1").delay(200).animate({left:"-48px"},500);
                 $(".img02-2").delay(200).animate({left:"157px"},1000);
                 $(".section3 .txt").delay(200).animate({opacity:"1", top:"300px"},800);
              }
             //즉시송금
              if(sTop>=2000){
                 $(".img03").delay(200).animate({opacity:"1",bottom:"0"},400);
                 $(".img04").delay(600).animate({width:"213px",bottom:"182px",left:"205px"},700);
                    $(".section4 .txt").delay(200).animate({opacity:"1", top:"300px"},1000);
                }
             //금융정보
              if(sTop>=2700){
                   $(".section5 .txt").delay(200).animate({opacity:"1", top:"300px"},800);
                   
                  function swing() {
                        $('.img05in>img').animate({top:'-495px'},3000).delay(400).animate({top:'0px'},3000).delay(500);
                   }
                   swing();
              }

		}//1000보다 클때 
        
        
        if(mwidth<=1000){
            //링크버튼 하단 100%
            if(sTop>=240){
                 $(".link-button").addClass('on');
              }
            else{ $(".link-button").removeClass('on'); } 
        
        }
        
        
        
        
        
        if(sTop>=0 && sTop<400){
            $(".pagination>span").eq(0).addClass('on').siblings().removeClass('on');
        }
        if(sTop>=400 && sTop<1100){
            $(".pagination>span").eq(1).addClass('on').siblings().removeClass('on');
        }
        if(sTop>=1100 && sTop<2000){
            $(".pagination>span").eq(2).addClass('on').siblings().removeClass('on');
        }
        if(sTop>=2000 && sTop<2700){
            $(".pagination>span").eq(3).addClass('on').siblings().removeClass('on');
        }
        if(sTop>=2700 && sTop<3600){
            $(".pagination>span").eq(4).addClass('on').siblings().removeClass('on');
        }
        
	});//스크롤이벤트
	

    
    
});

