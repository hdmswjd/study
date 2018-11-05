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

    // 체크박스 모두 선택
    $("#checkall").change(function() {
        if($("#checkall").prop("checked")){
            $("input[name=chk]").prop("checked",true);	       
        }else{
            $("input[name=chk]").prop("checked",false);
        }
     });

     // 팝업 열고 닫기
    $(".select").click(function(e) {
        e.preventDefault(); 
        $('.popup').show();			
    });
    $('.pop-list > li ').click(function() { 
      $('.popup').hide();
      
    });

     //팝업에서 text선택시 인풋 밸루값으로 결과값
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

    // 탭메뉴 스크롤시 상단고정
    var $tabNav = $( ".tab-nav");
        var tabOffset = $tabNav.offset();
        var $topArea = $( ".top-area");
        $( window ).scroll( function() {
            if ( $( window ).scrollTop() > tabOffset.top - $topArea.outerHeight(true)) {
                $tabNav.addClass("active");
            } else {
                $tabNav.removeClass("active");
            }
        });

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
        });

});


/*$(".bt.line").on('click', function(e){
        e.preventDefault(); 
        $(this).addClass("active");		
    });
    $(".bt.line").off('click', function(e){
        e.preventDefault(); 
        $(this).removeClass("active");		
    });*/