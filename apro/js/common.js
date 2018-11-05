$(document).ready(function() {

    // input text값 다 입력시 버튼 활성화
    $(".inp-code").on("keyup", function() {
        var len =$(this).val().length;
        (len == 6) ? $(".bt.line").addClass("active") :  $(".bt.line").removeClass("active");
    });
    
    // drop버튼 
    $(".drop-bt").click(function() {
        $(this).hasClass("on") ? $(this).removeClass("on") : $(this).addClass("on");     
    });

     //체크박스 모두 선택
     $(document).on('change',"#checkall",function() {
    	var wrap = $(this).closest('#wrap');
        wrap.find("input[name=chk]").prop("checked",this.checked).change();
        wrap.find(".drop-bt").addClass("on");       
     });
    
    $(document).on('change',"input[name=chk]",function() {
         var chkCnt = $("input[name=chk]:checked").length;
         var allCnt =  $("input[name=chk]").length;
         if( chkCnt == allCnt) {
             $("#checkall").prop("checked", true);
        } else {
            $("#checkall").prop("checked", false);
        }  
     });

     // 팝업 열고 닫기 - 개발에서 삭제
    $(".select").click(function(e) {
        e.preventDefault(); 
        $('.popup').show();			
    });
    $('.pop-list > li ').click(function() { 
      $('.popup').hide();  
    });
    
     //팝업에서 text선택시 인풋 밸루값으로 결과값 - 개발에서 삭제
    var innerTxt = {
        $txt : null,
        $listItems : null,

        init : function() {
            this.$txt = $('p.select');
            this.$inpTxt = $('input.select');
            this.$listItems = $('.pop-list > li');
        },

        initEvt : function() {
            this.$listItems.on("click",function(){
                var $this = $(this);
                var objA = $this.find(".txt1").text();
                var objB = $this.find(".txt2").text();
                innerTxt.setSelectItem(objA, objB);
            });
        },    
        setSelectItem : function(objA, objB) {
            this.$inpTxt.val(objA, objB);
            var value = "<span class='txt1'>" + objA + "</span><span class='txt2'>" + objB + "</span>";
            this.$txt.html(value);  
        },
    }
    innerTxt.init();
    innerTxt.initEvt();

     //투자상품 현장실사 swiper
     if($(".photoswiper").length > 0) {
        var mySwiper = new Swiper('.photoswiper', {
            slidesPerView: 'auto',
            spaceBetween: 10,
            pagination: {
            el: '.swiper-pagination',
            clickable: true,
            },
        });
        $('.photoswiper').data('swipe', mySwiper );
    }
   
    // 탭메뉴 스크롤시 상단고정
    var $tabNav = $( ".tab-nav");
    var tabOffset = $tabNav.offset();
    var $topArea = $( ".top-area");
    if($( ".tab-nav").length > 0) {
        $( window ).scroll( function() {
            if ( $( window ).scrollTop() > tabOffset.top - $topArea.outerHeight(true)) {
                $tabNav.addClass("active");
            } else {
                $tabNav.removeClass("active");
            }
        });
    }

     // 탭메뉴 스크립트
    var $tabCont = $(".tab-cont");
    var $tabBt = $(".tab-nav a");
    $tabBt.click(function(e) {
        e.preventDefault();
        var tabIndex = $(this).index();
        $tabCont.hide();
        $tabCont.eq(tabIndex).show();
        $tabBt.removeClass("on");
        $tabBt.eq(tabIndex).addClass("on");	
        var myswiper = $tabCont.eq(tabIndex).find(".photoswiper").data("swipe");	
        if(myswiper){
            myswiper.update();
        }
    });

    //투자하기 버튼 클릭시 금액 입력
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    $(".add-val").off("click").on("click", function(e) {
        var obj = $(".prinp");
        var objVal = (obj.val() == "" ) ? "0" : obj.val() ;
        var objAct = parseInt(objVal.replace(/,/g,''));
        var addVal = $(this).data("addvalue");
        obj.val(numberWithCommas(objAct + addVal)).change();
    });

    $(".reset-val").off("click").on("click", function(e) {
        $(".prinp").val('').change();
    });

    //투자하기 맞춤상품 버튼
    var curSctop = 0;
    var prevSctop = 0;
    var $filterBt = $(".filterbt");
    var $topBt = $(".top-bt");
    window.addEventListener('scroll', throttle(onScrolling, 1000));

    $(window).scroll(onScrolling);
    $(window).trigger("scroll");

    function onScrolling(e) {
        curSctop = $(window).scrollTop();
        if (prevSctop < curSctop) {
            if ($filterBt.length > 0) {$filterBt.removeClass("on");} 
            if ($topBt.length > 0) {$topBt.addClass("on");}
        } else {
            if ($filterBt.length > 0) {$filterBt.addClass("on");}
            if ($topBt.length > 0) {$topBt.removeClass("on");}
        }
        prevSctop = curSctop;
    }
    function throttle(fn, wait) {
        var time = Date.now();
        return function() {
            if ((time + wait - Date.now()) < 0) {
            fn();
            time = Date.now();
            }
        }
    };

    //투자상품 결과 페이지 swiper
    if($(".search-info > .swiper-container").length > 0) {
        var swiper1 = new Swiper('.search-info > .swiper-container', {
            slidesPerView: 4,
            freeMode: true,
        });
    }

    //커뮤니티 swiper 메뉴
    if($(".tab-swiper").length > 0) {
        var swiper3 = new Swiper('.tab-swiper', {
            slidesPerView: 'auto',
            spaceBetween: 20,
            freeMode: true,
            slideToClickedSlide: true,  
        });
    }
    $(".tabbt").click(function(e) { 
        e.preventDefault();
        $(".tabbt").removeClass("on");
        $(this).addClass("on");	

    }); 

    //댓글에서 수정 삭제버튼
    $(document).on("click",".mody-btn", function() {
        $(this).hasClass("on") ? $(this).removeClass("on") : $(this).addClass("on");  
    });
   
    //커뮤니티 말머리 swiper 메뉴
    if($(".tab-swiper2").length > 0) {
        var swiper4 = new Swiper('.tab-swiper2', {
            slidesPerView: 'auto',
            spaceBetween: 10,
            freeMode: true,
            slideToClickedSlide: true,  
        });
    }
    $(".tagbt").click(function(e) { 
        e.preventDefault();
        $(".tagbt").removeClass("on");
        $(this).addClass("on");	
    }); 

    //투자 탭 swiper 메뉴
    if($(".tab-swiper3").length > 0) {
        var swiper2 = new Swiper('.tab-swiper3', {
            slidesPerView: 'auto',
            spaceBetween:0,
            freeMode: true,
            slideToClickedSlide: true,  
        });
        swiper2.update();
    }
    //개발에서 삭제
    $(".tabbt2").click(function(e) { 
        e.preventDefault();
        $(".tabbt2").removeClass("on");
        $(this).addClass("on");	
    }); 
   
    //투자현황 swiper - 개발에서 삭제
    if($(".investment").length > 0) {
        var swiper5 = new Swiper('.investment', {
            autoHeight: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }

    //투자현황 투자한 상품 접고 펼쳐보기
    $(document).on('click',".btarr",function() {
        var $li = $(this).closest("li");
        if ($li.hasClass("on")) {
            $li.removeClass("on");
        } else {
            $li.removeClass("on");
            $(this).parents("li").addClass("on");
        } 
    });

    // 기간버튼
    $(".date-bt button").click(function() {
        if($(this).hasClass("bt-period")) {
            if($(this).hasClass("on")) {
                $(this).removeClass("on");
                $(".date-set").removeClass("on");              
            } else {
                $(".date-bt button").removeClass("on") ;
                $(this).addClass("on") ;
                $(".date-set").addClass("on"); 
            };
        } else {
            $(".date-bt button").removeClass("on") ;
            $(this).addClass("on") ;
            $(".date-set").removeClass("on");
        }
    });
    
    //투자성향
    if($("#personTest").length > 0) {
        var checkedMaxPage = 0;
        var $btns = $('#personTest .anwser-box button');
        var $btResult = $('.bt-result');
        var $slidePage = $('#personTest .swiper-slide');
        var personTest = new Swiper('#personTest', {
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 20,
            allowSlideNext: false,
            threshold: 200,
        });

        $btns.on('click', selectAnswer);
        personTest.on('slideChange', onTestSlideChange);
        $btResult.on('click', goResult);

        function onTestSlideChange() {
            if (checkedMaxPage <= personTest.activeIndex) {
                personTest.allowSlideNext = false;
            } else {
                personTest.allowSlideNext = true;
            }
        }

        function selectAnswer(e) {
            var $parent = $(this).parents('.swiper-slide');
            var idx = $parent.index();
            var isMulti = $parent.data('multi');
            if (isMulti) {
                $(this).hasClass("on") ? $(this).removeClass("on") : $(this).addClass("on");
            } else {
                var $answers = $parent.find($btns);
                $answers.removeClass("on");
                $(this).addClass("on");		
            }
            if (idx >= checkedMaxPage) {
                checkedMaxPage = idx + 1;
            }
            personTest.allowSlideNext = true;
            personTest.slideNext(500);
        }
                
        function goResult(e) {
            var arrResult = [];
            $slidePage.each(function(){
                var $tgBt = $(this).find('button.on');
                if ($tgBt.length>1) {
                    var murtiResult = [];
                    $tgBt.each(function(){
                        var idx = $(this).parent('li').index();
                        murtiResult.push(idx);
                    });
                    arrResult.push(murtiResult);
                } else {
                    var idx = $tgBt.parent('li').index();
                    arrResult.push(idx);
                }
            });
        }		
    }

     // 송금하기 탭 스크립트
    var $tabCont2 = $(".tab-cont2 ");
    var $tabBt2 = $(".tab-nav3 li a");
    $tabBt2.click(function(e) {
        e.preventDefault();
        var tabIndex = $(this).parent("li").index();
        $tabCont2.hide();
        $tabCont2.eq(tabIndex).show();
        $tabBt2.removeClass("on");
        $tabBt2.eq(tabIndex).addClass("on");	
    });

    //송금하기 목록 리스트 개발에서 수정
    $(".send-list li a").click(function(e) {
        e.preventDefault();
        $(".send-list li ").removeClass("on") ;
        $(this).parents("li").addClass("on") ;
    });


    //faq  개발에서 삭제
    $(".accord ul li a").click(function(e) {
        e.preventDefault();
        $(".accord ul li").each(function(){
            var $btn = $(this).find("a");
            if ($btn[0] == e.currentTarget) {
                $(this).hasClass("on") ? $(this).removeClass("on") : $(this).addClass("on");
            } else {
                $(this).removeClass("on")                 
            };
        });
    });

    //pull to refresh 개발에서 삭제
    if($(".alarm").length > 0) {
            PullToRefresh.init({
            mainElement: '.alarm',
            onRefresh: function() { }
        });
    }

    //도움말 팝업
    $(".ico-info").click(function(e) {
        e.preventDefault();
        var $tip = $(this).parents("li").find(".tip-box");
        $tip.hasClass("on") ? $tip.removeClass("on") : $tip.addClass("on");    
    });
    $(".tip-box .close").click(function(e) {
        var $tip = $(this).parents(".tip-box");
        $tip.removeClass("on");
    });	

    //팝업 
    $(".pop-bt").click(function(e) {
        e.preventDefault(); 
        $('.popup').show();			
    });
    $('.pop-list > a , .popup .close').click(function() { 
        $('.popup').hide();  
    });
   
  // Bespoke functions:
  // The above functions have no jQuery Dependencies.
  // The below code uses jQuery solely for this quick demo.
  if ( window.iphoneX === true ) {
    $('#wrap').addClass('iphone');
  }
  
});

(function(window){

    // Really basic check for the ios platform
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  
    // Get the device pixel ratio
    var ratio = window.devicePixelRatio || 1;
  
    // Define the users device screen dimensions
    var screen = {
      width : window.screen.width * ratio,
      height : window.screen.height * ratio
    };
  
    // iPhone X Detection
    if (iOS && screen.width == 1125 && screen.height === 2436) {
  
      // Set a global variable now we've determined the iPhoneX is true
      window.iphoneX = true;
  
      // Adds a listener for ios devices that checks for orientation changes.
      window.addEventListener('orientationchange', update);
      update();
    }
  
    // Each time the device orientation changes, run this update function
    function update() {
      notch();
    }
  
    // Notch position checker
    function notch() {
  
      var _notch = '';
  
      if( 'orientation' in window ) {
        // Mobile
        if (window.orientation == 90) {
          _notch = 'left';
        } else if (window.orientation == -90) {
          _notch = 'right';
        }
      } else if ( 'orientation' in window.screen ) {
        // Webkit
        if( screen.orientation.type === 'landscape-primary') {
          _notch = 'left';
        } else if( screen.orientation.type === 'landscape-secondary') {
          _notch = 'right';
        }
      } else if( 'mozOrientation' in window.screen ) {
        // Firefox
        if( screen.mozOrientation === 'landscape-primary') {
          _notch = 'left';
        } else if( screen.mozOrientation === 'landscape-secondary') {
          _notch = 'right';
        }
      }
  
      window.notch = _notch;
    }
  
  })(window);
  
