// (function(){
//

var computedStyleX = function () {
  if (!window.getComputedStyle) {
    window.getComputedStyle = function(element) {
      return element.currentStyle;
    };
  }
};

var style = function(el,pr){
  return window.getComputedStyle(el, null);
}

var nav = document.getElementsByClassName('swipe-nav')[0],
    nav1 = nav.getElementsByClassName('nav-top')[0],
    nav2 = nav.getElementsByClassName('nav-middle')[0],
    navItem = nav2.getElementsByClassName('nav-item'),
    //nav3 = document.getElementsByClassName('nav-filter'),
    swiperSlide = document.getElementsByClassName('mainslide');

var nav1t = window.innerHeight / 100 * 23.75;

var savest;

var mySwiper = new Swiper ('.mainswiper', {
  direction: 'horizontal',
  loop: false,
  resistance: true,
  resistanceRatio : 0
});



var swipeScrollParallax = function(){
    var i = mySwiper.activeIndex;

    var h1 = swiperSlide[i].getElementsByTagName('h1')[0],
        bg = swiperSlide[i].getElementsByClassName('bgcolor')[0],
        st;

    swiperSlide[i].addEventListener('scroll', function(){
      st = this.scrollTop;
      h1.style.opacity = 1 - (st/150);
      nav1.style.opacity = 1 - (st/250);
      nav2.style.opacity = 1 - (st/250);
      nav2.style.top = nav1t - st/1.8 + 'px';
      bg.style.top = - st/2.6 + 'px';

      if(nav2.offsetTop < 0 && Math.abs(nav2.offsetTop) > style(nav2)['height'].split('px')[0]){
        if(!nav2.classList.contains('active')){
          nav2.classList.add('active');
          //nav3[i].classList.add('active');
          savest = st;
        };
      }else if(st < savest && nav2.classList.contains('active')){
        nav2.classList.remove('active');
        //nav3[i].classList.remove('active');
      };
    });
    console.log("swipeScrollParallax",i);
};

var navClickMoveTo = function(){
	console.log(navItem);
    [].forEach.call(navItem,function(item,index,lst){
    	item.addEventListener('click', function(){
    		mySwiper.slideTo(index,600);
	    });
    });
};

var resetParallax = function(){
  for(var i = 0; swiperSlide.length > i; ++i){
    var h1 = swiperSlide[i].getElementsByTagName('h1')[0],
        bg = swiperSlide[i].getElementsByClassName('bgcolor')[0];

    h1.style.opacity = 1;
    nav1.style.opacity = 1;
    //nav2.style.top = nav1t + 'px';
    nav2.classList.remove('active');
    //nav3[i].classList.remove('active');
    bg.style.top = 0;
    swiperSlide[i].scrollTop = 0;
    console.log("resetParallax",i);
  };
};

var changeNavIndex = function(){
  var s = mySwiper.activeIndex, p = mySwiper.previousIndex;
  navItem[s].classList.add('active');
  navItem[p].classList.remove('active');
};

mySwiper.on('slideChange', function () {
  resetParallax();
  changeNavIndex();
  swipeScrollParallax();
});

window.addEventListener('DOMContentLoaded', function(){
  swipeScrollParallax();
  navClickMoveTo();
});

var mswiper1 = new Swiper('#banner1', {
	autoplay: {
		delay: 3000
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

var mswiper1 = new Swiper('#banner2', {
	autoplay: {
		delay: 3000
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});


//
// })();
